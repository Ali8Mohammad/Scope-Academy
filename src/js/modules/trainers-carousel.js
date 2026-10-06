export function initTrainersCarousel() {
  const track = document.querySelector("[data-trainers-list]");
  const viewport = document.querySelector(".trainers__viewport");
  const prev = document.querySelector("[data-trainers-prev]");
  const next = document.querySelector("[data-trainers-next]");
  if (!track || !viewport || !prev || !next) return;

  const scrollByCard = (direction) => {
    const card = track.querySelector(".trainer-card");
    const amount = card ? card.getBoundingClientRect().width + 24 : 320;
    viewport.scrollBy({ left: direction * amount * -1, behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollByCard(1));
  next.addEventListener("click", () => scrollByCard(-1));
}
