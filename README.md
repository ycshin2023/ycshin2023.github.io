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

- **Instagram link** still points at instagram.com. LinkedIn, GitHub and
  email are correct.
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

- **`main.JPG` is ~6.6 MB.** That's very heavy for a hero image and will feel
  slow on mobile. Resize it to roughly 800×800 and re-export — it displays in
  a circle about 400 px wide. A headshot also lands better with recruiters
  than the current landscape shot.
- **Add a CV PDF.** Several pages offer to send one; dropping `cv.pdf` in
  the repo and linking it directly would save a round trip.

## Publishing with GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → `main` / `root`. The site
goes live at `https://ycshin2023.github.io/my_portfolio_resume/`.

## Notes

- Font Awesome and Google Fonts load from a CDN, so the icons and the Poppins
  typeface need an internet connection to appear.
- The fade-in-on-scroll effect is gated behind a `js` class on `<html>`, so if
  JavaScript is blocked the content still shows rather than staying invisible.
- `prefers-reduced-motion` is respected — animations switch off for visitors
  who've asked for that.
