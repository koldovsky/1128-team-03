// button UP
const btn = document.querySelector('.btn-scroll-up');

const handleScroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        setShowButton(true);
    } else {
        setShowButton(false);
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
