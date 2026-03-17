/* ============================================
   HEADER.JS — All Header Interactions
   ============================================ */

(function () {
  "use strict";

  /* ---- DOM References ---- */
  const header = document.getElementById("siteHeader");
  const hamburger = document.getElementById("hamburger");
  const headerNav = document.getElementById("headerNav");
  const navOverlay = document.getElementById("navOverlay");
  const hasMegaItems = document.querySelectorAll(".nav__item.has-mega");

  /* ============================================
     1. STICKY HEADER — scroll shadow
     ============================================ */
  function handleScroll() {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* ============================================
     2. HAMBURGER / MOBILE NAV
     ============================================ */
  function openNav() {
    hamburger.classList.add("active");
    headerNav.classList.add("nav-open");
    navOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeNav() {
    hamburger.classList.remove("active");
    headerNav.classList.remove("nav-open");
    navOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", function () {
    headerNav.classList.contains("nav-open") ? closeNav() : openNav();
  });
  navOverlay.addEventListener("click", closeNav);

  /* ============================================
     3. MOBILE MEGA MENU — ACCORDION TOGGLE
     ============================================ */
  hasMegaItems.forEach(function (item) {
    const link = item.querySelector(".nav__link");
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const isOpen = item.classList.contains("mega-open");
        // Close all
        hasMegaItems.forEach((i) => i.classList.remove("mega-open"));
        if (!isOpen) item.classList.add("mega-open");
      }
    });
  });

  /* Close mobile nav on resize to desktop */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      closeNav();
      hasMegaItems.forEach((i) => i.classList.remove("mega-open"));
    }
  });

  /* ============================================
     4. TOPBAR COUNTDOWN TIMER
     ============================================ */
  function startCountdown() {
    const el = document.getElementById("topbarCountdown");
    if (!el) return;

    // Target: midnight tonight (or set a fixed future date)
    const storedEnd = sessionStorage.getItem("saleEndTime");
    let endTime;
    if (storedEnd) {
      endTime = parseInt(storedEnd, 10);
    } else {
      // 8 hours from now
      endTime = Date.now() + 8 * 60 * 60 * 1000;
      sessionStorage.setItem("saleEndTime", endTime);
    }

    function tick() {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        el.textContent = "00:00:00";
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      el.textContent =
        String(h).padStart(2, "0") +
        ":" +
        String(m).padStart(2, "0") +
        ":" +
        String(s).padStart(2, "0");
    }
    tick();
    setInterval(tick, 1000);
  }
  startCountdown();

  /* ============================================
     5. KEYBOARD ACCESSIBILITY — ESC closes nav
     ============================================ */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });
})();
