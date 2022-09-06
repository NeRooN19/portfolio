$(document).ready(function () {
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 80) {
      $(".arrow").fadeOut();
    } else {
      $(".arrow").fadeIn();
    }
  });
});
