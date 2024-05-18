
$(document).ready(function () {
  // handle hamburger button clicks
  $("#button").click(function () {
    console.log('Toggle-button clicked!');
    if ($("#button").hasClass("active")) {
      $("#navi-bar").removeClass("hidden");
    } else {
      $("#navi-bar").addClass("hidden");
    }
  });

  $(window).resize(function () {
    if ($(document).width() < 700) {
      $("#button").removeClass("hidden");
      $("#navi-bar").addClass("hidden");
    } else {
      $("#button").addClass("hidden");
      $("#navi-bar").removeClass("hidden");
    }
  });
});
