export function initFaq() {
  const list = document.querySelector("[data-faq-list]");
  if (!list) return;

  list.addEventListener("toggle", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLDetailsElement) || !target.open) return;
    list.querySelectorAll("details[open]").forEach((item) => {
      if (item !== target) item.open = false;
    });
  });
}
