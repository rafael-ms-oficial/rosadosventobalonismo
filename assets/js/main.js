document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSlideshow('hero-slideshow', SITE.heroSlides, 5000);
  initSlideshow('cta-banner-bg', SITE.ctaSlides, 5500);
  renderPackages();
  renderSteps();
  renderExperiences();
  renderTestimonials();
  renderInstagram();
  renderFAQ();
  initScrollAnimations();
});

/* ---- NAV ----------------------------------------- */
function initNav() {
  const toggle  = document.getElementById('nav-toggle');
  const links   = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.innerHTML = open
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  links.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = links.querySelectorAll('.nav__link[href^="#"]');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(l => l.classList.remove('active'));
      const active = [...navLinks].find(l => l.getAttribute('href') === `#${entry.target.id}`);
      if (active) active.classList.add('active');
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));
}

/* ---- SLIDESHOW ------------------------------------ */
function initSlideshow(containerId, images, interval) {
  const container = document.getElementById(containerId);
  if (!container) return;

  images.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = `hero__slide${i === 0 ? ' active' : ''}`;
    div.style.backgroundImage = `url(${src})`;
    container.appendChild(div);
  });

  let current = 0;
  setInterval(() => {
    const slides = container.querySelectorAll('.hero__slide');
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, interval);
}

/* ---- PACKAGES ------------------------------------ */
function renderPackages() {
  const grid = document.getElementById('packages-grid');
  if (!grid) return;

  grid.innerHTML = SITE.packages.map(pkg => `
    <div class="package-card${pkg.featured ? ' package-card--featured' : ''} fade-in">
      ${pkg.badge ? `<div class="package-card__badge">${pkg.badge}</div>` : ''}
      <div class="package-card__body">
        <h3 class="package-card__name">${pkg.name}</h3>
        <p class="package-card__description">${pkg.description}</p>

        <div class="pkg-price">
          <div class="pkg-price__original">${pkg.priceMain}</div>
          <div class="pkg-installments">
            <div class="pkg-installments__label">Experiência a partir de</div>
            <div class="pkg-installments__row">
              <span class="pkg-installments__qty">${pkg.installmentsQty}</span>
              <span class="pkg-installments__value">${pkg.installmentsValue}</span>
              <span class="pkg-installments__suffix">/ Sem juros</span>
            </div>
            <span class="pkg-installments__sublabel">${pkg.priceLabel}</span>
          </div>
        </div>

        <div class="package-card__highlights">
          ${pkg.highlights.map(h => `
            <div class="package-card__highlight">
              <i class="fas ${h.icon}"></i>
              <span>${h.text}</span>
            </div>`).join('')}
        </div>

        <div class="package-card__actions">
          <a href="${SITE.waMsg(pkg.waMsg)}" class="btn btn--gold" target="_blank" rel="noopener">
            Reservar Agora
          </a>
        </div>

        <a href="${SITE.waMsg('Olá! Tenho algumas dúvidas sobre o voo de balão da Rosa dos Ventos. Pode me ajudar?')}"
           class="package-card__wa-link" target="_blank" rel="noopener">
          <i class="fab fa-whatsapp"></i> Falar no WhatsApp
        </a>

        <p class="package-card__notice">${pkg.notice}</p>

        <div class="package-card__divider"></div>
        <p class="package-card__included-label">Tudo que está incluso no seu voo:</p>
        <ul class="package-card__included">
          ${pkg.included.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </div>`).join('');
}

/* ---- STEPS --------------------------------------- */
function renderSteps() {
  const grid = document.getElementById('steps-grid');
  if (!grid) return;

  grid.innerHTML = SITE.steps.map(s => `
    <div class="step-card fade-in">
      <div class="step-card__icon"><i class="fas ${s.icon}"></i></div>
      <h3 class="step-card__title">${s.title}</h3>
      <p class="step-card__text">${s.text}</p>
    </div>`).join('');
}

/* ---- EXPERIENCES --------------------------------- */
function renderExperiences() {
  const grid = document.getElementById('experience-grid');
  if (!grid) return;

  grid.innerHTML = SITE.experiences.map(e => `
    <div class="exp-card fade-in">
      <img src="${e.img}" alt="${e.title}" class="exp-card__img" loading="lazy">
      <div class="exp-card__overlay"></div>
      <div class="exp-card__content">
        <h3 class="exp-card__title">${e.title}</h3>
        <p class="exp-card__desc">${e.desc}</p>
      </div>
    </div>`).join('');
}

/* ---- TESTIMONIALS -------------------------------- */
function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = SITE.testimonials.map(t => `
    <div class="testimonial-card fade-in">
      <img src="${t.img}" alt="${t.name}" class="testimonial-card__img" loading="lazy">
      <div>
        <div class="testimonial-card__stars">★★★★★</div>
        <p class="testimonial-card__text">${t.text}</p>
        <span class="testimonial-card__name">${t.name}</span>
      </div>
    </div>`).join('');
}

/* ---- INSTAGRAM ----------------------------------- */
function renderInstagram() {
  const grid = document.getElementById('instagram-grid');
  if (!grid) return;

  grid.innerHTML = SITE.instagramPosts.map(post => `
    <a href="${post.url}" class="instagram__item" target="_blank" rel="noopener" aria-label="${post.alt}">
      <img src="${post.img}" alt="${post.alt}" loading="lazy">
      <div class="instagram__item__overlay"><i class="fab fa-instagram"></i></div>
    </a>`).join('');
}

/* ---- FAQ ----------------------------------------- */
function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;

  list.innerHTML = SITE.faq.map((item, i) => `
    <div class="faq-item${i === 0 ? ' open' : ''}">
      <div class="faq-item__q" role="button" tabindex="0" aria-expanded="${i === 0}">
        <span>${item.q}</span>
        <span class="faq-item__icon"><i class="fas fa-plus"></i></span>
      </div>
      <div class="faq-item__body" role="region">
        <div class="faq-item__a">${item.a}</div>
      </div>
    </div>`).join('');

  list.querySelectorAll('.faq-item__q').forEach(btn => {
    const activate = () => {
      const item    = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      list.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-item__q').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    };
    btn.addEventListener('click', activate);
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
  });
}

/* ---- SCROLL ANIMATIONS --------------------------- */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  const observe = () =>
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));

  observe();
  setTimeout(observe, 150);
}
