/* ============================================================
   SHOE INVESTMENTS — main.js
   Handles: language toggle, mobile nav, dropdowns, bio expand
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Language Toggle ---------- */
  const translations = {
    /* nav */
    'nav-over-ons':    { nl: 'Over Ons',       en: 'About Us' },
    'nav-team':        { nl: 'Team',            en: 'Team' },
    'nav-esg':         { nl: 'ESG',             en: 'ESG' },
    'nav-investeringen': { nl: 'Investeringen', en: 'Investments' },
    'nav-portfolio':   { nl: 'Portfolio',       en: 'Portfolio' },
    'nav-fondsen':     { nl: 'Fondsen',         en: 'Funds' },
    'nav-stage':       { nl: 'Stage',           en: 'Internship' },
    'nav-actueel':     { nl: 'Actueel',         en: 'News' },
    'nav-contact':     { nl: 'Neem Contact Op', en: 'Contact Us' },
  };

  let currentLang = localStorage.getItem('shoe-lang') || 'nl';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('shoe-lang', lang);

    /* Switch all data-nl / data-en elements */
    document.querySelectorAll('[data-nl]').forEach(el => {
      el.textContent = el.getAttribute('data-' + lang) || el.getAttribute('data-nl');
    });

    /* Switch all data-nl-html / data-en-html elements (allow HTML) */
    document.querySelectorAll('[data-nl-html]').forEach(el => {
      el.innerHTML = el.getAttribute('data-' + lang + '-html') || el.getAttribute('data-nl-html');
    });

    /* Update lang buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* Update html lang attr */
    document.documentElement.lang = lang;
  }

  function initLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
    applyLanguage(currentLang);
  }

  /* ---------- Mobile Nav ---------- */
  function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close on link click */
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    /* Close on outside click */
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- Bio Expand (Team page) ---------- */
  function initBioToggle() {
    document.querySelectorAll('.bio-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const bio = btn.previousElementSibling;
        const isExpanded = bio.classList.toggle('expanded');
        btn.setAttribute('data-nl', isExpanded ? 'Lees minder' : 'Lees meer');
        btn.setAttribute('data-en', isExpanded ? 'Read less' : 'Read more');
        btn.textContent = btn.getAttribute('data-' + currentLang);
      });
    });
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ---------- About page: rotating portfolio image ---------- */
  function initPortfolioImageRotator() {
    const rotator = document.querySelector('.about-portfolio-rotator[data-rotate-images]');
    if (!rotator) return;

    const images = (rotator.getAttribute('data-rotate-images') || '')
      .split('|')
      .map(url => url.trim())
      .filter(Boolean);

    if (images.length < 2) return;

    let current = 0;
    const switchDelayMs = 3800;
    const fadeDelayMs = 180;

    window.setInterval(() => {
      current = (current + 1) % images.length;
      rotator.classList.add('fade-out');
      window.setTimeout(() => {
        rotator.src = images[current];
        rotator.classList.remove('fade-out');
      }, fadeDelayMs);
    }, switchDelayMs);
  }

  /* ---------- Active nav link ---------- */
  function setActiveNav() {
    const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
    document.querySelectorAll('.nav-link[href]').forEach(link => {
      const href = link.getAttribute('href').replace(/\/$/, '');
      if (path.endsWith(href) && href !== '') {
        link.classList.add('active');
      }
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initLangToggle();
    initMobileNav();
    initBioToggle();
    initSmoothScroll();
    initPortfolioImageRotator();
    setActiveNav();
  });

})();
