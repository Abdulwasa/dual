
$(document).ready(function(){


     
    //animated header class
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll > 200) {
        //console.log('a');
        $(".navigation").addClass("animated");
    } else {
        //console.log('a');
        $(".navigation").removeClass("animated");
    }});



    $(".gallery-slider").owlCarousel(
        {
        pagination : true,
        autoPlay : 5000,
        itemsDesktop  :  [1500,4],
        itemsDesktopSmall :  [979,3]
        }
    );

    // Gallery Popup
    $('.image-popup').magnificPopup({type:'image'});



});


$(function(){
/*     $('a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    }); */
    $('.nav-item').click(function() {
        $('li.nav-item').removeClass('active');
       $(this).addClass('active');
    });
    
});





