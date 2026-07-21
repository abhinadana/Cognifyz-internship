/* =====================================================
   COGNIFYZ STUDIO — LEVEL 2, TASK 1
   Vanilla JavaScript — small, well-commented enhancements only.
   Bootstrap's own JS bundle already powers the navbar collapse;
   this file adds a few extra usability touches.
===================================================== */

"use strict";

/**
 * Sets the footer's copyright year automatically so it never
 * goes stale.
 */
function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Enables smooth scrolling for on-page anchor links (e.g. navbar
 * links pointing to #services, #grid, #about) instead of an
 * abrupt jump.
 */
function enableSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/**
 * Automatically collapses the mobile navbar menu after a nav
 * link is tapped, so users aren't left with the menu open after
 * navigating to a section.
 */
function autoCollapseNavbarOnMobile() {
  const navCollapseEl = document.getElementById("mainNav");
  if (!navCollapseEl) return;

  const navLinks = navCollapseEl.querySelectorAll(".nav-link, .btn-nav-cta");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Only collapse if the menu is currently open (mobile view)
      if (navCollapseEl.classList.contains("show") && window.bootstrap) {
        const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(navCollapseEl);
        bsCollapse.hide();
      }
    });
  });
}

/**
 * Adds a subtle "scrolled" state to the navbar background once the
 * user scrolls past the hero, purely a cosmetic polish touch.
 */
function enableNavbarScrollState() {
  const navbar = document.querySelector(".site-navbar");
  if (!navbar) return;

  const toggleScrolledClass = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", toggleScrolledClass, { passive: true });
  toggleScrolledClass(); // run once on load in case the page is reloaded mid-scroll
}

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  enableSmoothScroll();
  autoCollapseNavbarOnMobile();
  enableNavbarScrollState();
});
