/* =============================================
   Apartment Dog Positive Training — script.js
   ============================================= */

// ─── Smooth scroll to #offer ───────────────────────────────────────────────
function scrollToOffer(event) {
  if (event) event.preventDefault();
  const offer = document.getElementById('offer');
  if (offer) {
    offer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ─── Fade-in on scroll (IntersectionObserver) ──────────────────────────────
function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

// ─── FAQ Accordion ─────────────────────────────────────────────────────────
function initFaq() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other open items
      items.forEach((other) => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherAnswer = other.querySelector('.faq-answer');
          const otherQuestion = other.querySelector('.faq-question');
          if (otherAnswer) otherAnswer.classList.remove('open');
          if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        answer.classList.remove('open');
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        answer.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ─── Sticky header shadow enhancement ─────────────────────────────────────
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
    } else {
      header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)';
    }
  }, { passive: true });
}

// ─── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initFadeIn();
  initFaq();
  initStickyHeader();
});
