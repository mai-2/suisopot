jQuery("#js-drawer-icon").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
  jQuery("body").toggleClass("is-checked");
});

jQuery('#js-drawer-content a[href^="#"]').on("click", function(e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
  jQuery("body").removeClass("is-checked");
});

$('a[href^="#"]').on('click', function () {
  // #から始まるURLがクリックされた時
  // .headerクラスがついた要素の高さを取得
  var header = jQuery(".header").innerHeight(); // 移動速度を指定（ミリ秒）

  var speed = 300; // hrefで指定されたidを取得

  var id = $(this).attr("href"); // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする

  var target = $("#" == id ? "html" : id); // トップからの距離からヘッダー分の高さを引く

  var position = $(target).offset().top - header; // その分だけ移動すればヘッダーと被りません

  $("html, body").animate({
    scrollTop: position
  }, speed);
  return false;
}); // トップへ戻るボタン

new ScrollHint('#js-scrollable');

const swiper1 = new Swiper('#js-room-swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,
  centeredSlides: true,
  slidesPerView: 1.25,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  }
});

const swiper2 = new Swiper('#js-example-swiper', {
  // Optional parameters
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
    }
  },

  // If we need pagination
  pagination: {
    el: '#js-example-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#js-example-next',
    prevEl: '#js-example-prev',
  },
});

const swiper3 = new Swiper('#js-voice-swiper', {
  // Optional parameters
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  },

  // If we need pagination
  pagination: {
    el: '#js-voice-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#js-voice-next',
    prevEl: '#js-voice-prev',
  },
});

$(document).ready(function() {
  $('.voice__icon--open').click(function() {
    $(this).closest('.voice__slide').find('.voice__text').slideToggle(),
    $(this).hide(),
    $(this).siblings('.voice__icon--close').show()
  });

  $('.voice__icon--close').click(function() {
    $(this).closest('.voice__slide').find('.voice__text').slideToggle(),
    $(this).hide(),
    $(this).siblings('.voice__icon--open').show()
  });
});

$(document).ready(function() {
  $('.faq__head').click(function() {
    $(this).next().slideToggle();
    $(this).children('.faq__head-arrow').toggleClass('is-open')
  });
});
