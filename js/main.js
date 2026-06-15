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

/* ── Active nav link ── */
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(link => {
  const linkPath = link.getAttribute('href').split('/').pop();
  if (linkPath === currentPath) link.classList.add('active');
});

/* ── Contact form → mailto ── */
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const first   = form.querySelector('[name="first_name"]').value.trim();
    const last    = form.querySelector('[name="last_name"]').value.trim();
    const email   = form.querySelector('[name="email"]').value.trim();
    const phone   = form.querySelector('[name="phone"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    const body = [
      `Name: ${first} ${last}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      '',
      message
    ].filter(l => l !== null).join('\n');

    window.location.href =
      `mailto:pranamayahealingarts@gmail.com` +
      `?subject=${encodeURIComponent(`Message from ${first} ${last}`)}` +
      `&body=${encodeURIComponent(body)}`;
  });
}
