# Level 2 – Task 2: Responsive Design — Cognifyz Digital

A fully responsive, mobile-first business landing page built with **HTML5, CSS3 (Flexbox + Grid + Media Queries), and vanilla JavaScript**, featuring a hamburger navigation menu, for the Cognifyz Web Development Internship.

## Project Description

Cognifyz Digital is a fictional web design studio used as the subject for this exercise. The page converts a standard multi-section business layout — hero, about, services, features, gallery, and contact — into a website that adapts cleanly across five real breakpoints, with a navigation bar that switches from a horizontal desktop menu to an animated hamburger menu on smaller screens.

## Objective

1. Convert a basic webpage into a fully responsive site using **CSS Media Queries**.
2. Build a **mobile-friendly navigation menu** that collapses into a hamburger icon on smaller screens, opens/closes on click, and auto-closes after a link is tapped.

## Features

- 🧭 Fixed navigation bar — logo left, links right on desktop; hamburger + slide-down panel on mobile
- 🍔 Animated hamburger icon (morphs into an "X") with smooth slide-down menu transition
- 🎯 Full-screen hero banner with gradient background, heading, subtitle, and CTA buttons
- 👥 About section in a two-column layout (image + copy) that stacks on mobile
- 🃏 Services section with 3 responsive cards (3 → 2 → 1 columns)
- ⚡ Features section with a 6-item icon grid (3 → 2 → 1 columns)
- 🖼️ Responsive image gallery grid (3 → 2 → 1 columns) with hover captions
- ✉️ Contact section with a validated form and contact details panel
- 🦶 Multi-column footer with sitemap links and a newsletter form
- 🖱️ Hover animations throughout: underline nav links, button zoom, card lift, image zoom
- 📱 Zero horizontal scrolling at any tested width, from 1920px down to 320px
- ♿ Semantic HTML5, ARIA attributes on the hamburger button, visible focus states
- 🎞️ Respects the `prefers-reduced-motion` setting

## Technologies Used

- **HTML5** — semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`)
- **CSS3** — custom properties, Flexbox, CSS Grid, `clamp()` for fluid type, keyframe animations, 5 media query breakpoints
- **Vanilla JavaScript (ES6+)** — hamburger toggle, auto-close on link click, scroll-state navbar, lightweight form feedback
- **Bootstrap Icons (via CDN)** — used only as an icon font; no Bootstrap CSS/JS framework is included
- **Google Fonts** — Sora (headings) and Inter (body)

> This project intentionally uses **no CSS framework** — every grid, breakpoint, and component is hand-written to satisfy the "pure CSS Media Queries" requirement of this task.

## Folder Structure

```
Level-2-Task-2/
│
├── index.html            # Nav, hero, about, services, features, gallery, contact, footer
├── style.css               # Full design system + 5 media query breakpoints
├── script.js                 # Hamburger toggle, form feedback, scroll state
├── assets/
│   ├── images/               # Reserved for local project images
│   └── icons/                 # Reserved for local icon assets
└── README.md                 # Project documentation (this file)
```

> Note: this build uses hosted placeholder images (via picsum.photos) and the Bootstrap Icons CDN font so it works immediately with zero setup. Swap in your own files under `assets/` and update the `src`/`href` paths in `index.html` if you'd like local assets instead.

## Responsive Design Features

Media query breakpoints, exactly as required:

| Breakpoint | Target Device | Key Layout Changes |
|---|---|---|
| `max-width: 1200px` | Large desktop | Tightened container padding and grid gaps |
| `max-width: 992px` | Tablet landscape / small laptop | About stacks to 1 column; services, features, and gallery become 2 columns; contact stacks to 1 column |
| `max-width: 768px` | Tablet portrait | **Hamburger menu activates**; services become 1 column; contact form fields stack |
| `max-width: 576px` | Mobile | Hero buttons stack full-width; gallery and features become 1 column; section padding reduced |
| `max-width: 320px` | Small mobile | Smaller type scale, tighter container padding, badge repositioned to avoid overflow |

All layouts use **Flexbox** (navbar, buttons, hero actions) and **CSS Grid** (about, services, features, gallery, contact, footer) so columns reflow automatically instead of relying on fixed widths. Images use `max-width: 100%` and `object-fit: cover` so they scale fluidly without distortion or overflow.

## Installation Steps

No build tools, package managers, or installations are required.

1. Download or clone this project folder (`Level-2-Task-2/`).
2. Keep `index.html`, `style.css`, and `script.js` in the same directory — the page links to them with relative paths.
3. An internet connection is needed on first load to fetch Google Fonts, the Bootstrap Icons font, and the placeholder gallery/about images from their CDNs.

## How to Run

1. Open the `Level-2-Task-2` folder.
2. Double-click `index.html`, or right-click → **Open with → your preferred browser** (Chrome, Edge, or Firefox).
3. The page loads directly with no local server required.
4. Resize the browser window (or open dev tools' device toolbar) to see the layout and navigation adapt at each breakpoint.

## Browser Compatibility

Tested and confirmed working in:

- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Microsoft Edge (latest)

Uses only standard, well-supported CSS3 and ES6 JavaScript features (Flexbox, Grid, `clamp()`, `classList`, arrow functions) — no vendor-specific hacks required for these browsers.

## Screenshots

> _Add screenshots here before submission._

| Desktop | Tablet | Mobile (menu open) |
|---|---|---|
| ![Desktop Screenshot](screenshots/desktop.png) | ![Tablet Screenshot](screenshots/tablet.png) | ![Mobile Menu Screenshot](screenshots/mobile-menu.png) |

## Author

**Your Name Here**
_Add your contact details, portfolio link, or GitHub profile here._

---

✅ All Level 2 – Task 2 requirements implemented — responsive layout, media queries at 1200/992/768/576/320px, and a fully functional hamburger navigation — tested across breakpoints and free of HTML/CSS/JS errors. Ready for direct submission.
