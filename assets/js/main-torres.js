document.addEventListener('DOMContentLoaded', () => {
  renderUrgencyBar();
  initSlideshow();
  renderHero();
  renderStats();
  renderPackage();
  renderJourney();
  renderDifferentials();
  renderAudiences();
  renderSafety();
  renderUrgencyBlock();
  renderTestimonials();
  renderFAQ();
  renderCtaFinal();
  initNav();
  initScrollAnimations();
});

/* ---- URGENCY BAR --------------------------------- */
function renderUrgencyBar() {
  const el = document.getElementById('urgency-bar');
  if (!el) return;
  el.textContent = FESTIVAL.urgencyBar;
}

/* ---- HERO ---------------------------------------- */
function initSlideshow() {
  const container = document.getElementById('hero-slideshow');
  if (!container) return;
  FESTIVAL.heroSlides.forEach((src, i) => {
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
  }, 5000);
}

function renderHero() {
  const h = FESTIVAL.hero;
  const el = document.getElementById('hero-content');
  if (!el) return;
  el.innerHTML = `
    <span class="hero__eyebrow fade-in">${h.eyebrow}</span>
    <h1 class="hero__headline fade-in">${h.headline}</h1>
    <p class="hero__sub fade-in">${h.subheadline}</p>
    <div class="hero__badges fade-in">
      ${h.badges.map(b => `
        <div class="hero__badge">
          <i class="fas ${b.icon}"></i>
          <span>${b.text}</span>
        </div>`).join('')}
    </div>
    <div class="hero__cta-wrap fade-in">
      <a href="${FESTIVAL.waMsg(FESTIVAL.waDefault)}" class="btn btn--gold btn--lg" target="_blank" rel="noopener">
        <i class="fab fa-whatsapp"></i> ${h.cta}
      </a>
      <p class="hero__cta-sub"><i class="fas fa-lock"></i> ${h.ctaSub}</p>
    </div>`;
}

/* ---- STATS --------------------------------------- */
function renderStats() {
  const el = document.getElementById('stats-grid');
  if (!el) return;
  el.innerHTML = FESTIVAL.stats.map(s => `
    <div class="stat-item fade-in">
      <span class="stat-item__value">${s.value}</span>
      <span class="stat-item__label">${s.label}</span>
    </div>`).join('');
}

/* ---- PACKAGE ------------------------------------- */
function renderPackage() {
  const pkg = FESTIVAL.package;
  const el  = document.getElementById('package-block');
  if (!el) return;
  el.innerHTML = `
    <div class="pkg-festival fade-in">
      <div class="pkg-festival__badge">${pkg.badge}</div>
      <h3 class="pkg-festival__name">${pkg.name}</h3>
      <p class="pkg-festival__tagline">${pkg.tagline}</p>

      <div class="pkg-festival__meta">
        <span><i class="fas fa-clock"></i> ${pkg.duration} de experiência</span>
        <span><i class="fas fa-wind"></i> Voo de ${pkg.flightTime}</span>
        <span><i class="fas fa-users"></i> Máx. ${pkg.capacity}</span>
      </div>

      <ul class="pkg-festival__included">
        ${pkg.included.map(item => `
          <li><i class="fas ${item.icon}"></i><span>${item.text}</span></li>`).join('')}
      </ul>

      <div class="pkg-festival__price">
        <div class="pkg-price__original">${pkg.price}</div>
        <div class="pkg-installments">
          <div class="pkg-installments__label">Experiência a partir de</div>
          <div class="pkg-installments__row">
            <span class="pkg-installments__qty">${pkg.installmentsQty}</span>
            <span class="pkg-installments__value">${pkg.installmentsValue}</span>
            <span class="pkg-installments__suffix">/ ${pkg.priceNote}</span>
          </div>
          <span class="pkg-installments__sublabel">${pkg.priceLabel}</span>
        </div>
      </div>

      <a href="${FESTIVAL.waMsg(pkg.waMsg)}" class="btn btn--gold btn--lg btn--full" target="_blank" rel="noopener">
        <i class="fab fa-whatsapp"></i> ${pkg.cta}
      </a>
      <p class="pkg-festival__notice"><i class="fas fa-circle-info"></i> Cancelamento gratuito com antecedência. Consulte condições via WhatsApp.</p>
    </div>`;
}

/* ---- JOURNEY ------------------------------------- */
function renderJourney() {
  const el = document.getElementById('journey-list');
  if (!el) return;
  el.innerHTML = FESTIVAL.journey.map((step, i) => `
    <div class="journey-step fade-in">
      <div class="journey-step__line"></div>
      <div class="journey-step__icon"><i class="fas ${step.icon}"></i></div>
      <div class="journey-step__body">
        <span class="journey-step__time">${step.time}</span>
        <h4 class="journey-step__title">${step.title}</h4>
        <p class="journey-step__desc">${step.desc}</p>
      </div>
    </div>`).join('');
}

/* ---- DIFFERENTIALS ------------------------------- */
function renderDifferentials() {
  const el = document.getElementById('differentials-grid');
  if (!el) return;
  el.innerHTML = FESTIVAL.differentials.map(d => `
    <div class="diff-card fade-in">
      <div class="diff-card__icon"><i class="fas ${d.icon}"></i></div>
      <h4 class="diff-card__title">${d.title}</h4>
      <p class="diff-card__desc">${d.desc}</p>
    </div>`).join('');
}

/* ---- AUDIENCES ----------------------------------- */
function renderAudiences() {
  const el = document.getElementById('audiences-grid');
  if (!el) return;
  el.innerHTML = FESTIVAL.audiences.map(a => `
    <div class="audience-card fade-in">
      <div class="audience-card__icon"><i class="fas ${a.icon}"></i></div>
      <h4 class="audience-card__title">${a.title}</h4>
      <p class="audience-card__headline">${a.headline}</p>
      <p class="audience-card__desc">${a.desc}</p>
      <a href="${FESTIVAL.waMsg(a.waMsg)}" class="btn btn--outline-gold" target="_blank" rel="noopener">
        <i class="fab fa-whatsapp"></i> ${a.cta}
      </a>
    </div>`).join('');
}

/* ---- SAFETY -------------------------------------- */
function renderSafety() {
  const el = document.getElementById('safety-grid');
  if (!el) return;
  el.innerHTML = FESTIVAL.safety.map(s => `
    <div class="safety-card fade-in">
      <div class="safety-card__icon"><i class="fas ${s.icon}"></i></div>
      <h4 class="safety-card__title">${s.title}</h4>
      <p class="safety-card__desc">${s.desc}</p>
    </div>`).join('');
}

/* ---- URGENCY BLOCK ------------------------------- */
function renderUrgencyBlock() {
  const u  = FESTIVAL.urgency;
  const el = document.getElementById('urgency-block');
  if (!el) return;
  el.innerHTML = `
    <h2 class="urgency__title fade-in">${u.title}</h2>
    <p class="urgency__subtitle fade-in">${u.subtitle}</p>
    <ul class="urgency__list fade-in">
      ${u.points.map(p => `<li><i class="fas fa-xmark"></i> ${p}</li>`).join('')}
    </ul>
    <a href="${FESTIVAL.waMsg(FESTIVAL.waDefault)}" class="btn btn--gold btn--lg fade-in" target="_blank" rel="noopener">
      <i class="fab fa-whatsapp"></i> ${u.cta}
    </a>`;
}

/* ---- TESTIMONIALS -------------------------------- */
function renderTestimonials() {
  const el = document.getElementById('testimonials-grid');
  if (!el) return;
  el.innerHTML = FESTIVAL.testimonials.map(t => `
    <div class="testimonial-card fade-in">
      <img src="${t.img}" alt="${t.name}" class="testimonial-card__img" loading="lazy">
      <div>
        <div class="testimonial-card__stars">★★★★★</div>
        <p class="testimonial-card__text">${t.text}</p>
        <span class="testimonial-card__name">${t.name}</span>
        <span class="testimonial-card__detail">${t.detail}</span>
      </div>
    </div>`).join('');
}

/* ---- FAQ ----------------------------------------- */
function renderFAQ() {
  const el = document.getElementById('faq-list');
  if (!el) return;
  el.innerHTML = FESTIVAL.faq.map((item, i) => `
    <div class="faq-item${i === 0 ? ' open' : ''}">
      <div class="faq-item__q" role="button" tabindex="0" aria-expanded="${i === 0}">
        <span>${item.q}</span>
        <span class="faq-item__icon"><i class="fas fa-plus"></i></span>
      </div>
      <div class="faq-item__body" role="region">
        <div class="faq-item__a">${item.a}</div>
      </div>
    </div>`).join('');

  el.querySelectorAll('.faq-item__q').forEach(btn => {
    const activate = () => {
      const item    = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      el.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-item__q').setAttribute('aria-expanded', 'false');
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

/* ---- CTA FINAL ----------------------------------- */
function renderCtaFinal() {
  const c  = FESTIVAL.ctaFinal;
  const el = document.getElementById('cta-final-block');
  if (!el) return;
  el.innerHTML = `
    <h2 class="cta-final__headline fade-in">${c.headline}</h2>
    <p class="cta-final__sub fade-in">${c.sub}</p>
    <a href="${FESTIVAL.waMsg(FESTIVAL.waDefault)}" class="btn btn--gold btn--lg fade-in" target="_blank" rel="noopener">
      <i class="fab fa-whatsapp"></i> ${c.cta}
    </a>
    <p class="cta-final__sub2 fade-in">${c.ctaSub}</p>`;
}

/* ---- NAV ----------------------------------------- */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.innerHTML = open ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  links.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.innerHTML = '<i class="fas fa-bars"></i>';
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
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const observe = () =>
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
  observe();
  setTimeout(observe, 200);
}
