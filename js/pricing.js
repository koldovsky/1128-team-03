    const carouselContainer = document.querySelector(".pricing__carousel-wrapper");
    const carouselInnerContainer = document.querySelector(".pricing__carousel-inner");
    const buttonLeft = document.querySelector(".pricing__button-left");
    const buttonRight = document.querySelector(".pricing__button-right");
    const indicators = document.querySelectorAll(".pricing__indicator");

    let currentSlide = 0;

    function updateCarousel() {
      const slideWidth = carouselInnerContainer.offsetWidth;
      const newTranslateX = -currentSlide * slideWidth;
      carouselContainer.style.transform = `translateX(${newTranslateX}px)`;
      updateIndicators();
    }

    function updateIndicators() {
      indicators.forEach((indicator, index) => {
        indicator.checked = index === currentSlide;
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % 3;
      updateCarousel();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + 3) % 3;
      updateCarousel();
    }

    buttonRight.addEventListener("click", nextSlide);
    buttonLeft.addEventListener("click", prevSlide);

    // Optional: Add indicator click event listeners
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentSlide = index;
        updateCarousel();
      });
    });