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

var elements = $(".modal-overlay, .modal");

$("button").click(function() {
  elements.addClass("active");
});

$(".close-modal").click(function() {
  elements.removeClass("active");
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

$(document).ready(function() {
  if ($(document).width() < 500) {
    $("#courses").attr("style", "margin-top: 0 !important");
  }
});
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
});
$(document).ready(function() {
  if ($(document).width() < 500) {
    {
      $(".dropdown a").click(function() {
        setTimeout(function() {
          console.log("it works");
          $(".dropdown-menu").removeAttr("style");
          // $(".dropdown-menu .show").attr(
          //   "style",
          //   " position: absolute; transform : translate3d(0,-147px,0); top:0;left:0;will-change:transform;"
          // );
        }, 10);
      });
    }
  }
});
