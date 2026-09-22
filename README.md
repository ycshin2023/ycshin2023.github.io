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

The site is now filled in with real details: SKKU, Stockholm University,
Westhill Institute, ViewTrade Holdings, Crypto PR, and the freelance photo
and video work. Anything still uncertain is marked with an `<!-- EDIT ME -->`
comment — search the repo for `EDIT ME` to find them all.

Still worth your attention:

- **Experience bullets.** The roles, employers and dates are yours, but the
  bullet points under each are a plausible scaffold for that kind of role,
  not a record of what you actually did. Rewrite them before sending this
  anywhere.
- **Two inferred dates.** The Stockholm exchange (2025) and the IB diploma
  (2023) were inferred, not confirmed.
- **Social links.** LinkedIn and Instagram still point at each site's
  homepage. GitHub and email are correct.
- **Skill percentages.** Each bar is driven by `data-level="NN"` and the
  label beside it is separate text — change both together, or they drift
  apart.

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
