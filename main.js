
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");

});

const links = document.querySelectorAll("#nav-links li");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

    });

});