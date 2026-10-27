"""Build the GitHub Pages site from the artifact-format game files.

The game files are written for Claude artifacts, which add the page skeleton at publish time.
This wraps them in that skeleton so they run as standalone pages (GitHub Pages and the mobile app):
  ponzi.html                 -> index.html      (latest version)
  versions/ponzi-vX.html     -> play/vX.html    (every saved version)
Run it after saving a new version:  python build.py
"""
import os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
# Keeps the game clear of the status bar and home indicator when it runs full screen on a phone.
SKELETON_HEAD = (
    '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
    '<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
    'body{margin:0}[hidden]{display:none!important}'
    '.title,.intro{top:env(safe-area-inset-top,0px);bottom:env(safe-area-inset-bottom,0px)}</style>\n'
)


def wrap(src):
    # everything before the first body element (title, metas, fonts, styles) belongs in <head>
    cut = src.index('<div class="screen" id="app"')
    return SKELETON_HEAD + src[:cut].strip() + '\n</head>\n<body>\n' + src[cut:].strip() + '\n</body>\n</html>\n'


def main():
    with open(os.path.join(ROOT, 'ponzi.html'), encoding='utf8') as f:
        latest = f.read()
    with open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf8', newline='\n') as f:
        f.write(wrap(latest))
    os.makedirs(os.path.join(ROOT, 'play'), exist_ok=True)
    built = []
    for name in os.listdir(os.path.join(ROOT, 'versions')):
        m = re.fullmatch(r'ponzi-v([\d.]+)\.html', name)
        if not m:
            continue
        with open(os.path.join(ROOT, 'versions', name), encoding='utf8') as f:
            src = f.read()
        if '<div class="screen" id="app"' not in src:
            continue
        with open(os.path.join(ROOT, 'play', f'v{m.group(1)}.html'), 'w', encoding='utf8', newline='\n') as f:
            f.write(wrap(src))
        built.append(m.group(1))
    built.sort(key=lambda v: [int(x) for x in v.split('.')])
    print('index.html + play/', ', '.join('v' + v for v in built))


if __name__ == '__main__':
    main()
