$(document).ready(function () {
    //vars
    var currentpage = '.WelcomeHead';
    //some modernizer thing
    var animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')]
    ///////////
    setTimeout(function () {
        $('.WelcomeHead').width($(window).width());
        $('.WelcomeHead').height($(window).height());
    }, 50)
    //  $('.WelcomeHead').width($(window).width());
    $('.Skills').css('top', $('.Header').height());
    $('.Projects').css('top', $('.Header').height())
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
    $('.Projects').addClass('hidden');
    // $('.ContactMe').addClass('hidden1');

    ///////////////////////////////////////////
    //Skills adjusting star rating
    var emptystar = "<span class='star glyphicon glyphicon-star-empty '></span>"
    var filledstar = "<span class='star filledstar glyphicon glyphicon-star '></span>"
    var rateitstar = "<span class='star rateitstar glyphicon glyphicon-star-empty'></span>"

    $('.Stars').val(function (index, value) {
        value = parseInt($(this).text());
        $(this).text('');
        if (value == -1) {
            $(this).append(rateitstar);
            $(this).append(rateitstar);
            $(this).append(rateitstar);
            $(this).append(rateitstar);
            $(this).append(rateitstar);
            $(this).append("<div class='rateMe'>Rate me!</div>")
        }
        else {
            if (value == 5) {
                $(this).append(filledstar);
                $(this).append(filledstar);
                $(this).append(filledstar);
                $(this).append(filledstar);
                $(this).append(filledstar);
            }
            else {
                if (value == 4) {
                    $(this).append(filledstar);
                    $(this).append(filledstar);
                    $(this).append(filledstar);
                    $(this).append(filledstar);
                }
                else {
                    if (value == 3) {
                        $(this).append(filledstar);
                        $(this).append(filledstar);
                        $(this).append(filledstar);
                    }
                    else {
                        if (value == 2) {
                            $(this).append(filledstar);
                            $(this).append(filledstar);
                        }
                        else {
                            $(this).append(filledstar);
                            $(this).append(emptystar);
                        }
                        $(this).append(emptystar);
                    }
                    $(this).append(emptystar);
                }
                $(this).append(emptystar);
            }
        }
    });
    $('.Stars').on('mouseover','.rateitstar', function () {
        $(this).removeClass('glyphicon-star-empty').addClass('glyphicon-star')
        $(this).prevAll().removeClass('glyphicon-star-empty').addClass('glyphicon-star')

    });
    $('.Stars').on('mouseleave','.rateitstar', function () {
            $(this).addClass('glyphicon-star-empty').removeClass('glyphicon-star')
            $(this).prevAll().addClass('glyphicon-star-empty').removeClass('glyphicon-star')

    });
    $('.rateitstar').on('click', function () {
        var elem = $(this).parent().parent().prev()[0]
        var skillValue = $($(elem).children()[0]).prop('title');
        var token = $('#token').val();
        console.log(token);
        var $this = $(this);
        var ratingValue = {
            _token: token,
            element: skillValue,
            rating: $(this).prevAll().length + 1
        }
        $.ajax({
            type: 'POST',
            url: '/newRating',
            data: ratingValue,
            success: function () {
                $this.removeClass('glyphicon-star-empty').addClass('glyphicon-star')
                $this.prevAll().removeClass('glyphicon-star-empty').addClass('glyphicon-star')
                $this.removeClass('rateitstar').siblings().removeClass('rateitstar');
                $this.parent().children('.rateMe').text('Thanks for rating')
               // ().text('Thank You for rating!')
            },
            error: function () {
                alert('error try again');
            }
        })
    })
//////////////////////////////////


    $(window).resize(function () {
        setTimeout(function () {
            $('.WelcomeHead').width($(window).width());
        }, 50)
        $('.WelcomeHead').height($(window).height());
        $('.infoDiv').height($(window).height() - $('.WelcomeHeadHeader').height() - 80);

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
        GetDown('.WelcomeHead', '.HomeBody');
    })
    $('html').click(function () {
        if ($('.ContactMe').css('display') == 'block') {
            console.log('ha3')
            $('.ContactMe').fadeOut();
        }
    });

    $('.contactMeContainer').click(function (event) {
        console.log('event')
        event.stopPropagation();
    });
    $(window).scroll(function () {
        if (parseInt($(window).scrollTop() + $(window).height()) == $(document).height()) {
            setTimeout(function () {
                if (currentpage == '.WelcomeHead') {
                    console.log('ha3')
                    GetDown('.WelcomeHead', '.HomeBody');
                }
                if (currentpage == '.HomeBody') {
                    GetDown('.Skills', '.Projects');
                }
                if (currentpage == '.Projects') {
                    $contact = $('.ContactMe');
                    $contact.fadeIn();
                }

            }, 500)

        }
    });


    function GetDown(current, next) {
        $(next).css('height', '100%');
        $(next).removeClass('hidden');
        $('body').addClass('bodyAnimate');
        $(current).addClass('AnimateUpOut');
        $(next).addClass('AnimateUpIn');
        $('body').on(animEndEventName, function () {
            $(current).removeClass('AnimateUpOut');
            $(next).removeClass('AnimateUpIn');
            $(current).addClass('hidden');
            $('body').removeClass('bodyAnimate');
            $(next).css('height', 'auto');
            currentpage = next;
        })
    }
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

