$(function () {

  // BS scroll event
  $(".BS_info .screen_img").animate({ "margin-top": "-2800" }, 12000, function () {
    $(".BS_info .screen_img").animate({ "margin-top": "0" }, 8000);
  });

  setInterval(BS_screen, 20000);

  function BS_screen() {
    $(".BS_info .screen_img").animate({ "margin-top": "-2800" }, 12000, function () {
      $(".BS_info .screen_img").animate({ "margin-top": "0" }, 8000);
    });
  }

  // FF14 scroll event
  $(".FF14_info .screen_img").animate({ "margin-top": "-1643" }, 8000, function () {
    $(".FF14_info .screen_img").animate({ "margin-top": "0" }, 4000);
  });

  setInterval(FF14_screen, 13500);

  function FF14_screen() {
    $(".FF14_info .screen_img").animate({ "margin-top": "-1643" }, 8000, function () {
      $(".FF14_info .screen_img").animate({ "margin-top": "0" }, 4000);
    });
  }
  // FF14 scroll event (mobile)
  $(".FF14_info .M_img").mouseenter(function () {
    $(this).find("img").stop().animate({ "margin-top": "-517" }, 2500);
  });

  $(".FF14_info .M_img").mouseleave(function () {
    $(this).find("img").stop().animate({ "margin-top": "0" }, 1500);
  });

  // WWF scroll event
  $(".WWF_info .screen_img").animate({ "margin-top": "-1612" }, 8000, function () {
    $(".WWF_info .screen_img").animate({ "margin-top": "0" }, 4000);
  });

  setInterval(WWF_screen, 13500);

  function WWF_screen() {
    $(".WWF_info .screen_img").animate({ "margin-top": "-1612" }, 8000, function () {
      $(".WWF_info .screen_img").animate({ "margin-top": "0" }, 4000);
    });
  }

  // WWF scroll event (mobile)
  $(".WWF_info .M_img").mouseenter(function () {
    $(this).find("img").stop().animate({ "margin-top": "-4460" }, 12000);
  });

  $(".WWF_info .M_img").mouseleave(function () {
    $(this).find("img").stop().animate({ "margin-top": "0" }, 1500);
  });

  // Adidas scroll event
  $(".Adidas_info .screen_img").animate({ "margin-top": "-2130" }, 8000, function () {
    $(".Adidas_info .screen_img").animate({ "margin-top": "0" }, 4000);
  });

  setInterval(Adidas_screen, 13500);

  function Adidas_screen() {
    $(".Adidas_info .screen_img").animate({ "margin-top": "-2130" }, 8000, function () {
      $(".Adidas_info .screen_img").animate({ "margin-top": "0" }, 4000);
    });
  }

  // TEAM scroll event
  $(".team_info .screen_img").animate({ "margin-top": "-1803" }, 8000, function () {
    $(".team_info .screen_img").animate({ "margin-top": "0" }, 4000);
  });

  setInterval(team_screen, 13500);

  function team_screen() {
    $(".team_info .screen_img").animate({ "margin-top": "-1803" }, 8000, function () {
      $(".team_info .screen_img").animate({ "margin-top": "0" }, 4000);
    });
  }

  // TEAM scroll event (mobile)
  $(".team_info .M_img").mouseenter(function () {
    $(this).find("img").stop().animate({ "margin-top": "-1200" }, 8000);
  });

  $(".team_info .M_img").mouseleave(function () {
    $(this).find("img").stop().animate({ "margin-top": "0" }, 1500);
  });
});