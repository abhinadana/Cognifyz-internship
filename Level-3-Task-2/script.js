/* =========================================================
   Cognifyz Technologies — Internship Landing Page
   script.js
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------------------
     1. LOADING ANIMATION
  ----------------------------------------------------------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('loaded'), 250);
  });
  // Fallback in case the load event already fired
  if (document.readyState === 'complete') {
    setTimeout(() => loader.classList.add('loaded'), 250);
  }


  /* -----------------------------------------------------------
     2. STICKY NAVIGATION SHADOW ON SCROLL
  ----------------------------------------------------------- */
  const header = document.getElementById('header');
  function handleHeaderScroll(){
    header.classList.toggle('scrolled', window.scrollY > 12);
  }
  document.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();


  /* -----------------------------------------------------------
     3. MOBILE HAMBURGER NAVIGATION
  ----------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  function closeMobileNav(){
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Smooth scroll + close mobile menu on link click
  // (native CSS `scroll-behavior: smooth` handles the animation itself)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => closeMobileNav());
  });


  /* -----------------------------------------------------------
     4. SCROLL REVEAL ANIMATIONS
  ----------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));


  /* -----------------------------------------------------------
     5. ANIMATED STATISTICS COUNTERS
  ----------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number');

  function animateCounter(el){
    const target   = parseInt(el.dataset.target, 10) || 0;
    const suffix   = el.dataset.suffix || '';
    const duration = 1600; // ms
    const startTime = performance.now();

    function tick(now){
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value + suffix;

      if (progress < 1){
        requestAnimationFrame(tick);
      } else {
        el.textContent = target + suffix;
      }
    }
    requestAnimationFrame(tick);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  statNumbers.forEach(el => statsObserver.observe(el));


  /* -----------------------------------------------------------
     6. FAQ ACCORDION
  ----------------------------------------------------------- */
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close every other item (single-open accordion behavior)
      accordionItems.forEach(other => {
        other.classList.remove('open');
        other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });

      // Toggle the clicked one
      if (!isOpen){
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });


  /* -----------------------------------------------------------
     7. CONTACT FORM VALIDATION
  ----------------------------------------------------------- */
  const form        = document.getElementById('contactForm');
  const formSuccess  = document.getElementById('formSuccess');

  const fields = {
    fullName: {
      el: document.getElementById('fullName'),
      validate: (v) => v.trim().length >= 2,
      message: 'Please enter your full name (at least 2 characters).'
    },
    email: {
      el: document.getElementById('email'),
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      message: 'Please enter a valid email address.'
    },
    phone: {
      el: document.getElementById('phone'),
      validate: (v) => /^\+?[0-9\s-]{7,15}$/.test(v.trim()),
      message: 'Please enter a valid phone number (7–15 digits).'
    },
    message: {
      el: document.getElementById('message'),
      validate: (v) => v.trim().length >= 10,
      message: 'Your message should be at least 10 characters.'
    }
  };

  function showError(name, message){
    const errorEl = document.getElementById('err-' + name);
    errorEl.textContent = message;
    fields[name].el.closest('.form-row').classList.add('invalid');
  }

  function clearError(name){
    const errorEl = document.getElementById('err-' + name);
    errorEl.textContent = '';
    fields[name].el.closest('.form-row').classList.remove('invalid');
  }

  function validateField(name){
    const { el, validate, message } = fields[name];
    if (!validate(el.value)){
      showError(name, message);
      return false;
    }
    clearError(name);
    return true;
  }

  // Live validation as the user types (after first blur, to avoid nagging immediately)
  Object.keys(fields).forEach(name => {
    const el = fields[name].el;
    el.addEventListener('blur', () => validateField(name));
    el.addEventListener('input', () => {
      if (el.closest('.form-row').classList.contains('invalid')){
        validateField(name);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    Object.keys(fields).forEach(name => {
      if (!validateField(name)) isValid = false;
    });

    if (!isValid){
      formSuccess.classList.remove('visible');
      return;
    }

    // No backend is wired up for this demo — simulate a successful submission.
    formSuccess.classList.add('visible');
    form.reset();
    Object.keys(fields).forEach(name => clearError(name));

    setTimeout(() => formSuccess.classList.remove('visible'), 5000);
  });


  /* -----------------------------------------------------------
     8. BACK TO TOP BUTTON
  ----------------------------------------------------------- */
  const backToTop = document.getElementById('backToTop');

  function toggleBackToTop(){
    backToTop.classList.toggle('visible', window.scrollY > 480);
  }
  document.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
