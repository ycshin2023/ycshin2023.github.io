/* Shared behaviour for every page of the portfolio. */

/* ---------- Mobile navigation ---------- */
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  // Close the menu after tapping a link or clicking outside it.
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---------- Reveal on scroll + animated skill bars ---------- */
const revealTargets = document.querySelectorAll('.reveal');
const bars = document.querySelectorAll('.bar span');

const fillBar = (bar) => {
  bar.style.width = `${bar.dataset.level || 0}%`;
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.bar span').forEach(fillBar);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));

  // Bars that live outside a .reveal wrapper still need filling.
  bars.forEach((bar) => {
    if (!bar.closest('.reveal')) fillBar(bar);
  });
} else {
  revealTargets.forEach((el) => el.classList.add('visible'));
  bars.forEach(fillBar);
}

/* ---------- Contact form ---------- */
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    // No back end is wired up yet, so compose the message in the
    // visitor's mail client instead of silently dropping it.
    // Swap this handler for a Formspree/Netlify action when ready.
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const topic = (data.get('topic') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    const subject = encodeURIComponent(`[Portfolio] ${topic || 'New enquiry'} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`
    );

    window.location.href = `mailto:ycshin2023@gmail.com?subject=${subject}&body=${body}`;

    const status = document.querySelector('#form-status');
    if (status) status.classList.add('show');
  });
}

/* ---------- Footer year ---------- */
document.querySelectorAll('.year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
