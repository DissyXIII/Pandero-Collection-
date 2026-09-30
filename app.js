(function () {
  "use strict";

  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const brandFilter = document.getElementById("brandFilter");
  const colorFilters = document.getElementById("colorFilters");
  const resultsCount = document.getElementById("resultsCount");
  const emptyState = document.getElementById("emptyState");
  const resetBtn = document.getElementById("resetFilters");
  const clearEmpty = document.getElementById("clearEmpty");
  const modal = document.getElementById("productModal");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");

  let activeColor = "";

  /* ---- Helpers ---- */
  const colorMap = {
    blanco: "#f1f5f9",
    negro: "#1e293b",
    rojo: "#dc2626",
    azul: "#2563eb",
    verde: "#16a34a",
    beige: "#d4c4a8",
    rosa: "#ec4899",
    gris: "#94a3b8",
    dorado: "linear-gradient(135deg, #c9a227, #e0c060)"
  };

  function whatsappLink(productName, brand) {
    const text = encodeURIComponent(
      `Hola Pandero Collection 👋\nQuiero información sobre:\n*${brand} ${productName}*`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  /* ---- Populate brand select ---- */
  function initBrands() {
    const brands = [...new Set(PRODUCTS.map((p) => p.brand))].sort();
    brands.forEach((b) => {
      const opt = document.createElement("option");
      opt.value = b;
      opt.textContent = b;
      brandFilter.appendChild(opt);
    });
  }

  /* ---- Color filter buttons ---- */
  function initColors() {
    const colors = [...new Set(PRODUCTS.flatMap((p) => p.colors))];
    colors.forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "color-btn";
      btn.dataset.color = c;
      btn.title = c.charAt(0).toUpperCase() + c.slice(1);
      btn.style.background = colorMap[c] || "#666";
      btn.addEventListener("click", () => {
        if (activeColor === c) {
          activeColor = "";
          btn.classList.remove("active");
        } else {
          activeColor = c;
          document.querySelectorAll(".color-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
        }
        render();
      });
      colorFilters.appendChild(btn);
    });
  }

  /* ---- Filter logic ---- */
  function getFiltered() {
    const q = searchInput.value.trim().toLowerCase();
    const brand = brandFilter.value;

    return PRODUCTS.filter((p) => {
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (p.category && p.category.toLowerCase().includes(q));
      const matchBrand = !brand || p.brand === brand;
      const matchColor = !activeColor || p.colors.includes(activeColor);
      return matchSearch && matchBrand && matchColor;
    });
  }

  /* ---- Render products ---- */
  function render() {
    const items = getFiltered();
    resultsCount.textContent = `${items.length} producto${items.length !== 1 ? "s" : ""}`;

    grid.innerHTML = "";
    emptyState.hidden = items.length > 0;

    items.forEach((p) => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-image">
          ${p.featured ? '<span class="product-badge">Destacado</span>' : ""}
          <img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy" />
        </div>
        <div class="product-info">
          <span class="product-brand">${p.brand}</span>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-colors">
            ${p.colors
              .map(
                (c) =>
                  `<span class="product-color-dot" style="background:${colorMap[c] || "#666"}" title="${c}"></span>`
              )
              .join("")}
          </div>
          <div class="product-wa">
            <a href="${whatsappLink(p.name, p.brand)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      `;
      card.addEventListener("click", () => openModal(p));
      grid.appendChild(card);
    });
  }

  /* ---- Modal ---- */
  function openModal(p) {
    modalBody.innerHTML = `
      <div class="modal-image">
        <img src="${p.image}" alt="${p.brand} ${p.name}" />
      </div>
      <p class="modal-brand">${p.brand}</p>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-tags">
        ${p.colors.map((c) => `<span class="modal-tag">${c}</span>`).join("")}
        ${p.category ? `<span class="modal-tag">${p.category}</span>` : ""}
      </div>
      <a class="modal-wa" href="${whatsappLink(p.name, p.brand)}" target="_blank" rel="noopener">
        Consultar este modelo por WhatsApp
      </a>
    `;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  /* ---- Events ---- */
  searchInput.addEventListener("input", render);
  brandFilter.addEventListener("change", render);
  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    brandFilter.value = "";
    activeColor = "";
    document.querySelectorAll(".color-btn").forEach((b) => b.classList.remove("active"));
    render();
  });
  clearEmpty.addEventListener("click", () => {
    searchInput.value = "";
    brandFilter.value = "";
    activeColor = "";
    document.querySelectorAll(".color-btn").forEach((b) => b.classList.remove("active"));
    render();
  });
  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---- Init ---- */
  initBrands();
  initColors();
  render();
})();
