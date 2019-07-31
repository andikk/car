$(document).ready(function() {

  var navMain = document.querySelector('.js-menu');
  var navToggle = document.querySelector('.js-menu__button');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('js-menu_closed')) {
      navMain.classList.remove('js-menu_closed');
      navMain.classList.add('js-menu_opened');
    } else {
      navMain.classList.add('js-menu_closed');
      navMain.classList.remove('js-menu_opened');
    }
  });

  var ctaBtn = document.querySelector('.js-hero__button');
  var modal = document.querySelector('.js-modal');
  var page = document.querySelector('.js-page');


  ctaBtn.addEventListener('click', function() {
    modal.style = 'display: flex;'
    page.classList.add('page__fade');
  });

  var btnModalClose = document.querySelector('.modal__close');
  btnModalClose.addEventListener('click', function() {
    page.classList.remove('page__fade');
    modal.style = 'display: none;'
  });





});
