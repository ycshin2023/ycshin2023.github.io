# my_portfolio_resume

Personal portfolio / CV site for **Yeh Chul Shin** — a hand-coded static site
with no framework or build step. Open `index.html` in a browser and it runs.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, headline stats, links into every other page |
| `services.html` | What I offer, plus how a project runs start to finish |
| `skills.html` | Skill groups with proficiency bars, tool list, soft skills |
| `education.html` | Degrees, certifications, current study |
| `experience.html` | Career timeline written as outcomes, plus selected projects |
| `contact.html` | Contact details, enquiry form, short FAQ |

Shared files: `style.css` (all styling), `script.js` (mobile menu, scroll
reveal, skill-bar animation, contact form), `main.JPG` (hero image),
`icons/` (SVG social logos, currently unused — the pages use Font Awesome).

## Editing your content

Content now comes from the CV: SKKU (BBA, Feb 2027), Stockholm Business
School, Westhill Institute, ViewTrade Holding Corp., Crypto PR, ROK Army
service, and the Prata Lang / Perday / LG / BayernLB projects. Anything
still open is marked with an `<!-- EDIT ME -->` comment.

Still worth your attention:

- **Verify the LinkedIn URL.** It was taken from the text of the CV
  (`linkedin.com/in/yeh-chul-shin`) rather than from a working link, so open
  it once to confirm it resolves. Instagram, GitHub and email are confirmed.
- **Phone number** is on the CV but deliberately left off the site. Add it
  to `contact.html` if you want it reachable publicly.
- **Photography and video** appear on the site but not on the CV, which is
  finance-focused. That is fine — just know the two differ.
- **The site and the CV disagree in two places.** The site puts ViewTrade in
  Taipei and lists the KFC role; the CV says Seoul and omits KFC. The site is
  the corrected version — worth bringing the CV into line before you send it.
- **Skill percentages** are a judgement call, not from the CV. Each bar is
  driven by `data-level="NN"` with the label beside it as separate text —
  change both together or they drift apart.

## Colours

The palette lives entirely in the `:root` tokens at the top of `style.css`,
so a retheme means editing that block, not hunting through the file:

| token | value | role |
| --- | --- | --- |
| `--bg` | `#f7f7f5` | page ground, warm off-white |
| `--surface` | `#efefe9` | alternating sections, stats strip, footer |
| `--surface-2` | `#ffffff` | cards and panels |
| `--text` | `#14202e` | body text, deep navy-black |
| `--muted` | `#5c6b7a` | secondary text |
| `--accent` | `#a8403c` | the crimson, deepened for contrast on white |
| `--line` | `#e2e2dc` | neutral hairlines |
| `--line-accent` | `rgba(168,64,60,.28)` | chip and tag edges |

Light rather than dark is deliberate: the site targets financial analyst and
asset management roles, where a near-black page reads as a developer
portfolio and prints badly. Every text/background pair clears WCAG AA — the
lowest is muted text on the alternating sections at 4.74:1.

## Hero animation

The rotating job title is CSS-only. `words` (16s) swaps the text every
quarter; `typing` (4s) runs exactly one type-hold-delete pass per word, so
the two stay locked. The mask is covering the text at both ends of the
`typing` cycle, which is what hides the word swap. If you add or remove a
word, change both the `words` percentages and the `typing` duration so it
stays at one quarter of `words`.

## The contact form

There's no back end, so submitting currently opens the visitor's own mail
client with the message pre-filled. That works, but it loses anyone without a
desktop mail client configured.

To collect submissions properly, create a free form at
[Formspree](https://formspree.io), then in `contact.html`:

1. Uncomment the `action` / `method` attributes on the `<form>` and paste in
   your form ID.
2. Delete the `contactForm` submit handler in `script.js` so the browser
   posts the form normally.

## Known things worth doing

- **Swap the hero for a headshot.** `main.JPG` is now resized (1650×1100,
  278 KB) but it is still a cityscape, and on the light ground it is the
  darkest thing on the page. The 7 MB original is in git history at commit
  `dec09e9` if you want it back.
- **The CV is deliberately not in the repo.** Three pages offer to send it on
  request instead. That keeps the phone number in its header off a public,
  indexable page, and avoids shipping a PDF that disagrees with the site. If
  you later want it downloadable, re-export it without the phone number and
  with ViewTrade in Taipei first.

## Publishing with GitHub Pages

**The repository must be public.** GitHub Pages is not available on private
repositories on a free account — the Pages settings screen shows "Upgrade or
make this repository public to enable Pages" until you change it. Nothing in
this repo or its history is sensitive (no CV, no phone number, no keys), so
making it public is safe.

1. Settings → General → Danger Zone → **Change repository visibility** →
   Public.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)` →
   Save. It goes live a minute or two later.

The URL depends on the repository name:

| Repository name | Site URL |
| --- | --- |
| `my_portfolio_resume` | `https://ycshin2023.github.io/my_portfolio_resume/` |
| `ycshin2023.github.io` | `https://ycshin2023.github.io/` |

The second is much better on a CV, and renaming is free: Settings → General →
Repository name. GitHub redirects the old URLs, so nothing breaks.

To keep the source private instead, deploy from Netlify, Vercel or Cloudflare
Pages — all three build from a private GitHub repo on their free tiers.

## Notes

- Font Awesome and Google Fonts load from a CDN, so the icons and the Poppins
  typeface need an internet connection to appear.
- The fade-in-on-scroll effect is gated behind a `js` class on `<html>`, so if
  JavaScript is blocked the content still shows rather than staying invisible.
- `prefers-reduced-motion` is respected — animations switch off for visitors
  who've asked for that.
