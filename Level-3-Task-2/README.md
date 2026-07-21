# Cognifyz Technologies — Internship Landing Page

**Cognifyz Web Development Internship — Level 3, Task 2**

A premium, glassmorphism-styled recruitment landing page for the Cognifyz Technologies Web Developer Internship. Built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step.

---

## Objective

Implement Level 3, Task 2 of the Cognifyz Web Development Internship: a complete, responsive internship landing page covering the hero, program details, benefits, qualifications, statistics, testimonials, FAQ, and contact — styled to look like a real company recruitment page.

---

## Features

### Hero Section
- Sticky, blurred navigation bar with logo, links, and a mobile hamburger menu.
- Large heading: *"Web Developer Internship Opportunities at Cognifyz Technologies."*
- Program introduction, duration (2 Months), and mode (Remote / Hybrid) shown as glass badges.
- Gradient + radial-glow background.
- Primary CTA (**Apply Now**) and secondary CTA (**Learn More**).

### About the Internship
Six icon-led feature cards covering structured learning, hands-on projects, industry exposure, real-world experience, mentor guidance, and flexible scheduling.

### Internship Benefits
Eight responsive glass cards, each with an icon, title, and short description: certificate, real project experience, mentorship, flexible learning, portfolio building, recommendation letter, networking, and skill development.

### Qualifications
Skill badges for HTML5, CSS3, JavaScript, Responsive Design, Bootstrap, Git & GitHub, Problem Solving, and Communication Skills.

### Why Choose Cognifyz
Six feature cards: live projects, industry experts, modern technologies, career growth, internship certificate, hands-on learning.

### Statistics
Four animated counters (500+ students trained, 100+ projects completed, 95% placement assistance, 50+ industry mentors) that count up from 0 when scrolled into view, using `IntersectionObserver` and `requestAnimationFrame`.

### Testimonials
Three testimonial cards with photo, name, role, and feedback.

### FAQ Accordion
Five questions in a single-open accordion with a smooth expand/collapse animation and a rotating chevron icon.

### Contact Section
- Company email, phone, website, and office address.
- Social media icon links.
- A contact form (Full Name, Email, Phone, Message) with full JavaScript validation, inline error messages, and a success confirmation — no page reload required.

### Footer
Quick links, legal links (Privacy Policy / Terms & Conditions), social icons, copyright, and a floating **Back to Top** button that appears after scrolling.

### Interface
- Glassmorphism cards (blurred, translucent, soft borders) throughout.
- Indigo → violet → cyan gradient palette on a deep navy background.
- Google Fonts: `Sora` for display headings, `Inter` for body text.
- Font Awesome icons throughout.
- Scroll-reveal animations on every major section.
- A brief branded loading animation on first paint.

---

## Technologies Used

| Layer      | Tech                                                        |
|------------|---------------------------------------------------------------|
| Markup     | Semantic HTML5                                               |
| Styling    | CSS3 — Grid, Flexbox, custom properties, media queries, glassmorphism, gradients, keyframe & transition animations |
| Behavior   | Vanilla JavaScript (ES6, no dependencies)                    |
| Fonts      | Google Fonts — Sora & Inter                                  |
| Icons      | Font Awesome 6 (via CDN)                                     |
| Images     | Picsum Photos (placeholder testimonial photos)               |

---

## Folder Structure

```
Level-3-Task-2/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/     (placeholder — add your own photos here)
│   └── icons/      (placeholder — for any custom icon assets)
└── README.md
```

> Note: testimonial photos load from Picsum Photos and icons load from the Font Awesome CDN so the project runs immediately without bundling assets. To use your own branding, drop images into `assets/images/` and update the relevant `src` attributes in `index.html`.

---

## Installation & How to Run

No build tools, package managers, or servers are required.

1. Download or clone the `Level-3-Task-2` folder.
2. Open `index.html` directly in any modern web browser.
3. An internet connection is needed on first load for Google Fonts and Font Awesome icons (both are CDN-hosted).

Optional local server:

```bash
cd Level-3-Task-2
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Browser Compatibility

Tested and working on the latest versions of:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

Uses only standard, well-supported CSS and JavaScript (Grid, Flexbox, `backdrop-filter`, `IntersectionObserver`, ES6 syntax) — no vendor-specific hacks required.

---

## Responsive Features

| Breakpoint | Layout |
|------------|--------|
| ≥ 1200px (Desktop, incl. 1920 / 1600 / 1366) | Full multi-column grids everywhere (3–4 columns) |
| 992–1199px (Laptop) | Benefit/testimonial/stat grids step down to 2 columns |
| 768–991px (Tablet) | Two-column layout across cards; nav remains inline |
| 576–767px (Tablet/Mobile transition) | Hamburger navigation, single-column cards |
| ≤ 575px (Mobile) | Fully stacked single-column layout, full-width buttons |
| 320px (Small Mobile) | Tightened padding, smaller badges, zero overflow |

Additional breakpoints are defined at `1200px`, `992px`, `768px`, `576px`, and `320px` in `style.css`. The layout produces no horizontal scrolling at any tested width. `prefers-reduced-motion` is respected throughout.

---

## Feature Checklist

- [x] Hero with heading, intro, duration, mode, gradient background, two CTAs
- [x] About section with 6 icon feature cards
- [x] 8 benefit cards with icon, title, description
- [x] Skill qualification badges
- [x] "Why Choose Cognifyz" feature section
- [x] 4 animated statistics counters (trigger on scroll into view)
- [x] 3 testimonial cards with photo, name, role, feedback
- [x] FAQ accordion (5 questions, smooth open/close, single-open behavior)
- [x] Contact section with company details, social icons, and validated form
- [x] Footer with quick links, legal links, social icons, copyright, back-to-top
- [x] Responsive mobile hamburger navigation
- [x] Smooth scrolling to in-page anchors
- [x] Sticky navigation with scroll shadow
- [x] Scroll-triggered reveal animations
- [x] Loading animation on first paint
- [x] Full client-side form validation with inline error messages
- [x] Media queries at 1200 / 992 / 768 / 576 / 320px
- [x] No horizontal scrolling at any tested width
- [x] Semantic HTML5 structure, well-commented CSS/JS, no console errors

---

## Future Improvements

- Wire the contact form up to a real backend or email service (e.g. Formspree, a serverless function) to actually deliver messages.
- Add a dark/light theme toggle.
- Localize copy for multiple languages.
- Add real testimonial photos and verified statistics once available.
- Add unit tests for the form-validation logic.

---

## Author

**Name:** _Your Name Here_
**Cohort:** Cognifyz Technologies — Web Development Internship, Level 3
**Date:** _Submission Date Here_
