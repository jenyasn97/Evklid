//инициализация слайдера 
const swiper = new Swiper('.swiper', {
  //бесконечная прокрутка 
  loop: true,

  // точки для прокртуки
  pagination: {
    el: '.swiper-pagination',
    clickable: true, //клик для перехода
  },

  //автовоспроизведение слайдера
  autoplay: {
    delay: 3000, //время 
    disableOnInteraction: false, //остановить слайдер после ручного перелистывания (по умолчанию true)
  },

  speed: 3000, //скорость перехода слайда 
});


$(function () {
  $("#accordion").accordion({
    collapsible: true,
    icons: false,
    active: false,
  });
});

window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tubs-btn').forEach(function (tubsBtn) {
    tubsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tubs-content').forEach(function (tabContent) {
        tabContent.classList.remove('tubs-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tubs-content-active')
    })
  })



  const burger = document.querySelector('.burger')
  const burgerBtn = document.querySelector('.burger-icon')
  const burgerMenu = document.querySelector('.header__menu-list')
  const body = document.querySelector('Body');


  burger.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger-icon-active');
    if (burgerMenu.classList.contains('header__menu-list')) {
      burgerMenu.classList.remove('header__menu-list')
      burgerMenu.classList.add('header__menu-mobile')
      burgerMenu.classList.toggle('header__menu-mobile-active')
      body.style.overflow = 'hidden';
    }
    else {
      burgerMenu.classList.add('header__menu-list')
      burgerMenu.classList.remove('header__menu-mobile')
      burgerMenu.classList.toggle('header__menu-mobile-active')
      body.style.overflow = 'scroll';
    }
  })
})

