$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /************************************ Fixed Header ************************************/
  $(this).scrollTop() >= 50
    ? $("header.header-section").addClass("fixed")
    : $("header.header-section").removeClass("fixed ");
  $(window).scroll(function () {
    $(this).scrollTop() >= 50
      ? $("header.header-section").addClass("fixed")
      : $("header.header-section").removeClass("fixed ");
  });

  /************************************ Search ************************************/
  // $(".search-link").click(function () {
  //   $(".search-form").slideDown(300);
  //   $(".search-overlay").show();
  //   $(this).addClass("active");
  // });
  // $(".search-overlay").click(function () {
  //   $(".search-form").slideUp(300);
  //   $(".search-overlay").hide();
  //   $(".search-link").removeClass("active");
  // });
  $(".search-link").click(function () {
    $(".search-form").slideToggle(300);
    $(this).toggleClass("active");
  });

  /************************************ Navbar ************************************/
  $(".menu-btn").click(function () {
    if ($(".header-nav").is(":visible")) {
      $(".menu-btn").removeClass("active");
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
      setTimeout(function () {
        $(".header-nav").hide();
      }, 500);
    } else {
      $(".header-nav").show();
      setTimeout(function () {
        $(".menu-btn").addClass("active");
        $(".header-nav").addClass("active");
        $("body").addClass("overflow");
      }, 1);
    }
  });
  if ($(window).width() <= 991) {
    $(".has-children>a").click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(this).toggleClass("active").next(".children-menu").slideToggle();
    });
  }

  /************************************ Products Slider ************************************/
  var products_Swiper = new Swiper(".products-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".products-slider .swiper-pagination",
      clickable: true,
    },
  });

  /************************************ Testimonials Slider ************************************/
  var testimonials_Swiper = new Swiper(".testimonials-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: "auto",
        spaceBetween: 15,
        loop: true,
      },
      480: {
        slidesPerView: "auto",
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
  });

  /************************************ Articles Slider ************************************/
  var articles_Swiper = new Swiper(".articles-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: "auto",
        spaceBetween: 15,
        loop: true,
      },
      480: {
        slidesPerView: "auto",
        spaceBetween: 15,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: false,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".articles-slider .swiper-pagination",
      clickable: true,
    },
  });

  /************************************ Statistics ************************************/
  if ($(".about-statistics").length) {
    var a = 0;
    $(window).scroll(function () {
      if (
        a == 0 &&
        $(this).scrollTop() + $(window).height() >
          $(".about-statistics").offset().top
      ) {
        $(".statistic-item .item-value").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).data("value"),
              },
              {
                duration: 500,
                easing: "swing",
                step: function (now) {
                  $(this).text("+" + Math.ceil(now));
                },
              }
            );
        });
        a++;
      }
    });
  }
});
