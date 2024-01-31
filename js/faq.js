const slides = [
    '<div><img src="img/faq-slider-dog.webp" alt="photo1"></div>',
    '<div><img src="img/faq-slider-cat.webp" alt="photo2"></div>',
    '<div><img src="img/faq-slider-carrot.webp" alt="photo3"></div>'
];

let slideIdx = 0;

const slideContainer = document.querySelector('.faq__animals-photo-list__items');

function renderSlide() {
    slideContainer.innerHTML = slides[slideIdx];
    if (window.matchMedia('(min-width: 768px)').matches ) {
        const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
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

const btnNext = document.querySelector('.faq__animals-photo-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.faq__animals-photo-previous');
btnPrev.addEventListener('click', prevSlide);

renderSlide();

window.addEventListener('resize', renderSlide);