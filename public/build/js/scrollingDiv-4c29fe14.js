$(window).ready(function(){
    scrollingDiv();
    var c = 0;
    var l = $('.scrolling').children().length;
    var scrollinginterval = setInterval(function () {
        scrollIt('down', c, l)
        c = (c + 1) % l
    }, 3000)






    ///////////Listeners///////////////
    $('body').on('killScrollingDiv',function(){
        clearInterval(scrollinginterval);
    })
    $('body').on('resumeScrollingDiv',function(){
        scrollinginterval = setInterval(function () {
            scrollIt('down', c, l)
            c = (c + 1) % l
        }, 3000)
    })
    $('.glyphicon-circle-arrow-down').click(function () {
        scrollIt('down', c, l);
        c = (c + 1) % l;
        clearInterval(scrollinginterval);
        scrollinginterval = setInterval(function () {
            scrollIt('down', c, l)
            c = (c + 1) % l
        }, 3000)
    })
    $('.glyphicon-circle-arrow-up').click(function () {
        scrollIt('up', c, l);
        c = c - 1;
        if (c == -1)
            c = l - 1
        clearInterval(scrollinginterval);
        scrollinginterval = setInterval(function () {
            scrollIt('down', c, l)
            c = (c + 1) % l
        }, 3000)
    })
})
function scrollingDiv() {
    $('.scrolling').children().not('#e0,#e1,#e2,#e3,#e4').css('display', 'none').addClass('hidden');
    $('.scrolling>#e0').addClass('LowOpacity');
    $('.scrolling>#e1').addClass('MedOpacity');
    $('.scrolling>#e3').addClass('MedOpacity');
    $('.scrolling>#e4').addClass('LowOpacity');
    setTimeout(function(){
        $('.scrolling').css('min-height', $('.scrolling').css('height'))
    },500)
}
function scrollIt(type, c, l) {
    if (type == 'down') {
        var $tmpout = $('.scrolling>#e' + c);
        cn = (c + 1) % l;
        var $tmpin = $('.scrolling>#e' + ((cn + 4) % l))
        $tmpout.slideUp('slow', function () {
            $tmpout.addClass('hidden')
            $('.scrolling>#e' + c).removeClass('LowOpacity');
            $('.scrolling>#e' + (c + 4) % l).removeClass('LowOpacity');
            $('.scrolling>#e' + (c + 1) % l).removeClass('MedOpacity');
            $('.scrolling>#e' + (c + 3) % l).removeClass('MedOpacity');
            $tmpout.remove();
            $('.scrolling').append($tmpout);

            $('.scrolling>#e' + cn).addClass('LowOpacity');
            $('.scrolling>#e' + ((cn + 4) % l)).addClass('LowOpacity');
            $('.scrolling>#e' + ((cn + 1) % l)).addClass('MedOpacity');
            $('.scrolling>#e' + ((cn + 3) % l)).addClass('MedOpacity');
            $tmpin.removeClass('hidden');
            $tmpin.fadeIn('slow');


        });
    }
    else {
        cn = c - 1;
        if (cn == -1) {
            cn = l - 1;
        }
        var $tmpin = $('.scrolling>#e' + cn);
        var $tmpout = $('.scrolling>#e' + (c + 4) % l);
        $tmpout.fadeOut('slow', function () {
            $tmpout.addClass('hidden')
            $('.scrolling>#e' + c).removeClass('LowOpacity');
            $('.scrolling>#e' + (c + 1) % l).removeClass('MedOpacity');
            $('.scrolling>#e' + (c + 3) % l).removeClass('MedOpacity');
            $('.scrolling>#e' + (c + 4) % l).removeClass('LowOpacity');

            $tmpin.remove();
            $('.scrolling').prepend($tmpin);
            $('.scrolling>#e' + cn).addClass('LowOpacity');
            $('.scrolling>#e' + c).addClass('MedOpacity');
            $('.scrolling>#e' + (c + 2) % l).addClass('MedOpacity');
            $('.scrolling>#e' + (c + 3) % l).addClass('LowOpacity');
            $tmpin.removeClass('hidden');
            $tmpin.fadeIn('slow');
        })
    }
}