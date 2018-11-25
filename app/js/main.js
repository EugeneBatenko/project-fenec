//MOBILE MENU
var mob_menu = document.getElementById("mobile-nav");

function hamburger(x) {
    x.classList.toggle("open");
    mob_menu.classList.toggle("mobile-ul-active");
};
//Sticky menu
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos != 0) {
        document.getElementById("header").style.background = "rgba(38,38,38,0.8)";
    } else {
        document.getElementById("header").style.background = "rgba(0,0,0,.0)";
    }
}

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