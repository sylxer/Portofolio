document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  // Get all certificate images
  const certImages = document.querySelectorAll('.card2-img img');
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content img');
  const closeBtn = document.querySelector('.close');

  // Add click event to all certificate images
  certImages.forEach(img => {
    img.addEventListener('click', () => {
      modal.classList.add('show');
      modalImg.src = img.src;
    });
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});
