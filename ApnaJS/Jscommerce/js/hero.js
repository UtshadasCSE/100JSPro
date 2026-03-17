/* ============================================
   HERO.JS — Hero Slider Logic
   Auto-play, Arrows, Dots, Progress, Swipe
   ============================================ */

(function () {
  'use strict';

  const AUTOPLAY_DURATION = 5000; // ms per slide

  const slider    = document.getElementById('heroSlider');
  const slides    = document.querySelectorAll('.hero-slide');
  const dots      = document.querySelectorAll('.hero-dot');
  const prevBtn   = document.getElementById('heroPrev');
  const nextBtn   = document.getElementById('heroNext');
  const progressBar = document.getElementById('heroProgressBar');

  if (!slider || slides.length === 0) return;

  let current    = 0;
  let autoTimer  = null;
  let progTimer  = null;
  let isPaused   = false;

  /* ------------------------------------------
     Go to a specific slide
  ------------------------------------------ */
  function goTo(index) {
    const prev = current;

    // Wrap around
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    if (index === current) return;

    // Remove active from old
    slides[prev].classList.remove('is-active');
    slides[prev].classList.add('is-leaving');
    dots[prev].classList.remove('is-active');
    dots[prev].setAttribute('aria-selected', 'false');

    // Cleanup leaving class after transition
    const leavingSlide = slides[prev];
    setTimeout(function () {
      leavingSlide.classList.remove('is-leaving');
    }, 700);

    // Activate new
    current = index;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
    dots[current].setAttribute('aria-selected', 'true');

    // Restart progress
    resetProgress();
  }

  /* ------------------------------------------
     Auto-play
  ------------------------------------------ */
  function startAutoplay() {
    clearInterval(autoTimer);
    autoTimer = setInterval(function () {
      if (!isPaused) goTo(current + 1);
    }, AUTOPLAY_DURATION);
  }

  /* ------------------------------------------
     Progress Bar
  ------------------------------------------ */
  function resetProgress() {
    if (!progressBar) return;
    // Reset
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    // Force reflow
    void progressBar.offsetWidth;
    // Animate
    progressBar.style.transition = 'width ' + AUTOPLAY_DURATION + 'ms linear';
    progressBar.style.width = '100%';
  }

  /* ------------------------------------------
     Arrow Controls
  ------------------------------------------ */
  prevBtn.addEventListener('click', function () {
    goTo(current - 1);
    startAutoplay(); // reset timer
  });
  nextBtn.addEventListener('click', function () {
    goTo(current + 1);
    startAutoplay();
  });

  /* ------------------------------------------
     Dot Controls
  ------------------------------------------ */
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goTo(parseInt(dot.dataset.slide, 10));
      startAutoplay();
    });
  });

  /* ------------------------------------------
     Pause on hover
  ------------------------------------------ */
  slider.addEventListener('mouseenter', function () { isPaused = true; });
  slider.addEventListener('mouseleave', function () { isPaused = false; });

  /* ------------------------------------------
     Keyboard Navigation
  ------------------------------------------ */
  slider.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  { goTo(current - 1); startAutoplay(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); startAutoplay(); }
  });

  /* ------------------------------------------
     Touch / Swipe Support
  ------------------------------------------ */
  let touchStartX = 0;
  let touchEndX   = 0;

  slider.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goTo(current + 1) : goTo(current - 1);
      startAutoplay();
    }
  }, { passive: true });

  /* ------------------------------------------
     Init
  ------------------------------------------ */
  function init() {
    // Ensure first slide is active
    slides[0].classList.add('is-active');
    dots[0].classList.add('is-active');
    resetProgress();
    startAutoplay();
  }

  init();

})();
