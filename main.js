const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburgerClose");
const modal = document.querySelector(".modal");
const footer = document.querySelector(".footer");
const main = document.querySelector(".main");
const hero = document.querySelector(".hero");
const card = document.querySelector(".card");

hamburger.addEventListener("click", () => {
  modal.classList.toggle("modal-opened");
  //   footer.classList.add("hidden");
  //   hero.classList.add("hidden");
  //   card.classList.add("hidden");

  hamburger.classList.add("hidden");
  hamburgerClose.classList.remove("hidden");
  hamburgerClose.classList.add("show");
});

hamburgerClose.addEventListener("click", () => {
  modal.classList.toggle("modal-opened");
  hamburgerClose.classList.remove("show");
  hamburgerClose.classList.add("hidden");
  hamburger.classList.toggle("hidden");
});
