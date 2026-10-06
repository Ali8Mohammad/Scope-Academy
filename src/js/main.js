import "./../css/tokens.css";
import "./../css/reset.css";
import "./../css/base.css";
import "./../css/layout.css";
import "./../css/motion.css";
import "./../css/components/buttons.css";
import "./../css/components/cards.css";
import "./../css/components/forms.css";
import "./../css/components/modal.css";
import "./../css/components/specialties.css";
import "./../css/components/trainers.css";
import "./../css/components/partners.css";
import "./../css/components/about.css";
import "./../css/components/faq.css";
import "./../css/sections/hero.css";
import "./../css/sections/sections.css";
import "./../css/sections/footer.css";

import { siteConfig } from "./config/site.js";
import { specialties } from "./data/specialties.js";
import { trainers } from "./data/trainers.js";
import { partners } from "./data/partners.js";
import { aboutCards } from "./data/about.js";
import { faqs } from "./data/faq.js";
import {
  createAboutCard,
  createFaqItem,
  createPartnerCard,
  createTrainerCard,
} from "./components/cards.js";
import { initNavigation } from "./modules/navigation.js";
import { initContactForm } from "./modules/form-validation.js";
import { initCinema } from "./modules/cinema.js";
import { initTrainersCarousel } from "./modules/trainers-carousel.js";
import { initTrainerModal } from "./modules/trainer-modal.js";
import { initSpecialtiesMore } from "./modules/specialties.js";
import { initFaq } from "./modules/faq.js";

function render(selector, data, factory) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.replaceChildren(...data.map(factory));
}

function init() {
  initSpecialtiesMore(specialties);
  render("[data-trainers-list]", trainers, createTrainerCard);
  render("[data-partners-list]", partners, createPartnerCard);
  render("[data-about-list]", aboutCards, createAboutCard);
  render("[data-faq-list]", faqs, createFaqItem);

  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = siteConfig.year;

  initNavigation();
  initContactForm();
  initTrainersCarousel();
  initTrainerModal(trainers);
  initFaq();
  initCinema();
}

init();
