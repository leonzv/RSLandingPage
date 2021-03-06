const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    autoplay: {
        delay: 1500,
      },
      paginationType: "custom",
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 1280px
        1100: {
          slidesPerView: 6,
          spaceBetween: 20
        },
        // when window width is >= 640px
        0: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 1500,
      },
      paginationType: "custom",
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 1280px
      1110: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      // when window width is >= 640px
      0: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
  });