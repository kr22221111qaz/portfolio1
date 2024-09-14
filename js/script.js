$(function() {

  $(".top-swiper").addClass("is-show");

  /*スマホ用ナビゲーション*/
  $(".openbtn2").click(function () {
      $('header').toggleClass('active');
  });

  $(".nav__item").click(function () {
    $('header').removeClass('active');
  });
  /*スマホ用ナビゲーションはここまで*/



  $(window).scroll(function () {
    $('.zoom-img').each(function () {
      var hit = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var wHeight = $(window).height();
      var customTop = 100;
      if (typeof $(this).data('zoom-img') !== 'undefined') {
        customTop = $(this).data('zoom-img');
      }
      if (hit + customTop < wHeight + scroll) {
        $(this).addClass("is-active");
      }
    });
  });

  //*スライダー*//		
  let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 2000
    ,pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    }
  }
  new Swiper('.swiper-container', swipeOption);
  //*スライダーはここまで*//
})


