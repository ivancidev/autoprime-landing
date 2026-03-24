/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== CAR FILTER ===== */
const filterMarca = document.getElementById('filter-marca');
const filterTipo = document.getElementById('filter-tipo');
const filterPrecio = document.getElementById('filter-precio');
const carsGrid = document.getElementById('cars-grid');
const noResults = document.getElementById('no-results');
const searchForm = document.getElementById('search-form');

function filterCars() {
  const marca = filterMarca.value;
  const tipo = filterTipo.value;
  const precio = filterPrecio.value ? parseInt(filterPrecio.value) : Infinity;

  const cards = carsGrid.querySelectorAll('.car-card');
  let visible = 0;

  cards.forEach(card => {
    const cardMarca = card.dataset.marca;
    const cardTipo = card.dataset.tipo;
    const cardPrecio = parseInt(card.dataset.precio);

    const match =
      (!marca || cardMarca === marca) &&
      (!tipo || cardTipo === tipo) &&
      (cardPrecio <= precio);

    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });

  noResults.classList.toggle('hidden', visible > 0);
}

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  filterCars();
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
});

/* ===== FAVORITES ===== */
carsGrid.querySelectorAll('.car-fav').forEach(btn => {
  btn.addEventListener('click', () => {
    const isActive = btn.classList.toggle('active');
    btn.textContent = isActive ? '♥' : '♡';
    btn.style.color = isActive ? '#c8a84b' : '';
  });
});

/* ===== TESTIMONIALS SLIDER ===== */
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoplayInterval;

function showSlide(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % testimonials.length);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 5000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    stopAutoplay();
    showSlide(parseInt(dot.dataset.index));
    startAutoplay();
  });
});

startAutoplay();

/* ===== CONTACT FORM VALIDATION ===== */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const submitBtn = document.getElementById('submit-btn');

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById('error-' + fieldId);
  field.classList.add('error');
  if (error) error.textContent = message;
}

function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById('error-' + fieldId);
  field.classList.remove('error');
  if (error) error.textContent = '';
}

function validateForm() {
  let valid = true;

  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const email = document.getElementById('email').value.trim();

  clearError('nombre');
  clearError('telefono');
  clearError('email');

  if (!nombre || nombre.length < 3) {
    showError('nombre', 'Ingresa tu nombre completo.');
    valid = false;
  }

  if (!telefono || !/^\+?[\d\s\-]{8,}$/.test(telefono)) {
    showError('telefono', 'Ingresa un teléfono válido.');
    valid = false;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('email', 'Ingresa un correo electrónico válido.');
    valid = false;
  }

  return valid;
}

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!validateForm()) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';

  // Simulate async submission
  setTimeout(() => {
    contactForm.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar solicitud';
    formSuccess.classList.remove('hidden');
    setTimeout(() => formSuccess.classList.add('hidden'), 5000);
  }, 1200);
});

/* ===== SCROLL REVEAL (Intersection Observer) ===== */
const revealElements = document.querySelectorAll('.car-card, .service-card, .info-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
