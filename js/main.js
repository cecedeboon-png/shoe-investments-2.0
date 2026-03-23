/* ============================================
   Shoe Investments 2.0 — Main JS
   ============================================ */

// --- Scroll-aware nav (with dark mode toggle) ---
(function() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const heroEl = document.querySelector('.hero');
  const hasDarkNav = nav.classList.contains('nav--dark');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 40);

        // Toggle nav--dark off when scrolled past hero
        if (hasDarkNav && heroEl) {
          const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
          if (window.scrollY > heroBottom - 80) {
            nav.classList.remove('nav--dark');
          } else {
            nav.classList.add('nav--dark');
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  });
})();

// --- Language toggle ---
function setLang(lang) {
  localStorage.setItem('shoe-lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val) el.textContent = val;
  });

  document.querySelectorAll('[data-en-html]').forEach(el => {
    const val = el.getAttribute('data-' + lang + '-html');
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Apply saved language on load
(function() {
  const lang = localStorage.getItem('shoe-lang') || 'en';
  applyLang(lang);
})();

// --- Scroll reveal animations ---
(function() {
  const reveals = document.querySelectorAll('.reveal');
  const staggers = document.querySelectorAll('.stagger');
  const revealsLeft = document.querySelectorAll('.reveal-left');

  // Hide all elements first
  reveals.forEach(el => el.classList.add('reveal--hidden'));
  staggers.forEach(el => el.classList.add('stagger--hidden'));
  revealsLeft.forEach(el => el.classList.add('reveal-left--hidden'));

  // Force a reflow so the browser paints the hidden state
  document.body.offsetHeight;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (el.classList.contains('reveal')) {
          el.classList.remove('reveal--hidden');
          el.classList.add('reveal--visible');
        }
        if (el.classList.contains('stagger')) {
          el.classList.remove('stagger--hidden');
          el.classList.add('stagger--visible');
        }
        if (el.classList.contains('reveal-left')) {
          el.classList.remove('reveal-left--hidden');
          el.classList.add('reveal-left--visible');
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
  staggers.forEach(el => observer.observe(el));
  revealsLeft.forEach(el => observer.observe(el));
})();

// --- Counter animation for stats ---
(function() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const start = performance.now();

        function animate(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          el.textContent = prefix + current + suffix;
          if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(el => observer.observe(el));
})();

// --- Portfolio filter ---
function filterPortfolio(type, btn) {
  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// --- Mobile menu toggle ---
(function() {
  const burger = document.querySelector('.nav__burger');
  if (!burger) return;

  burger.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
    });
  });
})();

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
