/* ============================================
   Shoe Investments 2.0 — Main JS
   ============================================ */

// --- Scroll-aware nav ---
(function() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .stagger').forEach(el => observer.observe(el));
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
