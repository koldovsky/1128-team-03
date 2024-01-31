let factAbout;
let factImg;
async function giveMeFact() {
    const animal = document.querySelector('.facts-choose').value;
    if (animal === "CAT") {
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
        factAbout = await response.json();
        const fact = factAbout.text;
        document.querySelector(".fact-body").innerHTML = fact;
        document.querySelector(".fact-title").innerHTML = "ABOUT CAT:";
        /*img api*/
        const responseImg = await fetch('https://api.thecatapi.com/v1/images/search');
        factImg = await responseImg.json();
        const animalImg = factImg[0]["url"];
        document.querySelector(".img-from-facts").src = animalImg;
    } else {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        factAbout = await response.json();
        const fact = factAbout.data[Math.floor(Math.random() * 10)]['attributes']['description'];
        document.querySelector(".fact-body").innerHTML = fact;
        document.querySelector(".fact-title").innerHTML = "ABOUT DOG:";
        /*img api*/
        const responseImg = await fetch('https://dog.ceo/api/breeds/image/random');
        factImg = await responseImg.json();
        const animalImg = factImg.message;
        document.querySelector(".img-from-facts").src = animalImg;
    }
}
/*https://dog.ceo/api/breeds/image/random*/
const factButton = document.querySelector(".fact-button")
factButton.addEventListener('click', giveMeFact);

function soundClick() {
    const audio = new Audio(); // Создаём новый элемент Audio
    const animal = document.querySelector('.facts-choose').value;
    if (animal === "CAT") {
        audio.src = "audio/cat-say-girl.ogg";
    } else {
        audio.src = "audio/dog-say.ogg";
    }
    audio.autoplay = true;
}
factButton.addEventListener('click', soundClick);