# Level 1 - Task 2 — Interactive Utility Panel

A single-page web app featuring three small, self-contained tools: a random color generator, a time-aware greeting, and a quick-sum calculator — all wrapped in a responsive, animated UI built with plain HTML, CSS, and JavaScript.

## Description

This project was built as a beginner-friendly front-end exercise that demonstrates core DOM manipulation, event handling, and basic JavaScript logic without any frameworks or libraries. Each of the three tasks lives in its own card on a single responsive page:

1. **Color Generator** — generates a random HEX color on every click and displays it live.
2. **Time-Aware Greeting** — reads the visitor's system clock and shows the correct greeting for the time of day.
3. **Quick Sum Calculator** — adds two numbers together with input validation and clear error messaging.

## Features

- 🎨 Random HEX color generator with animated swatch and live color-coded button
- 🕒 Time-based greeting logic (Morning / Afternoon / Evening / Night) using native `Date()`
- ➕ Two-input calculator with decimal support and inline validation
- 💎 Modern gradient, card-based UI with rounded corners and soft shadows
- 🖱️ Hover, focus, and click micro-animations on all interactive elements
- 📱 Fully responsive layout — works on desktop, tablet, and mobile
- ♿ Keyboard-accessible controls with visible focus states
- 🎞️ Respects the `prefers-reduced-motion` setting
- 🧼 Clean, modular, well-commented vanilla JavaScript (no frameworks, no dependencies)

## Technologies Used

- **HTML5** — semantic structure (`<header>`, `<main>`, `<section>`, `<footer>`)
- **CSS3** — Flexbox, CSS Grid, media queries, gradients, transitions, keyframe animations
- **JavaScript (ES6+)** — vanilla, no external libraries or frameworks
- **Google Fonts** — Space Grotesk (display/UI) and JetBrains Mono (data readouts)

## Folder Structure

```
Task-2/
│
├── index.html      # Page structure and markup for all three tasks
├── style.css        # Gradient background, card UI, animations, responsive rules
├── script.js         # Color generator, greeting logic, calculator logic
└── README.md        # Project documentation (this file)
```

## Installation Steps

No build tools, package managers, or installations are required.

1. Download or clone this project folder (`Task-2/`).
2. Make sure all four files (`index.html`, `style.css`, `script.js`, `README.md`) remain in the same directory — the HTML file links to the CSS and JS files using relative paths.

## How to Run

1. Open the `Task-2` folder on your computer.
2. Double-click `index.html`, or right-click it and choose **Open with → your preferred browser** (Chrome, Edge, or Firefox all work).
3. The page will load directly — no local server or internet connection is required (aside from loading the Google Fonts, which gracefully fall back to system fonts if offline).

## Expected Output

### 1. Color Generator
Clicking **Change Color**:
- Instantly recolors the swatch and the button itself with a smooth transition.
- Displays the matching HEX code below, e.g. `#3FA9F5`.
- Every click produces a new random color.

### 2. Time-Aware Greeting
Clicking **Show Greeting**:
- Reads the current system time.
- Shows a browser `alert()` **and** an on-page message with the matching greeting:

| Time Range | Greeting |
|---|---|
| 5:00 AM – 11:59 AM | Good Morning 🌞 |
| 12:00 PM – 4:59 PM | Good Afternoon ☀️ |
| 5:00 PM – 8:59 PM | Good Evening 🌇 |
| 9:00 PM – 4:59 AM | Good Night 🌙 |

### 3. Quick Sum Calculator
Example inputs and outputs:

| First Number | Second Number | Result |
|---|---|---|
| 25 | 15 | `Result: 40` |
| 15.5 | 20.3 | `Result: 35.8` |
| *(blank)* | 20 | `Please enter valid numbers.` |

Invalid or empty fields are highlighted in red and the readout shows a clear error message instead of a result.

## Screenshots

> _Add screenshots here before submission._

| Color Generator | Greeting | Calculator |
|---|---|---|
| ![Color Generator Screenshot](screenshots/color-generator.png) | ![Greeting Screenshot](screenshots/greeting.png) | ![Calculator Screenshot](screenshots/calculator.png) |

## Author

**Your Name Here**
_Add your contact details, portfolio link, or GitHub profile here._

---

✅ All requirements implemented and verified — see project confirmation notes provided alongside this submission.
