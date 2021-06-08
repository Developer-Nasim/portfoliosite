(function($) {
  "use strict";
  
 // Responsive Site bar 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // Sticky Header
    var zero = 0;
    $(document).ready(function(){
        $(window).on('scroll', function(){
            $('.header-area').toggleClass('hide', $(window).scrollTop() > zero);
            zero = $(window).scrollTop();
            $('.header-area').addClass('fixHeadBack'); 
            if (zero < 10) {
            $('.header-area').removeClass('fixHeadBack'); 
            }
        });
    })

})(jQuery);
