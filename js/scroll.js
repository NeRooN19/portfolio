$(document).ready(function () {
  $(".arrow").hide();
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 80) {
      $(".arrow").fadeOut("fast");
    } else {
      $(".arrow").fadeIn("fast");
    }
  });
});
