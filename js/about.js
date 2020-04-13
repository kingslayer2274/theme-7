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
