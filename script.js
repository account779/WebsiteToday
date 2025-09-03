// Fade-in bij scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in");
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
});

// Automatische review carrousel
const reviews = document.querySelectorAll(".reviews-grid .review");
let currentReview = 0;
setInterval(() => {
  reviews.forEach((r, i) => r.style.display = "none");
  reviews[currentReview].style.display = "block";
  currentReview = (currentReview + 1) % reviews.length;
}, 5000);
