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

$(".owl-1").owlCarousel({
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
  $("#carousel2 .owl-dots span").addClass("fas fa-circle");
  $("#carousel2 .owl-nav").addClass("d-none");
  $(".owl-1 .owl-dots").addClass("d-none");
  if ($(document).width() < 500) {
    //$(".all").removeClass("container");
    //$(".all").removeClass("py-3");
    //$(".fa-circle").removeClass("fa-stack-2x");
    // $(".col").addClass("xs-pr-0");
    //$(".col-3").addClass("xs-pr-0");
    //$(".col-4").addClass("xs-pr-0");
    $(".owl-prev").attr("style", "padding:2rem 1rem !important");
    $(".owl-next").attr("style", "padding:2rem 1rem !important");
    //$(".xs-pr-0").attr("style", "padding-right:0rem !important");
    //$(".ports").attr("style", "max-width : 1000% !important");
  }
});

$("body").scrollspy({ target: "#main-nav" });

// Add smooth scrolling
$(".navlinks a").on("click", function(e) {
  // Check for a hash value
  if (this.hash !== "") {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function() {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});

$("#carousel2").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  center: true,
  pagination: true,
  dots: true,
  autoplayTimeout: 2000,
  autoplay: true,
  //animateOut: "fadeOut",
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

function test() {
  console.log("nicely done");
}
