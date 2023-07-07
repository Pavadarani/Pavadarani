$(document).ready(function(){

    $('.menu').click(function(){
        $(this).toggleClass('close-outline');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('.close').removeClass('close-outline');
        $('header').removeClass('toggle');

    });
});
