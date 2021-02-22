$(".header-btn").on("click", function (e) {
    $(this).toggleClass("on"), e.preventDefault(), $(".header-nav").toggleClass("active"), $(".header-nav").toggleClass("block"), $("body").toggleClass("locked"), $(".header-desc ul").toggleClass("blockUL")
});
$(document).ready(function () {
    $(".go_to").click(function (t) {
        t.preventDefault();
        const o = $(this).attr("href");
        0 != $(o).length && $("html, body").animate({
            scrollTop: $(o).offset().top
        }, 1e3)
    })
});
$(document).ready(function () {
    $(window).on("scroll", function () {
        $(window).scrollTop() ? ($(".header-nav").addClass("whiteBG"), $(".header-nav").removeClass("container")) : ($(".header-nav").removeClass("whiteBG"), $(".header-nav").addClass("container"))
    })
});
