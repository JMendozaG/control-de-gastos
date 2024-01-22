const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");
const navhome = document.querySelector(".nav-home");
const navservicios = document.querySelector(".nav-servicios");
const navproyectos = document.querySelector(".nav-proyectos");
const navblog = document.querySelector(".nav-blog");
const navcontacto = document.querySelector(".nav-contacto");

navToggle.addEventListener("click", () => {
navMenu.classList.toggle("nav-menu_visible");
});

navhome.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});

navservicios.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});

navproyectos.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});

navblog.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});

navcontacto.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});