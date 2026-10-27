# Translations

The game is written in English. Every player-facing line goes through `$t`:

- plain strings: `$t("Back")`
- templates: `` $t`Signed ${name} for ${amount}.` `` (looked up as `Signed {0} for {1}.`)
- markup templates are translated piece by piece: the text between block tags, with `<b>`, `<i>`, `<em>` kept inside the sentence, plus `aria-label` values.

The Turkish dictionary is the `DICT` object near the top of the script in `ponzi.html`, keyed by the exact English text.
In a Turkish line, `{0:gen}`, `{0:acc}`, `{0:dat}`, `{0:loc}` and `{0:abl}` add a case suffix to a name (Castillo'nun, Port Ashford'a).

**When you add or change English text:** wrap it in `$t` and add the Turkish to `DICT` under the new English key.
If the English changes and the key isn't updated, that line quietly falls back to English in the Turkish game.

The language is picked on the title screen, saved in localStorage (`es-lang`) and in the URL hash (`#lang=tr`), and applied on reload.

Files here: `tr*.tsv` are the source translations by key id (`keys.json`); `runtime.js` is the language code that sits at the top of the script; `dict.js` checks the TSVs against the keys.
