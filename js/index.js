document.addEventListener("partialsLoaded", () => {
  import("./footer.js");
  import("./contacts.js");
  import("./header.js");
  import("./cat-surprise.js");
  import("./workers-counter.js");
  import("./dont-click.js");
});

function soundClick() {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = "audio/great-site.ogg"; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
