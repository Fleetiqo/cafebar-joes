// Header scroll effect
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.pageYOffset > 100);
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav__menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.feature, .menu__item, .gallery__item, .jeu__card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`;
  observer.observe(el);
});

console.log('Café-Bar Joes - Website loaded successfully!');
