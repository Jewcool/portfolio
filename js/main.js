new WOW().init();
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.projects__pagination',
    bulletClass: 'projects__bullet',
    bulletActiveClass: 'projects__bullet-active',
    clickable: true 
  },
});