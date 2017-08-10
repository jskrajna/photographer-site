    $('a[href^="#"]').click(function () {
 $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);
 return false;
});

$(document).ready(function() {
$(window).scroll(function () {

    $('.element').each(function (i) {
        var object_position = $(this).offset().top + $(this).outerHeight();
        var window_position = $(window).scrollTop() + $(window).height();
        var object_height= 0.85*object_position;
        if (window_position > (object_height)) {
            setTimeout(function(){
            $('.element').eq(i).addClass('is-visible');
                }, 250);
        }
});
    });
    });



