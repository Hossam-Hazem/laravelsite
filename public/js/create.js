$(document).ready(function(){
     var c =0;
    $(".photob").on('click', function(e){
        e.preventDefault();
        $('#i'+c).trigger('click');
    });




    $('#photo').on('change','.photoi',function(e){
        $('.photob').before("<button class='cancelb btn btn-default' id='i"+c+"'>x</button>"+"<span id='i"+c+"'>"+ $(this)[0].files[0].name+'</br>')+"</span>";
        c++;
        $('#photo').append('<input accept="image/*" class="invisible photoi" name="photo'+c+'" type="file" id =i'+c+'>');
    })

    $(document).on('click','.cancelb',function(event){
        event.preventDefault();
        var id =$(this).attr('id');
        console.log(id);
        $("input#"+id).remove();
        $("span#"+id).remove();
        $(this).remove();
    })
    $('#submit').click(function(){
        $('#i'+c).remove();
    })
})