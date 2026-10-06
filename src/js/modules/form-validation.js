export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    ["name", "phone", "message"].forEach((name) => {
      const field = form.elements[name];
      const error = form.querySelector(`[data-error-for="${name}"]`);
      const empty = !String(field.value).trim();
      error.textContent = empty ? "هذا الحقل مطلوب." : "";
      field.setAttribute("aria-invalid", String(empty));
      valid &&= !empty;
    });
    status.textContent = valid ? "تم التحقق من البيانات بنجاح." : "يرجى مراجعة الحقول المطلوبة.";
  });
}
