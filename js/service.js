document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');
    }
  
    document.querySelector('.left-arrow').addEventListener('click', function() {
      currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      showImage(currentIndex);
    });
  
    document.querySelector('.right-arrow').addEventListener('click', function() {
      currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      showImage(currentIndex);
    });
  
    // Ініціалізувати перше зображення
    showImage(currentIndex);
  });