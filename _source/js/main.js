$(document).ready(function() {
  svg4everybody();

  $('.js-menu__button').on('click', function () {
    if ($('.js-menu').hasClass('js-menu_closed')) {
      $('.js-menu').removeClass('js-menu_closed');
      $('.js-menu').addClass('js-menu_opened');
    } else {
      $('.js-menu').addClass('js-menu_closed');
      $('.js-menu').removeClass('js-menu_opened');
    }
  });

  $('.js-hero__button').on('click', function () {
    $('.js-modal').css('display', 'block');
    $('.js-page').addClass('page__fade');
  });

  $('.modal__close').on('click', function () {
    $('.js-page').removeClass('page__fade');
    $('.js-modal').css('display', 'none')
  });

});
