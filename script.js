const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  slidesPerView: 2,
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
  },
});


function adjustSwiperSettings() {
  if (window.innerWidth >= 1024) { 
      swiper.params.slidesPerView = 4;
      swiper.params.spaceBetween  = 1;
      swiper.update();
  } else {
      swiper.params.slidesPerView = 2; 
      swiper.update();
  }
}


adjustSwiperSettings();
window.addEventListener('resize', adjustSwiperSettings);