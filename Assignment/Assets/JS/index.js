$(document).ready(function () {


    if (document.body.clientWidth < 480) {

        $('.testimonal.image').children().removeClass('col-md-3')
        $('.testimonal.image').children().removeClass('col-md-5')

    }
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        return false;
    });


});

$(document).on('click','.know-more', function(){
    if($(this).text() == "Know More"){
    $(this).parent().find('.see-more').slideToggle(700);
$(this).text("Know Less")
    }
    else{
         //$(this).parent().find('.see-more').hide();
            $(this).parent().find('.see-more').slideToggle(700);
$(this).text("Know More")
    }
})


