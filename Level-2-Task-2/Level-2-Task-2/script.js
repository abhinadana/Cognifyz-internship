/* =====================================================
   COGNIFYZ DIGITAL — LEVEL 2, TASK 2: RESPONSIVE DESIGN
   Vanilla JavaScript — simple, modular, well-commented.

   Structure:
     1. Hamburger menu toggle (open/close)
     2. Auto-close menu after clicking a nav link
     3. Navbar "scrolled" shadow state
     4. Contact + newsletter form feedback (front-end only)
     5. Footer year
     6. Init
===================================================== */

"use strict";

/* =====================================================
   1. HAMBURGER MENU TOGGLE
===================================================== */

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

/**
 * Opens or closes the mobile navigation menu and keeps the
 * hamburger icon's "X" animation and ARIA state in sync.
 */
function toggleMenu() {
  const isOpen = navLinks.classList.toggle("is-open");
  hamburgerBtn.classList.toggle("is-active", isOpen);
  hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
}

/**
 * Explicitly closes the mobile menu (used after a link is clicked
 * or when the viewport is resized back to desktop width).
 */
function closeMenu() {
  navLinks.classList.remove("is-open");
  hamburgerBtn.classList.remove("is-active");
  hamburgerBtn.setAttribute("aria-expanded", "false");
}

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", toggleMenu);
}

/* =====================================================
   2. AUTO-CLOSE MENU AFTER CLICKING A NAV LINK
===================================================== */

const allNavLinks = navLinks ? navLinks.querySelectorAll("a") : [];

allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// If the window is resized past the mobile breakpoint while the
// menu is open, close it so it doesn't get stuck open on desktop.
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

/* =====================================================
   3. NAVBAR SCROLLED STATE
===================================================== */

const navbar = document.getElementById("navbar");

/**
 * Adds a background/shadow to the fixed navbar once the page has
 * scrolled past the hero, so it stays readable over any content.
 */
function updateNavbarScrollState() {
  if (!navbar) return;
  navbar.classList.toggle("is-scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateNavbarScrollState, { passive: true });

/* =====================================================
   4. CONTACT + NEWSLETTER FORM FEEDBACK
   (Front-end only — no backend is connected. We simply confirm
   receipt to the user, as required for a beginner-friendly,
   backend-free submission.)
===================================================== */

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
      formNote.textContent = "Please fill in your name, email, and message.";
      formNote.style.color = "#FF6B5B";
      return;
    }

    formNote.textContent = `Thanks, ${name}! Your message has been noted — we'll be in touch.`;
    formNote.style.color = "#33D6B0";
    contactForm.reset();
  });
}

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = newsletterForm.querySelector("input[type='email']");
    if (emailInput && emailInput.value.trim()) {
      emailInput.value = "";
      emailInput.placeholder = "You're on the list!";
    }
  });
}

/* =====================================================
   5. FOOTER YEAR
===================================================== */

function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* =====================================================
   6. INIT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  updateNavbarScrollState();
});
