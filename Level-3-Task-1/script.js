/* =========================================================
   Aperture — Image Manipulation
   Cognifyz Level 3, Task 1
   script.js — Lightbox Gallery + Automatic Slideshow + Nav
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------------------
     1. MOBILE NAVIGATION TOGGLE
  ----------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu whenever a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });


  /* -----------------------------------------------------------
     2. LIGHTBOX GALLERY
  ----------------------------------------------------------- */
  const galleryItems     = document.querySelectorAll('.gallery-item');
  const lightbox         = document.getElementById('lightbox');
  const lightboxOverlay  = document.getElementById('lightboxOverlay');
  const lightboxImg      = document.getElementById('lightboxImg');
  const lightboxCaption  = document.getElementById('lightboxCaption');
  const lightboxClose    = document.getElementById('lightboxClose');

  let lastFocusedElement = null;

  function openLightbox(item){
    const img = item.querySelector('img');
    lightboxImg.src = img.src.replace('/800/800', '/1400/1400'); // request a larger version
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = item.dataset.caption || '';

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // lock background scroll

    lastFocusedElement = document.activeElement;
    lightboxClose.focus();
  }

  function closeLightbox(){
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) lastFocusedElement.focus();
  }

  // Open on thumbnail click (also make thumbnails keyboard-accessible)
  galleryItems.forEach(item => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Open enlarged image: ${item.dataset.caption}`);

    item.addEventListener('click', () => openLightbox(item));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openLightbox(item);
      }
    });
  });

  // Close via close button
  lightboxClose.addEventListener('click', closeLightbox);

  // Close by clicking the dark overlay (outside the image)
  lightboxOverlay.addEventListener('click', closeLightbox);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')){
      closeLightbox();
    }
  });


  /* -----------------------------------------------------------
     3. AUTOMATIC SLIDESHOW
  ----------------------------------------------------------- */
  const slideshowEl = document.getElementById('slideshowEl');
  const slides       = Array.from(document.querySelectorAll('.slide'));
  const dotsWrap      = document.getElementById('slideDots');
  const slideCaption  = document.getElementById('slideCaption');
  const prevBtn       = document.getElementById('slidePrev');
  const nextBtn       = document.getElementById('slideNext');

  const SLIDE_INTERVAL = 3000; // 3 seconds, as required
  let currentIndex = 0;
  let autoplayTimer = null;

  // Build one dot per slide
  slides.forEach((slide, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function updateCaption(index){
    slideCaption.textContent = slides[index].dataset.caption || '';
  }

  function goToSlide(index){
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
    updateCaption(currentIndex);
  }

  function nextSlide(){ goToSlide(currentIndex + 1); }
  function prevSlide(){ goToSlide(currentIndex - 1); }

  function startAutoplay(){
    stopAutoplay(); // avoid stacking multiple intervals
    autoplayTimer = setInterval(nextSlide, SLIDE_INTERVAL);
  }
  function stopAutoplay(){
    clearInterval(autoplayTimer);
  }

  // Manual controls
  nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });
  prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });

  // Pause on hover, resume on mouse leave
  slideshowEl.addEventListener('mouseenter', stopAutoplay);
  slideshowEl.addEventListener('mouseleave', startAutoplay);

  // Keyboard controls for slideshow (left/right arrows) when it or its
  // children have focus, without hijacking arrow keys used elsewhere on the page
  slideshowEl.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight'){ nextSlide(); startAutoplay(); }
    if (e.key === 'ArrowLeft'){ prevSlide(); startAutoplay(); }
  });

  // Initialize
  updateCaption(currentIndex);
  startAutoplay();

});
