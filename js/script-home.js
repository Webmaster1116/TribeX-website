$(window).ready(function () {
  // Mobile Menu Code
  let mobileMenuInitHeight = 70;
  $(".navbar-toggler").on("click", function (e) {
    e.stopPropagation();

    // opening mobile menu
    if ($(this).hasClass("closed-menu")) {
      $("body").addClass("hide-scroll");
      mobileMenuInitHeight = $(this).parents(".top-menu").outerHeight(true);
      $(".top-menu-inner").css({ "padding-top": mobileMenuInitHeight });
      $(this).removeClass("closed-menu");
      $(this).parents(".top-menu").addClass("menu-open");
      $(".top-menu-inner").addClass("show-div").addClass("show-content");
      $(this)
        .parents(".top-menu")
        .stop(true, true)
        .animate(
          {
            height: "100%",
          },
          500,
          function () {
            $(".top-menu-inner").css({ "overflow-y": "auto" });
          }
        );
    } else {
      // closing mobile menu
      $("body").removeClass("hide-scroll");
      $(".top-menu-inner").css({ "overflow-y": "hidden" });
      $(this).addClass("closed-menu");
      $(this).parents(".top-menu").removeClass("menu-open");
      $(this)
        .parents(".top-menu")
        .stop(true, true)
        .animate(
          {
            height: mobileMenuInitHeight,
          },
          500,
          function () {
            $(".top-menu-inner")
              .removeClass("show-content")
              .removeClass("show-div");
          }
        );
    }
  });

  // Call this function on resize event
  function roadmapAnimation() {
    if ($(window).width() < 768) {
      mobileMenuInitHeight = 70;
    } else {
      mobileMenuInitHeight = 62;
    }
  }
  roadmapAnimation();

  // resize event
  let windowWidth = $(window).width();
  $(window).on("resize", function () {
    if ($(window).width() != windowWidth) {
      roadmapAnimation();
    }
  });

  // Countdown Code for MINT DATE
  var date = moment.tz(
    "2022-4-9 13:00:00",
    "YYYY-MM-DD hh:mm:ss",
    "America/New_York"
  );
  $("#mint-countdown").countdown(date.toDate(), function (event) {
    var totalHours = event.offset.totalDays * 24 + event.offset.hours;
    $(this).html(
      event.strftime(
        `<div><h3>${totalHours}</h3><p>hr%!H</p></div><div><h3>%M</h3><p>min%!M</p></div><div><h3>%S</h3><p>sec%!S</p></div>`
      )
    );
  });
});
