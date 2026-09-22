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

Every block that needs your real details is marked with an
`<!-- EDIT ME -->` comment. Search the repo for `EDIT ME` to find them all.

The main placeholders to replace:

- **Dates and names** — every `20XX`, `Company Name`, `University Name`,
  `School Name` and `Your City, Country` is a stand-in.
- **Stats** — the four numbers on the home page and on `experience.html`.
- **Social links** — the LinkedIn and Instagram URLs currently point at each
  site's homepage. The GitHub and email links are already yours.
- **Skill percentages** — each bar is driven by `data-level="NN"` in
  `skills.html`. The label next to it is plain text, so change both together.

A tip for `experience.html`: the bullets follow *what I did → what changed as
a result*. Recruiters skim for the result half, so keep numbers in it where
you have them.

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
- **Add a résumé PDF.** Several pages offer to send one; dropping
  `resume.pdf` in the repo and linking it directly would save a round trip.

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
