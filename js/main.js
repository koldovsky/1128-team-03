document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn-scroll-up');
  
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollPosition > 100) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    };
  
    const handlerScrollUp = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    btn.addEventListener('click', handlerScrollUp);
  });
  