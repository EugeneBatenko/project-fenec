//MOBILE MENU
var mob_menu = document.getElementById("mobile-nav");

function hamburger(x) {
    x.classList.toggle("open");
    mob_menu.classList.toggle("mobile-ul-active");
};
//SLIDER
$(document).ready(function () {
    $('.header-slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1200,
    });
});