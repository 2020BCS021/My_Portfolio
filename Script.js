const mobile = document.querySelector(".mobile-navbar-button");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};
mobile.addEventListener('click', () => toggleNavbar());