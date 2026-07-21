# Level 2 – Task 1: Front-End Frameworks — Cognifyz Studio

A modern, fully responsive business landing page built with **Bootstrap 5**, demonstrating a reusable card component and a responsive grid layout as required for the Cognifyz Web Development Internship.

## Project Description

Cognifyz Studio is a fictional front-end design agency used as the subject for this exercise. The page pairs Bootstrap 5's grid system and component classes with a custom forest-and-gold visual identity — a serif/sans type pairing, restyled navbar, hero section, and card components — to show that a framework-driven build can still feel distinctive rather than templated.

## Objective

Build a webpage using a front-end framework (Bootstrap 5) that demonstrates responsive design through:

1. A responsive **card component** (image + title + description + button).
2. A responsive **grid layout** with at least 6 cards, reflowing from 3 → 2 → 1 columns across breakpoints.

## Features

- 🧭 Responsive navigation bar that collapses into a hamburger menu on mobile
- 🎯 Hero section with heading, subtitle, stats, and dual call-to-action buttons
- 🃏 Featured card component with image, badge, title, description, and "Learn More" button
- 🔳 6-card responsive grid built entirely with Bootstrap's `row-cols-*` grid classes
- 🖱️ Hover animations on cards (lift + deepened shadow + image zoom) and buttons (color shift)
- 🎨 Custom forest-and-gold design system layered on top of Bootstrap defaults
- 🦶 Responsive footer with social links and auto-updating copyright year
- ⚙️ Small, well-commented vanilla JavaScript for smooth scrolling and UX polish
- ♿ Semantic HTML5, accessible labels, and visible focus states throughout
- 🎞️ Respects the `prefers-reduced-motion` setting

## Technologies Used

- **HTML5** — semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- **CSS3** — custom properties, gradients, Flexbox, transitions, keyframe animations
- **Bootstrap 5 (via CDN)** — grid system, navbar, card, and button base components
- **Bootstrap Icons (via CDN)** — icon set used in the navbar, cards, and footer
- **Vanilla JavaScript (ES6+)** — no frameworks, no build tools

## Framework Used

**Bootstrap 5.3** (loaded via CDN — no local install or npm required). The project uses Bootstrap for:

- The 12-column responsive grid (`.row`, `.col-*`, `.row-cols-*`)
- The collapsible navbar component (`.navbar`, `.navbar-collapse`, `.navbar-toggler`)
- The base `.card` component, restyled with custom CSS
- Spacing, gap, and alignment utility classes

All responsiveness for the grid section is achieved **using Bootstrap classes only**, exactly as required:
`row-cols-1 row-cols-md-2 row-cols-lg-3`.

## Folder Structure

```
Level-2-Task-1/
│
├── index.html            # Navbar, hero, featured card, 6-card grid, CTA, footer
├── style.css               # Custom design system layered on top of Bootstrap 5
├── script.js                 # Smooth scroll, navbar auto-collapse, footer year
├── assets/
│   ├── images/               # Reserved for local project images
│   └── icons/                 # Reserved for local icon assets
└── README.md                 # Project documentation (this file)
```

> Note: this build uses hosted placeholder images (via picsum.photos) and the Bootstrap Icons CDN so it works immediately with zero setup. The `assets/` folders are included and ready if you'd like to swap in your own local images or icons — just update the `src`/`href` paths in `index.html`.

## Installation Steps

No build tools, package managers, or installations are required.

1. Download or clone this project folder (`Level-2-Task-1/`).
2. Keep `index.html`, `style.css`, and `script.js` in the same directory — the page links to them with relative paths.
3. An internet connection is needed on first load to fetch Bootstrap, Bootstrap Icons, Google Fonts, and the placeholder images from their CDNs.

## How to Run

1. Open the `Level-2-Task-1` folder.
2. Double-click `index.html`, or right-click → **Open with → your preferred browser** (Chrome, Edge, or Firefox).
3. The page loads directly with no local server required.

## Responsive Features

| Breakpoint | Grid Columns | Navbar | Notes |
|---|---|---|---|
| Desktop (≥1200px / 1920px) | 3 cards per row | Full horizontal menu | Hero shown as two columns |
| Laptop (~1366px) | 3 cards per row | Full horizontal menu | Matches desktop layout |
| Tablet (~768px) | 2 cards per row | Full horizontal menu | Hero stacks to single column |
| Mobile (~480px) | 1 card per row | Hamburger menu | Hero buttons stack full-width |
| Small Mobile (320px) | 1 card per row | Hamburger menu | Verified no horizontal overflow |

Tested at 1920px, 1366px, 768px, 480px, and 320px viewport widths with no content overflow or breakage.

## Screenshots

> _Add screenshots here before submission._

| Desktop | Tablet | Mobile |
|---|---|---|
| ![Desktop Screenshot](screenshots/desktop.png) | ![Tablet Screenshot](screenshots/tablet.png) | ![Mobile Screenshot](screenshots/mobile.png) |

## Author

**Your Name Here**
_Add your contact details, portfolio link, or GitHub profile here._

---

✅ All Level 2 – Task 1 requirements implemented, tested across five breakpoints, and free of HTML/CSS/JS errors — ready for direct submission.
