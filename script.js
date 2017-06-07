$(document).ready(function() {

  $(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
      $(".front").text("allan.a.mcevoy@gmail.com ");

    }

    if (viewportWidth > 600) {
      $(".front").text("...");

    }

  });
});
