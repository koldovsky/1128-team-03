const catSurprise = document.querySelector('.cat-surprise');

function catSurprisee() {
    catSurprise.style.top = (Math.floor(Math.random() * window.innerHeight)) + "px";
    catSurprise.style.left = window.innerWidth * (Math.random() < 0.5) + "px";
    console.log(Math.random() < 0.5);
}

setInterval(catSurprisee, 5000);

catSurprise.addEventListener(
    "mouseenter",
    () => {
        catSurprisee();
    }
)

