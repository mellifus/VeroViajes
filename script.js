// script.js

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
      if (index >= totalSlides) {
          currentSlide = 0;
      } else if (index < 0) {
          currentSlide = totalSlides - 1;
      } else {
          currentSlide = index;
      }

      const slidesContainer = document.querySelector('.slides');
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Update active dot
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentSlide].classList.add('active');
  }

  // Add event listeners to dots
  dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
          let slideIndex = parseInt(e.target.getAttribute('data-slide'));
          showSlide(slideIndex);
      });
  });

  // Auto-play slides every 5 seconds
  let slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
  }, 5000);

  // Pause auto-play on mouseover
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseover', () => {
      clearInterval(slideInterval);
  });

  carousel.addEventListener('mouseout', () => {
      slideInterval = setInterval(() => {
          showSlide(currentSlide + 1);
      }, 5000);
  });
});

// Existing code...

// Card Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.card-carousel');

  carousels.forEach((carousel) => {
      const slides = carousel.querySelector('.card-slides');
      const slideImages = carousel.querySelectorAll('.card-slide');
      const dots = carousel.querySelectorAll('.card-dot');
      let currentSlide = 0;
      const totalSlides = slideImages.length;

      function showSlide(index) {
          if (index >= totalSlides) {
              currentSlide = 0;
          } else if (index < 0) {
              currentSlide = totalSlides - 1;
          } else {
              currentSlide = index;
          }

          slides.style.transform = `translateX(-${currentSlide * 100}%)`;

          // Update active dot
          dots.forEach(dot => dot.classList.remove('active'));
          dots[currentSlide].classList.add('active');
      }

      // Add event listeners to dots
      dots.forEach((dot) => {
          dot.addEventListener('click', (e) => {
              let slideIndex = parseInt(e.target.getAttribute('data-slide'));
              showSlide(slideIndex);
          });
      });

      // Initialize first slide
      showSlide(0);
  });
});
