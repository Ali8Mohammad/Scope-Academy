export function initTrainerModal(trainers) {
  const dialog = document.querySelector("[data-trainer-modal]");
  const content = document.querySelector("[data-modal-content]");
  const closeBtn = document.querySelector("[data-modal-close]");
  if (!dialog || !content || !closeBtn) return;

  const open = (trainer) => {
    content.innerHTML = `
      <div class="trainer-modal__media">
        <img src="${trainer.image}" alt="${trainer.name}" />
      </div>
      <div class="trainer-modal__info">
        <span class="trainer-modal__badge"></span>
        <h3 class="trainer-modal__name"></h3>
        <p class="trainer-modal__title"></p>
        <p class="trainer-modal__bio"></p>
        <h4>المهارات</h4>
        <ul class="trainer-modal__skills"></ul>
        <h4>المؤهلات والشهادات</h4>
        <ul class="trainer-modal__quals"></ul>
        <div class="trainer-modal__social" aria-label="حسابات المدرب">
          <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      <button class="button button--primary trainer-modal__back" type="button" data-modal-close>رجوع</button>
    `;

    content.querySelector(".trainer-modal__badge").textContent = trainer.specialty;
    content.querySelector(".trainer-modal__name").textContent = trainer.name;
    content.querySelector(".trainer-modal__title").textContent = trainer.professionalTitle;
    content.querySelector(".trainer-modal__bio").textContent = trainer.biography;

    const skills = content.querySelector(".trainer-modal__skills");
    (trainer.skills || []).forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      skills.appendChild(li);
    });

    const quals = content.querySelector(".trainer-modal__quals");
    (trainer.qualifications || []).forEach((q) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong></strong><span></span><em></em>`;
      li.querySelector("strong").textContent = q.title;
      li.querySelector("span").textContent = q.description;
      li.querySelector("em").textContent = q.year;
      quals.appendChild(li);
    });

    content.querySelectorAll("[data-modal-close]").forEach((btn) => {
      btn.addEventListener("click", () => dialog.close());
    });

    if (typeof dialog.showModal === "function") dialog.showModal();
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-trainer-id]");
    if (!trigger) return;
    const trainer = trainers.find((item) => item.id === trigger.dataset.trainerId);
    if (trainer) open(trainer);
  });

  closeBtn.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}
