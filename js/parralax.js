document.addEventListener("DOMContentLoaded", function () {
    const parallaxImage = document.querySelector('.parallax-image');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const blurAmount = Math.min(scrollPosition / 50, 50);

        parallaxImage.style.filter = `blur(${blurAmount}px)`;
    });
});
