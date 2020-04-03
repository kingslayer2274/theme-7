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
    "<i class='fa fa-angle-right fa-2x'></i>"
  ]
});

$(document).ready(function() {
  $(".owl-dots").remove();

  console.log("done");
});

$(document).ready(function() {
  if ($(document).width() < 500) {
    //$(".all").removeClass("container");
    //$(".all").removeClass("py-3");
    $(".fa-circle").removeClass("fa-stack-2x");
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
