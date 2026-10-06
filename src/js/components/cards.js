export function createSpecialtyCard(item) {
  const article = document.createElement("article");
  article.className = "specialty-card";
  article.dataset.reveal = "card";

  article.innerHTML = `
    <div class="specialty-card__image-wrapper">
      <img
        class="specialty-card__image"
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
      />
      <div class="specialty-card__overlay"></div>
      <span class="specialty-card__badge">${item.trainersCount} مدربين</span>
      <h3 class="specialty-card__title"></h3>
    </div>
    <button
      class="specialty-card__button"
      type="button"
      data-specialty-id="${item.id}"
    >
      تواصل مع المشرف
    </button>
  `;

  article.querySelector(".specialty-card__title").textContent = item.name;
  return article;
}

export function createTrainerCard(item) {
  const article = document.createElement("article");
  article.className = "trainer-card";
  article.dataset.reveal = "card";

  article.innerHTML = `
    <div class="trainer-card__image-wrapper">
      <img
        class="trainer-card__image"
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
      />
      <span class="trainer-card__specialty"></span>
    </div>
    <div class="trainer-card__body">
      <h3 class="trainer-card__name"></h3>
      <p class="trainer-card__description"></p>
      <button class="button button--primary trainer-card__button" type="button" data-trainer-id="${item.id}">
        عرض الملف الشخصي
      </button>
    </div>
  `;

  article.querySelector(".trainer-card__specialty").textContent = item.specialty ?? "";
  article.querySelector(".trainer-card__name").textContent = item.name;
  article.querySelector(".trainer-card__description").textContent =
    item.professionalTitle ?? "";

  return article;
}

export function createPartnerCard(item) {
  const article = document.createElement("article");
  article.className = "partner-card";
  article.dataset.reveal = "card";

  article.innerHTML = `
    <div class="partner-card__image-wrapper">
      <img
        class="partner-card__image"
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
      />
      <span class="partner-card__tag"></span>
    </div>
    <div class="partner-card__body">
      <h3 class="partner-card__name"></h3>
      <p class="partner-card__description"></p>
    </div>
  `;

  article.querySelector(".partner-card__tag").textContent = item.tag ?? "";
  article.querySelector(".partner-card__name").textContent = item.name;
  article.querySelector(".partner-card__description").textContent =
    item.description ?? "";

  return article;
}

export function createAboutCard(item) {
  const article = document.createElement("article");
  article.className = "about-card";
  article.dataset.reveal = "card";

  article.innerHTML = `
    <div class="about-card__icon" aria-hidden="true">
      <i class="fa-solid ${item.icon}"></i>
    </div>
    <h3 class="about-card__title"></h3>
    <p class="about-card__body"></p>
  `;

  article.querySelector(".about-card__title").textContent = item.title;
  article.querySelector(".about-card__body").textContent = item.body;
  return article;
}

export function createFaqItem(item) {
  const details = document.createElement("details");
  details.className = "faq-item";
  details.dataset.reveal = "card";

  details.innerHTML = `
    <summary class="faq-item__question"></summary>
    <p class="faq-item__answer"></p>
  `;

  details.querySelector(".faq-item__question").textContent = item.question;
  details.querySelector(".faq-item__answer").textContent = item.answer;
  return details;
}
