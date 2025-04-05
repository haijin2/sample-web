document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
  
    function showSlide(n) {
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;
  
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
  
      slides[slideIndex - 1].classList.add('active');
      dots[slideIndex - 1].classList.add('active');
    }

    window.plusSlides = function(n) {
      showSlide(slideIndex += n);
    };
  
    window.currentSlide = function(n) {
      showSlide(slideIndex = n);
    };
  
    showSlide(slideIndex);
  });
  
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    // Add shadow if scrolled more than 50 pixels
    if (window.scrollY > 50) {
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('shadow');
    }
  });