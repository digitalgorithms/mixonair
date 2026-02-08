const topbars = document.querySelectorAll(".topbar");

topbars.forEach((topbar) => {
  const toggle = topbar.querySelector("[data-header-toggle]");
  const nav = topbar.querySelector("[data-header-nav]");

  if (!toggle || !nav) {
    return;
  }

  const closeMenu = () => {
    topbar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  topbar.addEventListener("click", (event) => {
    const isLink = event.target.closest(".header__nav a");
    if (isLink) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });
});
