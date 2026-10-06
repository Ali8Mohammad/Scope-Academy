export function initNavigation() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  if (!toggle || !menu) return;

  const setState = (open) => {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
  };

  toggle.addEventListener("click", () => setState(!menu.classList.contains("is-open")));
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setState(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) setState(false);
  });
}
