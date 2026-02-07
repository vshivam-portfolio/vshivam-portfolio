// Smooth scroll
document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.scroll)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Image upload preview
document.querySelectorAll(".card input").forEach(input => {
  input.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      input.parentElement.style.background =
        `url(${reader.result}) center/cover`;
    };
    reader.readAsDataURL(file);
  });
});
