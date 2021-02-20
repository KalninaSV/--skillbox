new Swiper('.swiper-container', {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.pagination',
        clickable: true,
      },
    
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
    breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
    
  }
);

