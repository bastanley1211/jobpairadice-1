$(function () {
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
});

//Login button click open modal

$(function () {
  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });
});

//Login modal close button

$(function () {
  $(".close").click(function () {
    $("#loginModal").modal("hide");
  });
});
