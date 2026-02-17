// floating nav active state
document.querySelectorAll(".floating-nav button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".floating-nav button")
      .forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  });
});
