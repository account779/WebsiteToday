// Fade-in animatie bij scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in");
  const triggerBottom = window.innerHeight * 0.9;
  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add("visible");
  });
});

// Automatische review carrousel
const reviews = document.querySelectorAll(".reviews-grid .review");
let currentReview = 0;
reviews.forEach((r,i)=>i!==0?r.style.display="none":r.style.display="block");
setInterval(() => {
  reviews[currentReview].style.display="none";
  currentReview = (currentReview+1) % reviews.length;
  reviews[currentReview].style.display="block";
}, 5000);
