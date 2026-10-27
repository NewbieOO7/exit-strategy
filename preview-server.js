// Live preview for ponzi.html. Run: node preview-server.js  →  http://localhost:5500
// Shows the game in a phone-sized frame and reloads it whenever ponzi.html changes.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5500;
const GAME = path.join(__dirname, "ponzi.html");
const clients = new Set();

// The same wrapper the artifact host puts around the page.
const SKELETON = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]{display:none!important}</style></head><body>`;

const FRAME = `<!doctype html><html><head><meta charset="utf-8"><title>Ponzi Run preview</title>
<style>
  body{margin:0;min-height:100vh;background:#1b1f22;color:#9aa;font:13px system-ui,sans-serif;display:flex;flex-direction:column;align-items:center;gap:10px;padding:14px;box-sizing:border-box}
  .bar{display:flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center}
  button{font:inherit;background:#2a3036;color:#dde;border:1px solid #3a424a;border-radius:6px;padding:4px 10px;cursor:pointer}
  button.on{border-color:#e9c46a;color:#e9c46a}
  iframe{border:0;border-radius:18px;background:#000;box-shadow:0 0 0 8px #0b0d0f,0 10px 40px rgba(0,0,0,.5)}
  #status{min-width:9em;text-align:center}
</style></head><body>
<div class="bar">
  <button data-s="375x667">iPhone SE</button><button data-s="390x844" class="on">iPhone 14</button><button data-s="360x640">Small Android</button><button data-s="412x915">Large Android</button>
  <span id="status">Watching ponzi.html</span>
</div>
<iframe id="game" src="/game" width="390" height="844"></iframe>
<script>
  const f=document.getElementById("game"), st=document.getElementById("status");
  document.querySelector(".bar").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
    const [w,h]=b.dataset.s.split("x");f.width=w;f.height=h;
    document.querySelectorAll("button").forEach(x=>x.classList.toggle("on",x===b));});
  const es=new EventSource("/events");
  es.onmessage=()=>{f.src="/game?"+Date.now();st.textContent="Reloaded "+new Date().toLocaleTimeString();};
  es.onerror=()=>{st.textContent="Server stopped";};
</script></body></html>`;

http.createServer((req, res) => {
  const url = req.url.split("?")[0];
  if (url === "/events") {
    res.writeHead(200, {"Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive"});
    res.write(": connected\n\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }
  if (url === "/game") {
    fs.readFile(GAME, "utf8", (err, html) => {
      if (err) { res.writeHead(500); res.end("Could not read ponzi.html"); return; }
      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store"});
      res.end(SKELETON + html + "</body></html>");
    });
    return;
  }
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  res.end(FRAME);
}).listen(PORT, () => console.log(`Preview running at http://localhost:${PORT}`));

// Editors often write a file in several steps; wait for it to settle before reloading.
let timer = null;
fs.watch(GAME, () => {
  clearTimeout(timer);
  timer = setTimeout(() => { for (const c of clients) c.write("data: reload\n\n"); }, 150);
});
