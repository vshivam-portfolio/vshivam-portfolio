// Mobile menu
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
hamburger.onclick = () => nav.classList.toggle("active");

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// Reel hover play
document.querySelectorAll(".reel-card video").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
