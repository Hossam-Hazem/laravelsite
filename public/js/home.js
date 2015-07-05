$(document).ready(function () {
    //some modernizer thing
    var animEndEventNames = {
            'WebkitAnimation' : 'webkitAnimationEnd',
            'OAnimation' : 'oAnimationEnd',
            'msAnimation' : 'MSAnimationEnd',
            'animation' : 'animationend'
        },
        animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ]
    ///////////
    var width = $(document).width();
    $('.WelcomeHead').width(width);
    $('.WelcomeHead').height($(window).height());
    $('.infoDiv').height($(window).height() - $('.WelcomeHeadHeader').height() - 80);
    scrollingDiv();
    var c = 0;
    var l = $('.scrolling').children().length;
    var scrollinginterval = setInterval(function () {
        scrollIt('down', c, l)
        c = (c + 1) % l
    }, 3000)
    ///////////////////////

    $('.HomeBody').addClass('hidden');


    $(window).resize(function () {
        $('.WelcomeHead').width($(window).width());
        $('.WelcomeHead').height($(window).height());
        $('.infoDiv').height($(window).height() - $('.WelcomeHeadHeader').height() - 80);
        console.log($('.infoDiv').height())
    });
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
    $('.BodyArrowouterDiv').click(function () {
        $('body').addClass('bodyAnimate');
        $('.WelcomeHead').addClass('AnimateUpOut');
        $('.HomeBody').removeClass('hidden');
        $('.HomeBody').addClass('AnimateUpIn');
        $('body').on(animEndEventName,function(){
            $('.WelcomeHead').removeClass('AnimateUpOut');
            $('.HomeBody').removeClass('AnimateUpIn');
            $('.WelcomeHead').addClass('hidden');
            $('body').removeClass('bodyAnimate');
        })
    })
})


function scrollingDiv() {
    $('.scrolling').children().not('#e0,#e1,#e2,#e3,#e4').css('display', 'none').addClass('hidden');
    $('.scrolling>#e0').addClass('LowOpacity');
    $('.scrolling>#e1').addClass('MedOpacity');
    $('.scrolling>#e3').addClass('MedOpacity');
    $('.scrolling>#e4').addClass('LowOpacity');
    $('.scrolling').css('min-height', $('.scrolling').css('height'))
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
