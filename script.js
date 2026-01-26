const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const body = document.body;
const header = document.querySelector("header");

/* MOBILE MENU */
hamburger.addEventListener("click",()=>{
    nav.classList.toggle("nav-active");
    body.classList.toggle("menu-open");

    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
});

/* ACTIVE LINK */
document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        document.querySelectorAll(".nav-links a")
            .forEach(l=>l.classList.remove("active"));
        link.classList.add("active");

        nav.classList.remove("nav-active");
        body.classList.remove("menu-open");
    });
});

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",e=>{
        e.preventDefault();
        document.querySelector(a.getAttribute("href"))
            .scrollIntoView({behavior:"smooth"});
    });
});

/* HEADER SHRINK */
window.addEventListener("scroll",()=>{
    header.classList.toggle("shrink",window.scrollY>50);
});

/* PAGE LOADER */
window.addEventListener("load",()=>{
    document.getElementById("page-loader").style.display="none";
});

/* PORTFOLIO FILTER */
document.querySelectorAll(".portfolio-filter").forEach(btn=>{
    btn.addEventListener("click",()=>{
        document.querySelectorAll(".portfolio-filter")
            .forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");

        const text = btn.innerText.toLowerCase();
        document.querySelectorAll(".portfolio-item").forEach(item=>{
            item.classList.toggle(
                "hide",
                !(text==="all works" || item.innerText.toLowerCase().includes(text))
            );
        });
    });
});
