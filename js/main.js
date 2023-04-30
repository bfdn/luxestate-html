$(".header__switch").on("click", function () {
    if ($('.menu__list').is(".menu__list--show")) {
        $('.menu__list').removeClass("menu__list--show");
    } else {
        $('.menu__list').addClass("menu__list--show");
    }
});

$(window).scroll(function () {
    if ($('.menu__list').is(".menu__list--show")) {
        $('.menu__list').removeClass("menu__list--show");
    }
});




$('.tab-section__right').on("click", ".tab-section__item", function () {
    $('.tab-section__item').removeClass('tab-section__item--active');
    $(this).addClass('tab-section__item--active');
});

$('.dropdown').on("click", ".header__menu-link", function () {
    $('.dropdown').removeAttr('style');
    var veri = $(this).parent().find(".dropdown__menu").is(".active");
    $('.dropdown__menu').removeClass("active");
    if (veri) {
        $(this).parent().find(".dropdown__menu").removeClass("active");
        $(this).parent().css({ 'min-height': '0' });
    } else {
        $(this).parent().find(".dropdown__menu").addClass("active");
        $(this).parent().css({ 'min-height': '400px' });
    }

});
