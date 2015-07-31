$(document).ready(function(){
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
})