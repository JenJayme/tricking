$(document).foundation();
  
  $( document ).ready(function() {
    console.log( "ready!" );
    $(function() {
      $(window).scroll(function() {
        didScroll = true;
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
          $("body").addClass("sticky-shrinknav-wrapper");
        } else{
          $("body").removeClass("sticky-shrinknav-wrapper");
        }
      });
    });
});
  
