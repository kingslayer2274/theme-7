$(document).ready(function() {
  $(document).scroll(function() {
    console.log($(document).scrollTop());
    sc_top = $(document).scrollTop();
    if (sc_top > 202) {
      $("#contact-info .title").addClass("scroll-1");
    } else {
      $("#contact-info .title").removeClass("scroll-1");
    }
  });
  if ($(document).width() < 500) {
    $(".owl-next").attr("style", "padding: 1rem !important");
    $(".owl-prev").attr("style", "padding: 1rem !important");
  }
});

$(".navTrigger").click(function() {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  center: true,
  pagination: false,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      loop: true
    }
  },
  navText: [
    "<i class='fas fa-angle-left fa-2x'></i>",
    "<i class='fas fa-angle-right fa-2x'></i>"
  ]
});

$(document).ready(function() {
  $(".owl-dots").remove();
});
