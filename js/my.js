console.log("I can see you! Welcome to my website 🙃");

// Open mobile menu
function openNav() {
  $(document.getElementById("myNav")).css("width", "100%");
  $(".icon-mobile").toggleClass("active");
}

// Close mobile menu
function closeNav() {
  $(document.getElementById("myNav")).css("width", "0%");
  $(".icon-mobile").toggleClass("active");
}

// Mobile window
$(document).ready(function() {

  $("h1").fadeIn(4000).removeClass("d-none");
  
  $(window).resize(() => {
    var width = $(window).width();
    if (width < 768) {
      $(".col-6").removeClass("col-6").addClass("col-lg");
    }
  });

// Desktop hamburger menu
  $(".icon").on("click", function() {
    $(".icon").toggleClass("active");
    $(".categories").toggleClass("active");
  });

});
