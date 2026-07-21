/* =====================================================
   TASK 2 — INTERACTIVE UTILITY PANEL
   Vanilla JavaScript — no dependencies
   Structure:
     1. Utility helpers
     2. Task 1: Color Changing Button
     3. Task 2: Greeting Alert
     4. Task 3: Basic Calculator
     5. Init
===================================================== */

"use strict";

/* =====================================================
   1. UTILITY HELPERS
===================================================== */

/**
 * Briefly adds a CSS class to an element and removes it after the
 * animation finishes. Used to re-trigger CSS animations on repeated clicks.
 * @param {HTMLElement} el
 * @param {string} className
 * @param {number} duration - ms to keep the class applied
 */
function pulse(el, className, duration) {
  el.classList.remove(className);
  // Force reflow so the animation restarts even if triggered rapidly
  void el.offsetWidth;
  el.classList.add(className);
  setTimeout(() => el.classList.remove(className), duration);
}

/**
 * Attaches a short "click pulse" animation to a button.
 * @param {HTMLButtonElement} button
 */
function attachClickPulse(button) {
  button.addEventListener("click", () => pulse(button, "is-pulsing", 480));
}

/* =====================================================
   2. TASK 1 — COLOR CHANGING BUTTON
===================================================== */

const colorBtn = document.getElementById("colorBtn");
const colorSwatch = document.getElementById("colorSwatch");
const colorValue = document.getElementById("colorValue");

/**
 * Generates a random 6-digit HEX color code, e.g. "#3FA9F5".
 * @returns {string} A HEX color string including the leading '#'.
 */
function getRandomHexColor() {
  // 0x1000000 = 16^6, guarantees a 6-digit hex value once padded
  const randomInt = Math.floor(Math.random() * 0x1000000);
  const hex = randomInt.toString(16).padStart(6, "0");
  return `#${hex.toUpperCase()}`;
}

/**
 * Applies a new random color to the swatch/button and updates the readout.
 */
function changeColor() {
  const newColor = getRandomHexColor();

  colorSwatch.style.background = newColor;
  colorBtn.style.background = newColor;

  colorValue.textContent = newColor;
  pulse(colorValue, "is-updating", 320);
}

colorBtn.addEventListener("click", changeColor);
attachClickPulse(colorBtn);

/* =====================================================
   3. TASK 2 — GREETING ALERT
===================================================== */

const greetingBtn = document.getElementById("greetingBtn");
const greetingValue = document.getElementById("greetingValue");
const clockDisplay = document.getElementById("clockDisplay");

/**
 * Determines the correct greeting message based on a given hour (0-23).
 * Ranges:
 *   5:00 AM - 11:59 AM -> Good Morning
 *   12:00 PM - 4:59 PM -> Good Afternoon
 *   5:00 PM - 8:59 PM  -> Good Evening
 *   9:00 PM - 4:59 AM  -> Good Night
 * @param {number} hour - Hour of the day, 0-23 (24-hour format).
 * @returns {string} Greeting message including its emoji.
 */
function getGreetingForHour(hour) {
  if (hour >= 5 && hour < 12) {
    return "Good Morning \uD83C\uDF1E"; // 🌞
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon \u2600\uFE0F"; // ☀️
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening \uD83C\uDF07"; // 🌇
  } else {
    // Covers 9:00 PM - 11:59 PM and 12:00 AM - 4:59 AM
    return "Good Night \uD83C\uDF19"; // 🌙
  }
}

/**
 * Reads the current system time, shows an alert, and writes the
 * greeting to the page.
 */
function showGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = getGreetingForHour(hour);

  greetingValue.textContent = greeting;
  pulse(greetingValue, "is-updating", 320);

  alert(greeting);
}

/**
 * Updates the small live clock readout on the page (purely cosmetic,
 * helps the user see what time the greeting logic is reading from).
 */
function updateClockDisplay() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  clockDisplay.textContent = timeString;
}

greetingBtn.addEventListener("click", showGreeting);
attachClickPulse(greetingBtn);

/* =====================================================
   4. TASK 3 — BASIC CALCULATOR
===================================================== */

const calcForm = document.getElementById("calcForm");
const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const calcReadout = document.getElementById("calcReadout");
const calcValue = document.getElementById("calcValue");

/**
 * Validates a raw input string as a usable number.
 * Empty strings, whitespace-only strings, and non-numeric text all fail.
 * @param {string} rawValue
 * @returns {boolean}
 */
function isValidNumber(rawValue) {
  if (rawValue === null || rawValue.trim() === "") return false;
  return !Number.isNaN(Number(rawValue));
}

/**
 * Clears error styling from both calculator inputs.
 */
function clearInputErrors() {
  firstNumberInput.classList.remove("input-error");
  secondNumberInput.classList.remove("input-error");
}

/**
 * Reads both inputs, validates them, and either displays the sum
 * or an error message in the readout panel.
 * @param {Event} event
 */
function calculateSum(event) {
  event.preventDefault(); // Prevent page reload from form submission
  clearInputErrors();

  const rawFirst = firstNumberInput.value;
  const rawSecond = secondNumberInput.value;

  const firstValid = isValidNumber(rawFirst);
  const secondValid = isValidNumber(rawSecond);

  if (!firstValid || !secondValid) {
    if (!firstValid) firstNumberInput.classList.add("input-error");
    if (!secondValid) secondNumberInput.classList.add("input-error");

    calcReadout.classList.remove("is-success");
    calcReadout.classList.add("is-error");
    calcValue.textContent = "Please enter valid numbers.";
    pulse(calcValue, "is-updating", 320);
    return;
  }

  const sum = Number(rawFirst) + Number(rawSecond);
  // Round to avoid floating point artifacts like 35.800000000000004
  const roundedSum = Math.round(sum * 100000) / 100000;

  calcReadout.classList.remove("is-error");
  calcReadout.classList.add("is-success");
  calcValue.textContent = `Result: ${roundedSum}`;
  pulse(calcValue, "is-updating", 320);
}

calcForm.addEventListener("submit", calculateSum);
attachClickPulse(document.getElementById("calcBtn"));

// Clear error state as soon as the user starts correcting an input
[firstNumberInput, secondNumberInput].forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("input-error");
  });
});

/* =====================================================
   5. INIT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  updateClockDisplay();
  setInterval(updateClockDisplay, 1000);
});
