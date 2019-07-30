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


});
