jQuery(document).ready(function($) {
    "use strict";

    // tooltip
    $('#partners a img, ul.social-networks li a').tooltip();

    $('.flexslider').flexslider({
        slideshowSpeed: 10000,
        touch: true
    });

    //scroll to top
    // $('.scrollup').hide();
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 100) {
    //         $('.scrollup').fadeIn();
    //         } else {
    //         $('.scrollup').fadeOut();
    //     }
    // });
    // $('.scrollup').click(function() {
    //     $("html, body").animate({ scrollTop: 0 }, 1000);
    //         return false;
    // });
});
