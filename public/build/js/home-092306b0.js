////////////some modernizer thing//////////////////////////
var animEndEventNames = {
        'WebkitAnimation': 'webkitAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd',
        'animation': 'animationend'
    },
    animEndEventName = animEndEventNames[Modernizr.prefixed('animation')]
///////////////////////////////////////////////

//////////Intro/////////////////////
$(document).ready(function () {
    //vars
    $(window).load(function () {
        $('.enter').html('Website Loaded');
        setTimeout(function () {
            $('.enter').html('<a class="skipButton">Skip</a>')
        }, 5000);
    })
    var currentpage = '.WelcomeHead';
////////////////////////////////////////


    $('.Skills').css('top', $('.Header').height());
    $('.Projects').css('top', $('.Header').height())


    setTimeout(function () {
        $('.Skills').css('height', '' + ($(window).height() - $('.Header').height()));
        $('.WelcomeHead').css('height', '' + ($(window).height())).addClass('hidden');
        $('.HomeBody').addClass('hidden').css('height', '' + ($(window).height()));
        $('.Projects').css('height', '' + ($(window).height() - $('.Header').height())).addClass('hidden');
    }, 2000);


    /////////////Listeners//////////////

    $(window).resize(function () {
        setTimeout(function () {
            $('.WelcomeHead').width($(window).width());
        }, 50)
        $('.WelcomeHead').height($(window).height());
        $('.infoDiv').height($(window).height() - $('.WelcomeHeadHeader').height() - 80);

    });
    $('.WelcomeDiv').on('click', '.skipButton', function () {
        animateIt('.WelcomeDiv', '.WelcomeHead', 'AnimateUpOut', 'noAnim');
    })
    $('.contactMessage').on('input', function () {
        if ($(this).val().replace(/\s/g, '').length < 4) {
            $('.sendButton').attr('disabled', 'disabled')
        }
        else {
            $('.sendButton').removeAttr('disabled')
        }
    });

    $('.BodyArrowDownDiv').click(function () {
        var id = $(this).attr('id')
        if (id == 'Welcome') {
            animateIt('.WelcomeHead', '.HomeBody', 'AnimateUpOut', 'AnimateUpIn');
        }
        else if (id == 'Skills') {
            animateIt('.Skills', '.Projects', 'AnimateUpOut', 'AnimateUpIn');

        }
        else if (id == 'Projects') {
            $contact = $('.ContactMe');
            setTimeout(function () {
                $contact.fadeIn();
            }, 500)

        }
    })
    $('.BodyArrowUpDiv').click(function () {
        var id = $(this).attr('id')
        if (id == 'Skills') {
            animateIt('.HomeBody', '.WelcomeHead', 'AnimateDownOut', 'AnimateDownIn');
        }
        else if (id == 'Projects') {
            animateIt('.Projects', '.Skills', 'AnimateDownOut', 'AnimateDownIn');
        }

    })
    $('html').click(function () {
        if ($('.ContactMe').css('display') == 'block') {
            $('.ContactMe').fadeOut();
        }
    });

    $('.contactMeContainer').click(function (event) {
        event.stopPropagation();
    });
    $('.sendButton').click(function (event) {
        event.preventDefault();
        var token = $('#token').val();
        var ContactContent = {
            _token: token,
            name: $('.contactName').val(),
            email: $('.contactEmail').val(),
            message: $('.contactMessage').val()
        }
        $.ajax({
            type: 'POST',
            url: '/Contact',
            data: ContactContent,
            success: function () {
                $('.contactMeInnerContainer').html('<h1>Thanks for ur feedback</h1>')
            },
            error: function () {
                alert('error try again');
            }
        })
    })
    $('.HBNavItem').click(function () {
        $item = $(this).attr('id');
        if ($item == 'Projects') {
            if (currentpage == '.Skills' || currentpage == '.HomeBody') {
                animateIt('.Skills', '.Projects', 'AnimateUpOut', 'AnimateUpIn');
                $(document).scrollTop(0)
            }
        } else {
            if ($item == 'Contact') {
                $contact = $('.ContactMe');
                setTimeout(function () {
                    $contact.fadeIn();
                }, 500)
            } else {
                if ($item = 'Skills') {
                    if (currentpage == '.Projects') {
                        animateIt('.Projects', '.Skills', 'AnimateDownOut', 'AnimateDownIn');
                        $(document).scrollTop(0)
                    }
                }
            }
        }
    })
    $('.footerEMob').click(function () {
        var id = $(this).attr('id');
        if ($(this).hasClass('footerEmailIcon')) {
            $('.footerMobile').slideUp('slow', function () {
                $('.footerMobile').removeClass('footerSelected');
                $('.footerMobileIcon').removeClass('footerSelected');
                $('.footerEmail').slideDown('slow');
                $('.footerEmail').css('display', 'inline-block');
                $('.footerEmail').addClass('footerSelected');
                $('.footerEmailIcon').addClass('footerSelected');
                $(document).scrollTop($(document).height())
            });
        }
        else {
            $('.footerEmail').slideUp('slow', function () {
                $('.footerEmail').removeClass('footerSelected');
                $('.footerEmailIcon').removeClass('footerSelected');
                $('.footerMobile').slideDown('slow');
                $('.footerMobile').css('display', 'inline-block');
                $('.footerMobile').addClass('footerSelected');
                $('.footerMobileIcon').addClass('footerSelected');
                $(document).scrollTop($(document).height())
            })
        }

    })

/////////////////////////////////////////////////////////

    //////////////// main //////////////////

    function animateIt(current, next, animOut, animIn) {
        // $(next+'>.BodyArrowDownDiv').addClass('hidden')
        $(document).scrollTop(0)
        setTimeout(function () {

            $('body').addClass('bodyAnimate');
            //$(current).css('height', '' + ($(window).height() - $('.Header').height()));
            if (current != '.WelcomeHead') {
                $(current).css('overflow', 'hidden');
            }
            //   $(next).css('height', '' + ($(window).height() - $('.Header').height()));
            $(next).css('overflow', 'hidden');
            setTimeout(function () {
                $(current).addClass(animOut);
                $(next).removeClass('hidden');
                $(next).addClass(animIn);
                setCurrentItem(current, next)
                FadeItIn(current, next);
                $('body').on(animEndEventName, function () {
                    $(current).removeClass(animOut);
                    $(next).removeClass(animIn);
                    $(current).addClass('hidden');
                    $(next).removeClass('hidden');
                    if (next != '.WelcomeHead') {
                        //$(next).css('margin-top',$('.Header').height());
                    }
                    else {
                        $(next).css('height', '100%');
                    }
                    $(next).css('overflow', 'initial');
                    $('body').removeClass('bodyAnimate');
                    //$(next).css('height', '100%');
                    fireInTheCode(current, next);
                    //  $(next+'>.BodyArrowDownDiv').removeClass('hidden')
                    currentpage = next;

                })
            }, 500)

        }, 500);
    }


    function GetUp(current, next, clip) {
        //$(next+'>.BodyArrowDownDiv').addClass('hidden')
        $(next).removeClass('hidden');
        $('body').addClass('bodyAnimate');
        if (clip == true) {
            $(current).css('height', '' + ($(window).height() - $('.Header').height()));
            if (current != '.WelcomeHead') {
                $(current).css('overflow', 'hidden');
            }
        }
        $(next).css('height', '' + ($(window).height() - $('.Header').height()));
        $(next).css('overflow', 'hidden');
        $(current).addClass('AnimateDownOut');
        $(next).addClass('AnimateDownIn');
        setCurrentItem(current, next);
        $('body').on(animEndEventName, function () {
            $(current).removeClass('AnimateDownOut');
            $(next).removeClass('AnimateDownIn');
            $(current).css('overflow', 'initial');
            $(current).addClass('hidden');
            $(next).removeClass('hidden');
            $(next).css('overflow', 'initial');
            $('body').removeClass('bodyAnimate');
            $(next).css('height', '100%');
            // $(next+'>.BodyArrowDownDiv').removeClass('hidden')
            currentpage = next;

        })
    }

    /////////////////////////////////////////////////////////
})


//////////////////////Helpers////////////////////////////////
function setCurrentItem(currentI, nextI) {
    if (currentI == '.WelcomeHead') {
        $('#Skills').addClass('currentItem');
    }
    else {
        if (currentI == '.Skills') {
            $('#Skills').removeClass('currentItem');
        }
        else {
            if (currentI == '.Projects') {
                $('#Projects').removeClass('currentItem');
            }
        }
    }

    if (nextI == '.Skills') {
        $('#Skills').addClass('currentItem');
    }
    else {
        if (nextI == '.Projects') {
            $('#Projects').addClass('currentItem');
        }
    }
}
function fireInTheCode(current, next) {
    if (current == '.WelcomeDiv') {
        $('body').trigger('killCmdWriter')
    }
    else {
        if (current == '.WelcomeHead') {
            $('body').trigger('killScrollingDiv')
        }
        else {
            if (next == '.WelcomeHead') {
                $('body').trigger('resumeScrollingDiv')
            }
        }
    }
}
function FadeItIn(current, next) {
    if (current == '.WelcomeDiv' || current == '.WelcomeHead') {
        if (next == '.WelcomeHead') {
            $('.WelcomeTag').addClass('myHidden');
            $('.WelcomeImagediv').addClass('myHidden');
            $('.infoDiv').addClass('myHidden');
            $('.quote').addClass('myHidden');
            $('.BodyArrowDownDiv#Welcome').addClass('myHidden');
            $('body').on(animEndEventName, function () {
                $('.WelcomeTag').fadeIn('slow', function () {
                    $('.WelcomeImagediv').fadeIn('slow', function () {
                        $('.infoDiv').fadeIn('slow', function () {
                            $('.BodyArrowDownDiv#Welcome').fadeIn('slow', function () {
                                $('.quote').fadeIn('slow');
                            });
                        });
                    });
                });
            });
        }
        if (next == '.HomeBody') {
            $('.HBNavX').addClass('myHidden');
            //  $('.HBNavXH').addClass('myHidden');
            // $('.HBNavXName').addClass('myHidden');
            $('.HBNavItem').addClass('myHidden');
            $('body').on(animEndEventName, function () {
                $('.HBNavX').fadeIn('slow', function () {
                    $('.HBNavItem#Skills').fadeIn('slow', function () {
                        $('.HBNavItem#Projects').fadeIn('slow', function () {
                            $('.HBNavItem#Contact').fadeIn('slow');
                        });
                    });
                });
            });
        }

    }
}
////////////////////////////////////////////////


