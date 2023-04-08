$(function () {
  //swiper
  let swipeOption = {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,
  };
  new Swiper(".swiper", swipeOption);

  //page scroll
  $(".el-headerNavList a").click(function () {
    var hash = $(this).attr("href");
    var pos = $(hash).offset().top;
    $("body, html").animate({ scrollTop: pos }, 500);
    return false;
  });

  $(".el-humbergerMenuNavList a").click(function () {
    var hash = $(this).attr("href");
    var pos = $(hash).offset().top;
    $("body, html").animate({ scrollTop: pos }, 500);
    $(".openbtn1").removeClass("active");
    $(".bl-humbergerMenuNav").fadeOut();
    return false;
  });

  //fixedheader
  $(window).scroll(function () {
    var pos = $("#service").offset();
    if ($(this).scrollTop() > pos.top) {
      $(".header").css("position", "fixed");
    } else {
      $(".header").css("position", "static");
    }
  });

  //humbergerMenu
  $(".openbtn1").click(function () {
    $(this).toggleClass("active");
    $(".bl-hamburgerMenuNav").slideToggle();
  });
});
