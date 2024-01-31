const randomColor = document.querySelector('.randomColorText');

function randomColorText() {
    randomColor.style.color = '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);
}

setInterval(randomColorText, 1000);

function soundClick() {
    const audio = new Audio(); // Создаём новый элемент Audio
    audio.src = "audio/great-site.ogg"; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

const buttonGreat = document.querySelector('.buttonGreat');
buttonGreat.addEventListener('click', soundClick);