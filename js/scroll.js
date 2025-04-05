window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    // Add shadow if scrolled more than 50 pixels
    if (window.scrollY > 50) {
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('shadow');
    }
  });