const randomColor = document.querySelector('.randomColorText');

function randomColorText() {
    randomColor.style.color = '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);
}

setInterval(randomColorText, 1000);


/*const birdSound = new Audio('audio/great-site.ogg');*/
function soundClick() {
    const audio = new Audio(); // Создаём новый элемент Audio
    audio.src = "audio/great-site"; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем

    /*birdSound.loop = false;
      birdSound.play();*/

    /*let birdSound = new Audio('audio/great-site.ogg');
      birdSound.loop = false;
      birdSound.play();*/

    /*let myAudio = new Audio('audio/great-site.ogg');
      myAudio.loop = true;
      myAudio.play();*/


}
