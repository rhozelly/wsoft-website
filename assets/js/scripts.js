jQuery(document).ready(function($) {
  $('.header__navigation-menu-toggle').on('click', function(e) {
    e.stopPropagation();
    $('.header__navigation-menu-wrapper').addClass('active-menu').animate({
      'width': '100%',
      'opacity': '1'
    }).css('display', 'flex');
    
    setTimeout(
      function() {
        $('.header__navigation-menu-item').addClass('show-menu-item');
      }, 1000
    );
  });

  $('.header__navigation-menu-close').on('click', function(e) {
    e.stopPropagation();

    $('.header__navigation-menu-item').removeClass('show-menu-item');

    setTimeout(
      function() {
        $('.header__navigation-menu-wrapper').removeClass('active-menu').animate({
          'width': '0%',
          'opacity': '0'
        });
      }, 300
    );
  });
});