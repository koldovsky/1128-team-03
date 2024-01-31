/*const slides = [
  `
    <article class="pricing__carousel-slide">
            <p class="pricing__price">$50</p>
            <h3 class="pricing__plan-title">Initial Checkup</h3>
            <ul class="pricing__features">
              <li class="pricing__features-checkmark">
                Checkup by a veterinarian
              </li>
              <li class="pricing__features-checkmark">Care recommendations</li>
              <li class="pricing__features-crossmark">Laboratory tests</li>
              <li class="pricing__features-crossmark">Dental care</li>
            </ul>
            <div class="pricing__select-button mt-md-3 mb-md-5">
              <a href="#" class="pricing__select-plan "
                ><span class="pricing__select-bn-content">Select Plan</span
                ><span class="pricing__select-bn-arrow">&rarr;</span>
              </a>
            </div>
    </article>
    `,
  `
<article class="pricing__carousel-slide">
    <p class="pricing__price">$75</p>
    <h3 class="pricing__plan-title">Full Checkup</h3>
    <ul class="pricing__features">
      <li class="pricing__features-checkmark">
        Checkup by a veterinarian
      </li>
      <li class="pricing__features-checkmark">Checkup by a dentist</li>
      <li class="pricing__features-checkmark">Laboratory tests</li>
      <li class="pricing__features-crossmark">Preventive vaccination</li>
    </ul>
    <div class="pricing__select-button">
      <a href="#" class="pricing__select-plan"
        ><span class="pricing__select-bn-content">Select Plan</span
        ><span class="pricing__select-bn-arrow">&rarr;</span>
      </a>
    </div>
  </article> 
  `,
  `
    <article class="pricing__carousel-slide">
            <p class="pricing__price">$100</p>
            <h3 class="pricing__plan-title">Vaccination</h3>
            <ul class="pricing__features">
              <li class="pricing__features-checkmark">3 available features</li>
              <li class="pricing__features-checkmark">10 requests per month</li>
              <li class="pricing__features-checkmark">General support</li>
              <li class="pricing__features-checkmark">Personal consultations</li>
            </ul>
            <div class="pricing__select-button">
              <a href="#" class="pricing__select-plan"
                ><span class="pricing__select-bn-content">Select Plan</span
                ><span class="pricing__select-bn-arrow">&rarr;</span>
              </a>
            </div>
    </article>
    `
];

let slideIdx = 0;

const slideContainer = document.querySelector(".pricing__carousel-inner");

function renderSlide() {
  slideContainer.innerHTML = '';

  slideContainer.innerHTML += slides[slideIdx];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width: 992px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    renderSlide();
}

function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    renderSlide();
}

setInterval(nextSlide, 3000);

const btnNext = document.querySelector(".pricing__button-right");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".pricing__button-left");
btnPrev.addEventListener("click", prevSlide);

renderSlide();

window.addEventListener("resize", renderSlide);*/
