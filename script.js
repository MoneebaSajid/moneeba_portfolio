// Carousel Slide Logic
let slides = document.querySelectorAll(".carousel-slide");
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000); // Change image every 4 seconds

// Contact Form Dummy Handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks! Your message has been received.");
  this.reset();
});
function openModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const profileImg = document.querySelector(".profile-container img");

  modal.style.display = "block";
  modalImg.src = profileImg.src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
