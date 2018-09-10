var mob_menu = document.getElementById("mobile-nav");

function hamburger(x) {
    x.classList.toggle("open");
    mob_menu.classList.toggle("mobile-ul-active");
};