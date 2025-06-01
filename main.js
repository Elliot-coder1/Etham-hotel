const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");

    const isopen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isopen ? "ri-close-line": "ri-menu-line")
});


navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line" );
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,

};

//header container

ScrollReveal().reveal(".header-container .section-subheader", {
    ...scrollRevealOption,
})


ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
    delay: 500
})

ScrollReveal().reveal(".header-container .btn", {
    ...scrollRevealOption,
    delay : 1000
});


//room container
ScrollReveal().reveal(".room-card",{
    ...scrollRevealOption,
    interval: 500,
});
