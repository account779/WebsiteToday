// Fade-in animaties
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.3}s`;
  });
});

// Reviews carrousel (optioneel)
const reviews = document.querySelectorAll(".reviews-grid .review");
if (reviews.length > 0) {
  let currentReview = 0;
  reviews.forEach((r, i) => i !== 0 ? r.style.display = "none" : r.style.display = "block");

  setInterval(() => {
    reviews[currentReview].style.display = "none";
    currentReview = (currentReview + 1) % reviews.length;
    reviews[currentReview].style.display = "block";
  }, 5000);
}
