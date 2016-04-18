jQuery(document).ready(function($) {
    // tooltip
    $('.partner-img a img, ul.social-networks li a').tooltip();

    $('#side-header.flexslider').flexslider({
        slideshowSpeed: 10000,
        touch: true
    });

    // Countdown
    if($(".container-countdown").length == 0) return;
    $('.container-countdown').countdown({
        date: "May 16, 2016 00:00:00",
        render: function(data) {
            var el = $(this.el);
            el.empty()
                .append("<p>ОСТАЛОСЬ</p>")
                .append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(data.days, 2) + "</span><h6>Дней</h6></div>")
                .append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(data.hours, 2) + "</span><h6>Часов</h6></div>")
                .append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(data.min, 2) + "</span><h6>Минут</h6></div>")
                .append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(data.sec, 2) + "</span><h6>Секунд</h6></div>");
        }
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
