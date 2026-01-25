gsap.from("section, header", {
  opacity:0,
  y:50,
  duration:1,
  stagger:0.2
});

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelector(".toggle").onclick = () => {
  document.body.classList.toggle("light");
};
