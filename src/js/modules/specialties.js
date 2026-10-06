import { siteConfig } from "../config/site.js";
import { createSpecialtyCard } from "../components/cards.js";
import { observeNewReveals } from "./cinema.js";

export function initSpecialtiesMore(specialties) {
  const list = document.querySelector("[data-specialties-list]");
  const button = document.querySelector("[data-specialties-more]");
  if (!list || !button) return;

  let expanded = false;
  const initial = siteConfig.specialtiesInitialVisible;

  const render = () => {
    const visible = expanded ? specialties : specialties.slice(0, initial);
    list.replaceChildren(...visible.map(createSpecialtyCard));
    button.textContent = expanded ? "عرض أقل" : "عرض المزيد من التخصصات";
    button.hidden = specialties.length <= initial;
    observeNewReveals(list);
  };

  button.addEventListener("click", () => {
    expanded = !expanded;
    render();
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-specialty-id]");
    if (!trigger) return;
    const contact = document.querySelector("#contact");
    const message = document.querySelector("#message");
    const specialty = specialties.find((item) => item.id === trigger.dataset.specialtyId);
    if (message && specialty) {
      message.value = `أرغب بالتواصل مع مشرف تخصص: ${specialty.name}`;
    }
    contact?.scrollIntoView({ behavior: "smooth" });
  });

  render();
}
