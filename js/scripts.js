console.log("Hello! Welcome to Abegail Taitano's Portfolio Site");

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

//TABLE OF CONTENTS MENU//
$(document).ready(function () {
  // Open the table of contents when the small button is clicked
  $("#toggle-toc").on("click", function () {
    $(".toc-container").addClass("active");
    $(this).hide(); // Hide small button
  });

  // Close table of contents when clicking the close button
  $("#close-toc").on("click", function () {
    $(".toc-container").removeClass("active");
    $("#toggle-toc").show(); // Show small button again
  });

  // Smooth scrolling with offset
  $(".toc-list a").on("click", function (e) {
    e.preventDefault();

    var target = $($(this).attr("href"));

    if (target.length) {
      var headerHeight = $("header").outerHeight() || 0;

      $("html, body").animate(
        {
          scrollTop: target.offset().top - headerHeight - 10,
        },
        600,
        "swing"
      );
    }
  });
});

// BACK TO TOP FUNCTIONALITY //
var backToTopButton = $("#backToTop");

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    backToTopButton.fadeIn(300);
  } else {
    backToTopButton.fadeOut(300);
  }
});

backToTopButton.on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 600, "swing");
});
