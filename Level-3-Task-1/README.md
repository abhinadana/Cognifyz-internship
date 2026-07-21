# Aperture — Image Manipulation

**Cognifyz Web Development Internship — Level 3, Task 1**

A responsive photography portfolio site featuring an interactive image gallery with a lightbox, and an automatic fade-transition image slideshow. Built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step.

---

## Objective

Implement Level 3, Task 1 of the Cognifyz Web Development Internship:

1. A responsive image gallery whose thumbnails enlarge into a lightbox when clicked.
2. An automatic image slideshow that transitions between images on its own.

---

## Features

### Image Gallery
- 8 responsive thumbnails laid out in a CSS Grid.
- Click (or press Enter/Space) on a thumbnail to open it in a centered lightbox.
- Semi-transparent dark overlay behind the enlarged image.
- Caption shown below the enlarged image.
- Smooth zoom-in / zoom-out animation on open and close.
- Close the lightbox by clicking the **×** button, clicking outside the image, or pressing **Esc**.
- Hover effect (scale + darken) on thumbnails.
- Rounded corners and soft shadows throughout.

### Automatic Slideshow
- One image visible at a time with a smooth cross-fade transition.
- Auto-advances every **3 seconds**.
- **Previous** / **Next** arrow buttons.
- Caption displayed for every slide.
- Navigation dots below the slideshow; the active dot is highlighted.
- Clicking a dot jumps straight to that slide.
- Autoplay **pauses on mouse hover** and **resumes on mouse leave**.
- Aspect ratio preserved across all screen sizes.

### Interface
- Sticky, blurred navigation bar with a mobile hamburger menu.
- Gradient hero section with a clear call to action.
- Modern typography via Google Fonts (`Fraunces` for display, `Inter` for body text).
- Consistent rounded corners, box shadows, and hover/transition animations across the page.
- Fully responsive footer.

---

## Technologies Used

| Layer      | Tech                                   |
|------------|-----------------------------------------|
| Markup     | Semantic HTML5                          |
| Styling    | CSS3 — Grid, Flexbox, custom properties, media queries, keyframe-free CSS transitions |
| Behavior   | Vanilla JavaScript (ES6, no dependencies) |
| Fonts      | Google Fonts — Fraunces & Inter          |
| Images     | Picsum Photos (placeholder imagery)      |

---

## Folder Structure

```
Level-3-Task-1/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/     (placeholder — swap in your own photos here)
│   └── icons/      (placeholder — for any custom icon assets)
└── README.md
```

> Note: the demo currently loads images from Picsum Photos over the network so the
> project runs immediately without any binary assets. To use your own photography,
> drop files into `assets/images/` and update the `src` attributes in `index.html`
> (gallery `<img>` tags and slideshow `<div class="slide">` tags).

---

## Installation & How to Run

No build tools, package managers, or servers are required.

1. Download or clone the `Level-3-Task-1` folder.
2. Open `index.html` directly in any modern web browser (double-click it, or right-click → *Open with* → your browser).
3. That's it — the gallery and slideshow work immediately.

Optional: serve it locally for a closer-to-production feel:

```bash
cd Level-3-Task-1
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Browser Compatibility

Tested and working on the latest versions of:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

Uses only standard, well-supported CSS and JavaScript (Grid, Flexbox, `aspect-ratio`, ES6 syntax) — no vendor-specific hacks required.

---

## Responsive Behavior

| Breakpoint | Gallery Columns | Notes |
|------------|------------------|-------|
| ≥ 992px (Desktop) | 4 | Full navigation bar, full-width hero |
| 768–991px (Tablet) | 2 | Nav collapses to a slide-in menu |
| 576–767px | 2 | Slideshow aspect ratio adjusts |
| ≤ 575px (Mobile) | 1 | Slideshow becomes portrait-oriented |
| 320px (Small Mobile) | 1 | Tightened spacing, no overflow |

Additional media query breakpoints are defined at `1200px`, `992px`, `768px`, `576px`, and `320px` in `style.css`. The layout never produces horizontal scrolling at any tested width.

`prefers-reduced-motion` is respected: animation/transition durations are minimized for users who request reduced motion.

---

## Screenshots

> _Add screenshots here before submission:_

- `Desktop view — Hero + Gallery`: _placeholder_
- `Desktop view — Slideshow`: _placeholder_
- `Tablet view`: _placeholder_
- `Mobile view`: _placeholder_

---

## Feature Checklist

- [x] Responsive gallery grid (4 / 2 / 1 columns across breakpoints)
- [x] Click-to-enlarge lightbox with dark overlay
- [x] Lightbox closes via close button, outside click, and Escape key
- [x] Caption under enlarged image
- [x] Zoom in/out animation on the lightbox
- [x] Thumbnail hover effects, rounded corners, shadows
- [x] Slideshow auto-advances every 3 seconds
- [x] Fade transition between slides
- [x] Previous / Next buttons
- [x] Per-slide captions
- [x] Navigation dots with active-state highlighting and click-to-jump
- [x] Autoplay pauses on hover, resumes on mouse leave
- [x] Aspect ratio preserved at all sizes
- [x] Media queries at 1200 / 992 / 768 / 576 / 320px
- [x] No horizontal scrolling at any tested width
- [x] Semantic HTML5 structure with header, nav, hero, gallery, lightbox, slideshow, footer
- [x] Clean, commented JavaScript with no console errors

---

## Author

**Name:** _Your Name Here_
**Cohort:** Cognifyz IT Solutions — Web Development Internship, Level 3
**Date:** _Submission Date Here_
