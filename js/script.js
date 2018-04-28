(function ($) {
  "use strict";
  $(document).ready(function () {

    //header background
    function bgHeader() {
      if ($(window).width() > 991) {
        var header = $(".section-header");
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 10) {
          header.addClass('bg-header');
        } else {
          header.removeClass('bg-header');
        }
      }
    }
    $(window).scroll(function () {
      bgHeader();
    });

    //Menu Burger
    $('.burger').on('click', function (e) {
      e.preventDefault();
      if (!$(this).hasClass('open')) {
        openMenu();
      } else {
        closeMenu();
      }

    });
    function openMenu() {
      $('.burger').addClass('open');
      $('.wrapper').css("margin-left","270px");
      $('.menu-sidebar').css("left","0");
      $('body').css({
        'overflow': 'hidden',
        'height': '100vh'
      });
    }
    function closeMenu() {
      $('.burger').removeClass('open');
      $('.wrapper').css("margin-left","0");
      $('.menu-sidebar').css("left","-270px");
      $('body').css({
        'overflow': '',
        'height': ''
      });
    }

  });
})(jQuery);