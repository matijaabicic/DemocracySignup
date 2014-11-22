//shrink the top navbar on scroll past line 50
$(window).scroll(function() {
if ($(document).scrollTop() > 10) {
$('.navbar').addClass('shrink');
}
else {
$('.navbar').removeClass('shrink'); }
});

// $(function(){
//     $('#header_nav').data('size','big');
// });
//
// $(window).scroll(function(){
//     if($(document).scrollTop() > 0)
//     {
//         if($('#header_nav').data('size') == 'big')
//         {
//             $('#header_nav').data('size','small');
//             $('#header_nav').stop().animate({
//                 height:'35px'
//             },600);
//         }
//     }
//     else
//     {
//         if($('#header_nav').data('size') == 'small')
//         {
//             $('#header_nav').data('size','big');
//             $('#header_nav').stop().animate({
//                 height:'75px'
//             },600);
//         }
//     }
// });


//smooth scrolling on anchor links
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
