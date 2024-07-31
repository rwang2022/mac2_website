// function adjustBodyPadding() {
//   const navbar = document.getElementById('navbar');
//   const navbarHeight = navbar.offsetHeight;
//   document.body.style.paddingTop = `${navbarHeight+2}px`;
// }

// window.onload = adjustBodyPadding;
// window.onresize = adjustBodyPadding;

let currentSlide = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});


document.addEventListener('DOMContentLoaded', () => {
  const carouselItems = document.querySelectorAll('.carousel-item');
  let maxHeight = 0;

  carouselItems.forEach(item => {
      if (item.offsetHeight > maxHeight) {
          maxHeight = item.offsetHeight;
      }
  });

  carouselItems.forEach(item => {
      item.style.height = `${maxHeight}px`;
  });

  showSlide(currentSlide); // Ensure the first slide is shown correctly
  window.addEventListener('resize', () => {
      // Recalculate heights on resize
      maxHeight = 0;
      carouselItems.forEach(item => {
          item.style.height = 'auto'; // Reset height to auto for recalculating
          if (item.offsetHeight > maxHeight) {
              maxHeight = item.offsetHeight;
          }
      });
      carouselItems.forEach(item => {
          item.style.height = `${maxHeight}px`;
      });
      showSlide(currentSlide); // Ensure the current slide is shown correctly after resize
  });
});
