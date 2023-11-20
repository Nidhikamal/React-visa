


  $(document).ready(function () {
    var display_width = $(window).width();
    var hamburger = $("#hambuger_menu");
    var menu = $("#menubody");

    $(hamburger).click(function (e) {
      menu.toggleClass("open");
      hamburger.toggleClass("open");
    });



  })