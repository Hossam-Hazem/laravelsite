$(document).ready(function(){
    console.log('document width = '+$(document).width()+' height = '+$(window).height())
    var width = $(document).width();
    $('.WelcomeHead').width(width);
    $('.WelcomeHead').height($(window).height());
    console.log('width = '+$('.WelcomeHead').width()+' height = '+$('.WelcomeHead').height())
    scrollingDiv();










    $(window).resize(function() {
        $('.WelcomeHead').width($(window).width());
        $('.WelcomeHead').height($(window).height());

    });
})


function scrollingDiv(){
    $('.scrolling').children().not('#e0,#e1,#e2,#e3,#e4').css('display','none').addClass('hidden');
    $('.scrolling>#e0').addClass('LowOpacity');
    $('.scrolling>#e1').addClass('MedOpacity');
    $('.scrolling>#e3').addClass('MedOpacity');
    $('.scrolling>#e4').addClass('LowOpacity');
    setTimeout(function(){scrollIt(0,$('.scrolling').children().length)},3000);
}
function scrollIt(c,l){
    var $tmpout=$('.scrolling>#e'+c);
    cn=(c+1)%l;
    var $tmpin = $('.scrolling>#e'+((cn+4)%l))
    console.log($tmpin)
    $tmpout.slideUp('slow',function(){
        $tmpout.addClass('hidden')
        console.log('c = ' + c+' cn = '+cn )
        $('.scrolling>#e'+c).removeClass('LowOpacity');
        $('.scrolling>#e'+(c+4)).removeClass('LowOpacity');
        $('.scrolling>#e'+(c+1)).removeClass('MedOpacity');
        $('.scrolling>#e'+(c+3)).removeClass('MedOpacity');
        $tmpout.remove();
        $('.scrolling').append($tmpout);

        $('.scrolling>#e'+cn).addClass('LowOpacity');
        $('.scrolling>#e'+((cn+4)%l)).addClass('LowOpacity');
        $('.scrolling>#e'+((cn+1)%l)).addClass('MedOpacity');
        $('.scrolling>#e'+((cn+3)%l)).addClass('MedOpacity');
        $tmpin.removeClass('hidden');
        $tmpin.fadeIn('slow',function(){
            setTimeout(function () {
                scrollIt(cn, l);
            }, 10000);
        })

    });
}
