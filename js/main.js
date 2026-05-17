/* ── Mobile navigation toggle ── */
const toggle = document.getElementById('mobile-toggle');
const nav    = document.getElementById('main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

/* ── Mobile dropdown toggles ── */
document.querySelectorAll('.has-dropdown > a').forEach(link => {
  link.addEventListener('click', e => {
    if (window.innerWidth <= 860) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

/* ── Close nav on outside click ── */
document.addEventListener('click', e => {
  if (nav && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
  }
});

/* ── Close nav on resize to desktop ── */
window.addEventListener('resize', () => {
  if (window.innerWidth > 860 && nav) {
    nav.classList.remove('open');
  }
});

/* ── Sticky header shadow ── */
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 12px rgba(0,0,0,0.1)'
      : '0 1px 4px rgba(0,0,0,0.07)';
  });
}

/* ── Basic contact form prevent default (replace with real handler) ── */
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Verzonden ✓';
    btn.style.background = '#4d8f87';
    btn.disabled = true;
  });
}
