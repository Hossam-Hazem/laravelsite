$(document).ready(function () {
    //vars
    $(window).load(function(){
        $('.enter').html('Website Loaded');
        setTimeout(function(){
            $('.enter').html('<a class="skipButton">Skip>></a>')
        },5000);


    })
    $('.WelcomeDiv').on('click','.skipButton',function(){
        console.log('ha3')
        animateIt('.WelcomeDiv','.WelcomeHead','AnimateUpOut','noAnim');
    })
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
   /* setTimeout(function () {
        $('.WelcomeHead').width($(window).width());
        $('.WelcomeHead').height($(window).height());
    }, 50)*/
    //  $('.WelcomeHead').width($(window).width());

    $('.infoDiv').height($(window).height() - $('.WelcomeHeadHeader').height() - 80);
    //noinspection JSJQueryEfficiency
    console.log( $('.Header').height());
    $('.Skills').css('top', $('.Header').height());
    $('.Projects').css('top', $('.Header').height())

    /*Welcome page scroller

     */
    scrollingDiv();
    var c = 0;
    var l = $('.scrolling').children().length;
    var scrollinginterval = setInterval(function () {
        scrollIt('down', c, l)
        c = (c + 1) % l
    }, 3000)
    ///////////////////////

    setTimeout(function() {
        $('.WelcomeHead').addClass('hidden');
        $('.HomeBody').addClass('hidden');
        $('.Projects').addClass('hidden');
    },3000);
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
    $('.Stars').on('mouseover', '.rateitstar', function () {
        $(this).removeClass('glyphicon-star-empty').addClass('glyphicon-star')
        $(this).prevAll().removeClass('glyphicon-star-empty').addClass('glyphicon-star')

    });
    $('.Stars').on('mouseleave', '.rateitstar', function () {
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
    $('.BodyArrowDownDiv').click(function () {
        var id =$(this).attr('id')
        if (id == 'Welcome') {
            animateIt('.WelcomeHead', '.HomeBody','AnimateUpOut','AnimateUpIn');
        }
        else if(id =='Skills'){
            animateIt('.Skills', '.Projects','AnimateUpOut','AnimateUpIn');

        }
        else if(id=='Projects'){
            $contact = $('.ContactMe');
            setTimeout(function(){
                $contact.fadeIn();
                },500)

        }
    })
    $('.BodyArrowUpDiv').click(function () {
        var id =$(this).attr('id')
        if (id == 'Skills') {
            animateIt('.HomeBody', '.WelcomeHead','AnimateDownOut','AnimateDownIn');
        }
        else if(id =='Projects'){
            animateIt('.Projects', '.Skills','AnimateDownOut','AnimateDownIn');
        }

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
    $('.sendButton').click(function(event){
        event.preventDefault();
        var token = $('#token').val();
        var ContactContent = {
            _token: token,
            name: $('.contactName').val(),
            email: $('.contactEmail').val(),
            message: $('.contactMessage').val()
        }
        console.log(ContactContent)
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
    $('.HBNavItem').click(function(){
        console.log('ha31');
        $item=$(this).attr('id');
        if($item=='Projects'){
            if(currentpage=='.Skills' ||currentpage=='.HomeBody') {
                console.log('ha32');
                animateIt('.Skills', '.Projects','AnimateUpOut','AnimateUpIn');
                $(document).scrollTop(0)
            }
        }
        if($item='Skills'){
            if(currentpage=='.Projects') {
                console.log('ha32');
                animateIt('.Projects', '.Skills','AnimateDownOut','AnimateDownIn');
                $(document).scrollTop(0)
            }
        }
        if($item=='Contact'){
            $contact = $('.ContactMe');
            setTimeout(function(){
                $contact.fadeIn();
            },500)
        }
    })
    $('.footerEMob').click(function(){
        var id = $(this).attr('id');
        if(id=='footerEmailIcon'){
            console.log('foo')
            $('.footerMobile').slideUp('slow',function() {
                $('.footerMobile').removeClass('footerSelected');
                $('#footerMobileIcon').removeClass('footerSelected');
                $('.footerEmail').slideDown('slow');
                $('.footerEmail').css('display', 'inline-block');
                $('.footerEmail').addClass('footerSelected');
                $('#footerEmailIcon').addClass('footerSelected');
            });
        }
        else {
            $('.footerEmail').slideUp('slow', function () {
                $('.footerEmail').removeClass('footerSelected');
                $('#footerEmailIcon').removeClass('footerSelected');
                $('.footerMobile').slideDown('slow');
                $('.footerMobile').css('display', 'inline-block');
                $('.footerMobile').addClass('footerSelected');
                $('#footerMobileIcon').addClass('footerSelected');
            })
        }

    })
    /*$(window).scroll(function () {
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
     });*/


    function animateIt(current, next,animOut,animIn) {
       // $(next+'>.BodyArrowDownDiv').addClass('hidden')
        $(document).scrollTop(0)
        setTimeout(function() {
            $(next).removeClass('hidden');
            $('body').addClass('bodyAnimate');
            $(current).css('height', '' + ($(window).height() - $('.Header').height()));
            if (current != '.WelcomeHead') {
                $(current).css('overflow', 'hidden');
            }
            $(next).css('height', '' + ($(window).height() - $('.Header').height()));
            $(next).css('overflow', 'hidden');
            $(current).addClass(animOut);
            $(next).addClass(animIn);
            setCurrentItem(current, next)
            $('body').on(animEndEventName, function () {
                $(current).removeClass(animOut);
                $(next).removeClass(animIn);
                $(current).addClass('hidden');
                $(next).removeClass('hidden');
                if(next!='.WelcomeHead'){
                    //$(next).css('margin-top',$('.Header').height());
                }
                else{
                    $(next).css('height', '100%');
                }
                $(next).css('overflow', 'initial');
                $('body').removeClass('bodyAnimate');
                //$(next).css('height', '100%');

                //  $(next+'>.BodyArrowDownDiv').removeClass('hidden')
                currentpage = next;

            })
        },500);
    }


function GetUp(current, next,clip) {
    //$(next+'>.BodyArrowDownDiv').addClass('hidden')
    $(next).removeClass('hidden');
    $('body').addClass('bodyAnimate');
    if(clip==true) {
        $(current).css('height', '' + ($(window).height() - $('.Header').height()));
        if (current != '.WelcomeHead') {
            $(current).css('overflow', 'hidden');
        }
    }
    $(next).css('height', '' + ($(window).height() - $('.Header').height()));
    $(next).css('overflow', 'hidden');
    $(current).addClass('AnimateDownOut');
    $(next).addClass('AnimateDownIn');
    setCurrentItem(current,next);
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
})

function setCurrentItem(currentI,nextI){
    if(currentI=='.WelcomeHead'){
        $('#Skills').addClass('currentItem');
    }
    if(currentI=='.Skills'){
        $('#Skills').removeClass('currentItem');
    }
    if(currentI=='.Projects'){
        $('#Projects').removeClass('currentItem');
    }
    if(nextI=='.Skills'){
        $('#Skills').addClass('currentItem');
    }
    if(nextI=='.Projects'){
        $('#Projects').addClass('currentItem');
    }

}

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

