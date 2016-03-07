jQuery(document).ready(function($) {
    "use strict";

    // tooltip
    $('.partner-img a img, ul.social-networks li a').tooltip();

    $('#side-header.flexslider').flexslider({
        slideshowSpeed: 10000,
        touch: true
    });

    // Countdown
    if($(".container-countdown").length == 0) return;
    $('.container-countdown').countdown({
        date: "April 25, 2016 00:00:00",
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

    // own-carousel
    var time = 5; // time in seconds

    var $progressBar,
        $bar,
        $elem,
        isPause,
        tick,
        percentTime;

    $('#owl-post').owlCarousel({
        slideSpeed : 500,
        paginationSpeed : 500,
        singleItem : true,
        afterInit : progressBar,
        afterMove : moved,
        startDragging : pauseOnDragging
    });

    // Init progressBar where elem is $("#owl-post")
    function progressBar(elem) {
        $elem = elem;
        // build progress bar elements
        buildProgressBar();
        // start counting
        start();
    }

    // Create div#progressBar and div#bar then prepend to $("#owl-post")
    function buildProgressBar() {
        $progressBar = $("<div>",{
            id: "progressBar"
        });
        $bar = $("<div>",{
            id: "bar"
        });
        $progressBar.append($bar).prependTo($elem);
    }

    function start() {
        // reset timer
        percentTime = 0;
        isPause = false;
        // run interval every 0.01 second
        tick = setInterval(interval, 10);
    };

    function interval() {
        if(isPause === false) {
            percentTime += 1 / time;
            $bar.css({
                width: percentTime + "%"
            });
            // if percentTime is equal or greater than 100
            if(percentTime >= 100) {
            // slide to next item
            $elem.trigger('owl.next')
            }
        }
    }

    // Pause while dragging
    function pauseOnDragging(){
        isPause = true;
    }

    // Moved callback
    function moved(){
        // clear interval
        clearTimeout(tick);
        // start again
        start();
    }

    // Make pause on mouseover
    if ($elem) {
        $elem.on('mouseover',function(){
            isPause = true;
        })
        $elem.on('mouseout',function(){
            isPause = false;
        })
    }

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
