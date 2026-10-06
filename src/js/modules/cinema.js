const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export function initCinema() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  initScrollProgress();
  if (reduced) {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
    return;
  }
  initReveals();
  initHeroParallax();
}

function initScrollProgress() {
  const bar = document.querySelector("[data-scroll-progress]");
  if (!bar) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${value})`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initReveals() {
  const nodes = [...document.querySelectorAll("[data-reveal]")];
  if (!nodes.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = Number(el.dataset.revealDelay || 0);
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add("is-visible");
        observer.unobserve(el);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  nodes.forEach((el, index) => {
    if (el.dataset.reveal === "card" && !el.dataset.revealDelay) {
      el.dataset.revealDelay = String((index % 6) * 70);
    }
    observer.observe(el);
  });
}

function initHeroParallax() {
  const layer = document.querySelector("[data-parallax-hero]");
  const content = document.querySelector(".hero__content");
  if (!layer) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const hero = document.querySelector(".hero");
      const height = hero ? hero.offsetHeight : window.innerHeight;
      if (y < height) {
        const progress = y / height;
        layer.style.transform = `scale(${1.08 + progress * 0.08}) translate3d(0, ${progress * 12}%, 0)`;
        if (content) {
          content.style.opacity = String(1 - progress * 1.15);
          content.style.transform = `translate3d(0, ${progress * -40}px, 0)`;
        }
      }
      ticking = false;
    });
  };

  layer.style.transition = `transform 80ms ${EASE}`;
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

export function observeNewReveals(root = document) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = [...root.querySelectorAll("[data-reveal]:not(.is-visible)")];
  if (reduced) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  nodes.forEach((el) => observer.observe(el));
}
