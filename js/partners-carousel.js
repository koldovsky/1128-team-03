const slides = [
  '<div class="partners__carousel-slide"><img src="img/partners-carousel-royalcanin.webp" alt="Royal Canin"></div>',
  '<div class="partners__carousel-slide"><img src="img/partners-carousel-animalplanet.webp" alt="Animal Planet"></div>',
  '<div class="partners__carousel-slide"><img src="img/partners-carousel-iams.webp" alt="IAMS"></div>',
  '<div class="partners__carousel-slide"><img src="img/partners-carousel-friskies.webp" alt="Friskies"></div>',
  '<div class="partners__carousel-slide"><img src="img/partners-carousel-kitekat.webp" alt="KITEKAT"></div>',
];

let currentSlideIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".partners__carousel-slides");
  slideContainer.innerHTML = slides[currentSlideIdx];
  if (window.matchMedia("(min-width: 468px)").matches) {
    const secondSlideIdx =
      currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width: 770px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 > slides.length - 1 ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
      if (window.matchMedia("(min-width: 990px)").matches) {
        const fourthSlideIdx =
          thirdSlideIdx + 1 > slides.length - 1 ? 0 : thirdSlideIdx + 1;
        const fifthSlideIdx =
          fourthSlideIdx + 1 > slides.length - 1 ? 0 : fourthSlideIdx + 1;
        slideContainer.innerHTML += slides[fourthSlideIdx];
        slideContainer.innerHTML += slides[fifthSlideIdx];
      }
    }
  }
}

function nextSlide() {
  currentSlideIdx =
    currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
  renderSlide();
}

function prevSlide() {
  currentSlideIdx =
    currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
  renderSlide();
}

renderSlide();

const buttonNext = document.querySelector(".partners__carousel-btn-next");
buttonNext.addEventListener("click", nextSlide);

const buttonPrev = document.querySelector(".partners__carousel-btn-prev");
buttonPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");

document
  .querySelectorAll(".partners__carousel-slide")
  .forEach((slide, index) => {
    slide.addEventListener("click", () => {
      // Set the modal content to the clicked slide's image
      modalImg.src = slides[index].match(/src="(.*?)"/)[1];
      modal.style.display = "block"; // Show the modal
    });
  });

document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
