(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const projectsGrid = document.getElementById("projectsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const hardSkillsList = document.getElementById("hardSkillsList");
  const englishSkillsList = document.getElementById("englishSkillsList");
  const microcampTopics = document.getElementById("microcampTopics");

  const modalBackdrop = document.getElementById("projectModal");
  const modalClose = document.getElementById("modalClose");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalMainImage = document.getElementById("modalMainImage");
  const modalCaption = document.getElementById("modalCaption");
  const modalCounter = document.getElementById("modalCounter");
  const modalThumbs = document.getElementById("modalThumbs");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");
  const modalDescription = document.getElementById("modalDescription");
  const modalDeliverables = document.getElementById("modalDeliverables");
  const modalTypography = document.getElementById("modalTypography");
  const modalPalette = document.getElementById("modalPalette");
  const toast = document.getElementById("toast");

  let activeProject = null;
  let activeImageIndex = 0;
  let toastTimer = null;

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("karam-portfolio-theme", theme);
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    const isLight = theme === "light";
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Alternar para tema escuro" : "Alternar para tema claro"
    );
    themeToggle.innerHTML = isLight
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  }

  const savedTheme = localStorage.getItem("karam-portfolio-theme") || "dark";
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", function () {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light");
  });

  menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  function renderRatingItems(container, items) {
    container.innerHTML = items
      .map(function (item) {
        let segments = "";
        for (let i = 1; i <= 5; i += 1) {
          segments += '<span class="level-seg' + (i <= item.level ? " is-filled" : "") + '"></span>';
        }
        return (
          '<div class="rating-row">' +
          '<div class="rating-row__head">' +
          '<span class="rating-row__name">' + item.name + "</span>" +
          '<span class="rating-row__level">' + item.label + "</span>" +
          "</div>" +
          '<div class="level-segments" aria-label="' + item.name + " nível " + item.level + ' de 5">' +
          segments +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderMicrocampTopics() {
    microcampTopics.innerHTML = PORTFOLIO_DATA.microcampTopics
      .map(function (topic) {
        return '<span class="pill-tag">' + topic + "</span>";
      })
      .join("");
  }

  function renderProjects(filter) {
    const filtered = PORTFOLIO_DATA.projects.filter(function (project) {
      return filter === "all" || project.category === filter;
    });

    projectsGrid.innerHTML = filtered
      .map(function (project) {
        const cover = project.images[0];
        const total = project.images.length;
        const countLabel = total > 1 ? total + " pranchas" : "1 prancha";
        const imgClass =
          project.coverPosition === "top"
            ? "project-card__img project-card__img--top"
            : "project-card__img";
        const swatches = project.palette
          .slice(0, 4)
          .map(function (hex) {
            return '<span class="swatch-dot" style="background-color:' + hex + '"></span>';
          })
          .join("");

        return (
          '<article class="project-card" tabindex="0" role="button" data-project-id="' + project.id + '" aria-label="Abrir detalhes do projeto ' + project.title + '">' +
          '<div class="project-card__media">' +
          '<img class="' + imgClass + '" src="' + cover.src + '" alt="' + cover.caption + '" loading="lazy">' +
          '<span class="project-card__count">' + countLabel + "</span>" +
          "</div>" +
          '<div class="project-card__body">' +
          '<span class="project-card__cat">' + project.categoryLabel + "</span>" +
          '<h3 class="project-card__title">' + project.title + "</h3>" +
          '<p class="project-card__summary">' + project.summary + "</p>" +
          '<div class="project-card__footer">' +
          '<span class="swatch-row">' + swatches + "</span>" +
          "<span>Ver projeto &rarr;</span>" +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function openProjectModal(projectId) {
    const found = PORTFOLIO_DATA.projects.find(function (item) {
      return item.id === projectId;
    });
    if (!found) {
      return;
    }

    activeProject = found;
    activeImageIndex = 0;

    modalCategory.textContent = found.categoryLabel;
    modalTitle.textContent = found.title;
    modalDescription.textContent = found.description;
    modalTypography.textContent = found.typography;

    modalDeliverables.innerHTML = found.deliverables
      .map(function (item) {
        return "<li>" + item + "</li>";
      })
      .join("");

    modalPalette.innerHTML = found.palette
      .map(function (hex) {
        return (
          '<button type="button" class="palette-chip" data-hex="' + hex + '" aria-label="Copiar cor ' + hex + '">' +
          '<span class="palette-chip__color" style="background-color:' + hex + '"></span>' +
          "<span>" + hex + "</span>" +
          "</button>"
        );
      })
      .join("");

    renderModalThumbs();
    updateModalStage();

    modalBackdrop.classList.add("is-open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalClose.focus();
  }

  function renderModalThumbs() {
    if (!activeProject) {
      return;
    }
    if (activeProject.images.length <= 1) {
      modalThumbs.innerHTML = "";
      return;
    }
    modalThumbs.innerHTML = activeProject.images
      .map(function (img, idx) {
        return (
          '<button type="button" class="gallery-thumb' + (idx === activeImageIndex ? " is-active" : "") + '" data-thumb-index="' + idx + '" aria-label="Exibir imagem ' + (idx + 1) + '">' +
          '<img src="' + img.src + '" alt="' + img.caption + '">' +
          "</button>"
        );
      })
      .join("");
  }

  function updateModalStage() {
    if (!activeProject) {
      return;
    }
    const current = activeProject.images[activeImageIndex];
    const total = activeProject.images.length;

    modalMainImage.src = current.src;
    modalMainImage.alt = current.caption;
    modalCaption.textContent = current.caption;
    modalCounter.textContent = activeImageIndex + 1 + " / " + total;

    const single = total <= 1;
    modalPrev.classList.toggle("is-hidden", single);
    modalNext.classList.toggle("is-hidden", single);

    const thumbs = modalThumbs.querySelectorAll(".gallery-thumb");
    thumbs.forEach(function (thumb, idx) {
      thumb.classList.toggle("is-active", idx === activeImageIndex);
    });
  }

  function stepModalImage(delta) {
    if (!activeProject || activeProject.images.length <= 1) {
      return;
    }
    const total = activeProject.images.length;
    activeImageIndex = (activeImageIndex + delta + total) % total;
    updateModalStage();
  }

  function closeProjectModal() {
    modalBackdrop.classList.remove("is-open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    activeProject = null;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2000);
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (item) {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });

  projectsGrid.addEventListener("click", function (event) {
    const card = event.target.closest(".project-card");
    if (card) {
      openProjectModal(card.getAttribute("data-project-id"));
    }
  });

  projectsGrid.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      const card = event.target.closest(".project-card");
      if (card) {
        event.preventDefault();
        openProjectModal(card.getAttribute("data-project-id"));
      }
    }
  });

  modalThumbs.addEventListener("click", function (event) {
    const thumb = event.target.closest(".gallery-thumb");
    if (thumb) {
      activeImageIndex = Number(thumb.getAttribute("data-thumb-index"));
      updateModalStage();
    }
  });

  modalPalette.addEventListener("click", function (event) {
    const chip = event.target.closest(".palette-chip");
    if (!chip) {
      return;
    }
    const hex = chip.getAttribute("data-hex");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(hex).then(function () {
        showToast("Cor " + hex + " copiada");
      });
    } else {
      showToast("Cor " + hex);
    }
  });

  modalPrev.addEventListener("click", function () {
    stepModalImage(-1);
  });

  modalNext.addEventListener("click", function () {
    stepModalImage(1);
  });

  modalClose.addEventListener("click", closeProjectModal);

  modalBackdrop.addEventListener("click", function (event) {
    if (event.target === modalBackdrop) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (!activeProject) {
      return;
    }
    if (event.key === "Escape") {
      closeProjectModal();
    } else if (event.key === "ArrowLeft") {
      stepModalImage(-1);
    } else if (event.key === "ArrowRight") {
      stepModalImage(1);
    }
  });

  const sections = document.querySelectorAll("main section[id]");
  const navObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach(function (section) {
    navObserver.observe(section);
  });

  const revealTargets = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach(function (target) {
    revealObserver.observe(target);
  });

  renderMicrocampTopics();
  renderRatingItems(hardSkillsList, PORTFOLIO_DATA.hardSkills);
  renderRatingItems(englishSkillsList, PORTFOLIO_DATA.englishSkills);
  renderProjects("ui-ux");
})();
