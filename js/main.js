/**
 * LÓGICA INTERACTIVA - MA DIGITAL PORTFOLIO
 * -----------------------------------------
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configuración de WhatsApp
  const WHATSAPP_NUMBER = "573027642208";
  const DEFAULT_WA_MESSAGE = encodeURIComponent("¡Hola MA DIGITAL! Vengo desde su página web y me gustaría cotizar un proyecto para mi negocio.");

  // Referencias DOM
  const navbar = document.getElementById('navbar');
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');
  const menuToggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Configurar enlaces de WhatsApp
  const whatsappBtns = document.querySelectorAll('.js-whatsapp-link');
  whatsappBtns.forEach(btn => {
    const customMsg = btn.getAttribute('data-msg');
    const msgToUse = customMsg ? encodeURIComponent(customMsg) : DEFAULT_WA_MESSAGE;
    btn.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}?text=${msgToUse}`);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  /* -------------------------------------------------------------------------- */
  /* 1. NAVBAR STICKY SCROLL EFFECT                                             */
  /* -------------------------------------------------------------------------- */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* -------------------------------------------------------------------------- */
  /* 2. MENÚ MÓVIL TOGGLE                                                       */
  /* -------------------------------------------------------------------------- */
  if (menuToggleBtn && mobileMenu) {
    menuToggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      const icon = menuToggleBtn.querySelector('i');
      if (icon) {
        if (mobileMenu.classList.contains('active')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = menuToggleBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 3. RENDERIZADO DINÁMICO DE PROYECTOS                                       */
  /* -------------------------------------------------------------------------- */
  function renderProjects(filterCategory = 'todos') {
    if (!projectsGrid || typeof PROJECTS_DATA === 'undefined') return;

    projectsGrid.innerHTML = '';

    const filtered = filterCategory === 'todos' 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === filterCategory);

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <i class="fas fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent-cyan);"></i>
          <p>No se encontraron proyectos en esta categoría por el momento.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);

      const techBadges = project.technologies
        .slice(0, 3)
        .map(t => `<span class="tech-tag">${t}</span>`)
        .join('');

      card.innerHTML = `
        <div class="project-preview">
          <div class="project-type-badge ${project.badgeClass}">${project.typeLabel}</div>
          <div class="project-img-wrapper">
            <img src="${project.image}" alt="${project.title}" loading="lazy" />
          </div>
        </div>
        <div class="project-info">
          <div class="project-category">${project.categoryLabel}</div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.shortDescription}</p>
          <div class="project-techs">${techBadges}</div>
          <button class="project-card-btn js-open-modal" data-id="${project.id}">
            <span>Ver Proyecto</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // Asignar listeners a los botones de "Ver Proyecto"
    document.querySelectorAll('.js-open-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projId = e.currentTarget.getAttribute('data-id');
        openProjectModal(projId);
      });
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 4. FILTRADO DE PROYECTOS POR PESTAÑAS                                      */
  /* -------------------------------------------------------------------------- */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });

  /* -------------------------------------------------------------------------- */
  /* 5. MODAL INTERACTIVO DE DETALLE DE PROYECTO                                */
  /* -------------------------------------------------------------------------- */
  function openProjectModal(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    const featureItems = project.features
      .map(f => `
        <div class="modal-feature-item">
          <i class="fas fa-check-circle" style="color: var(--accent-cyan);"></i>
          <span>${f}</span>
        </div>
      `).join('');

    const statsItems = project.stats
      .map(s => `
        <div class="modal-stat-card">
          <div class="modal-stat-value">${s.value}</div>
          <div class="modal-stat-label">${s.label}</div>
        </div>
      `).join('');

    const techTags = project.technologies
      .map(t => `<span class="tech-tag" style="padding: 0.3rem 0.8rem; font-size: 0.85rem;">${t}</span>`)
      .join('');

    const demoActionBtn = project.demoUrl && project.demoUrl !== '#' 
      ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fas fa-external-link-alt"></i> Visitar Sitio en Vivo
         </a>`
      : `<a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola MA DIGITAL, me interesa ver una demostración en vivo del proyecto ${project.title}`)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fab fa-whatsapp"></i> Solicitar Demo Interactiva
         </a>`;

    modalBody.innerHTML = `
      <div class="modal-header-info">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
          <span style="color: var(--accent-cyan); font-weight: 700; font-size: 0.85rem; text-transform: uppercase;">
            ${project.categoryLabel}
          </span>
          <span class="project-type-badge ${project.badgeClass}">${project.typeLabel}</span>
        </div>
        <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">${project.title}</h2>
        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.6;">${project.fullDescription}</p>
      </div>

      <div class="browser-window" style="margin-bottom: 2rem;">
        <div class="browser-bar">
          <div class="dot dot-red"></div>
          <div class="dot dot-yellow"></div>
          <div class="dot dot-green"></div>
          <div class="browser-url">
            <i class="fas fa-lock" style="color: var(--accent-cyan);"></i>
            <span>${project.urlBarText}</span>
          </div>
        </div>
        <div class="modal-img-container" style="margin-bottom: 0; border: none;">
          <img src="${project.image}" alt="${project.title}" />
        </div>
      </div>

      <div class="modal-stats-grid">
        ${statsItems}
      </div>

      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.8rem; color: var(--text-main);">
        Funcionalidades & Características Clave:
      </h4>
      <div class="modal-features-list">
        ${featureItems}
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.8rem; color: var(--text-main);">
          Tecnologías Utilizadas:
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${techTags}
        </div>
      </div>

      <div style="display: flex; align-items: center; justify-content: flex-end; gap: 1rem; flex-wrap: wrap; pt-1rem; border-top: 1px solid var(--border-light);">
        <button class="btn btn-secondary" id="js-close-modal-inner">Cerrar</button>
        ${demoActionBtn}
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Listener para el botón cerrar dentro del modal
    document.getElementById('js-close-modal-inner')?.addEventListener('click', closeModal);
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Inicializar renderizado de proyectos
  renderProjects('todos');

  /* -------------------------------------------------------------------------- */
  /* 6. CARRUSEL ROTATIVO DE PORTADA (HERO SLIDESHOW)                           */
  /* -------------------------------------------------------------------------- */
  const heroSlides = [
    { img: 'assets/images/furia_fuego.png', url: 'furiayfuego.com' },
    { img: 'assets/images/lumira.png', url: 'lumira-beauuty.vercel.app' },
    { img: 'assets/images/ms_boutique.png', url: 'msboutiqueshop.shop' },
    { img: 'assets/images/sneakers.png', url: 'sneakers-shop.madigital.app' },
    { img: 'assets/images/pet_shop.png', url: 'petlovers-demo.madigital.app' }
  ];

  const heroImg = document.getElementById('hero-browser-img');
  const heroUrl = document.getElementById('hero-browser-url');
  const heroDotsContainer = document.getElementById('hero-slideshow-dots');

  if (heroImg && heroUrl) {
    let currentSlide = 0;

    // Renderizar puntos indicadores
    if (heroDotsContainer) {
      heroDotsContainer.innerHTML = heroSlides.map((_, idx) => `
        <span class="hero-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
      `).join('');

      heroDotsContainer.querySelectorAll('.hero-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
          const idx = parseInt(e.target.getAttribute('data-index'), 10);
          goToSlide(idx);
        });
      });
    }

    function goToSlide(index) {
      currentSlide = index;
      heroImg.style.opacity = '0';
      heroImg.style.transform = 'scale(0.97)';

      setTimeout(() => {
        heroImg.src = heroSlides[currentSlide].img;
        heroUrl.textContent = heroSlides[currentSlide].url;
        heroImg.style.opacity = '1';
        heroImg.style.transform = 'scale(1)';

        // Actualizar estados activos de los puntos
        if (heroDotsContainer) {
          heroDotsContainer.querySelectorAll('.hero-dot').forEach((d, i) => {
            d.classList.toggle('active', i === currentSlide);
          });
        }
      }, 300);
    }

    // Rotación automática cada 3.5 segundos
    setInterval(() => {
      const nextIndex = (currentSlide + 1) % heroSlides.length;
      goToSlide(nextIndex);
    }, 3500);
  }
});
