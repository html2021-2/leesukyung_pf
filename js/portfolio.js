$(document).ready(function(){
    $(window).on('scroll',function(){
        const scrollTop = $(this).scrollTop();

        // 1) intro fade 효과로 올라오기
        let scrollY = $(this).scrollTop() + $(this).height() * 2/3;
        $('.intro').each(function(){
            if (scrollY > $(this).offset().top) {
                $(this).addClass('fade');
            }
            else {
                $(this).removeClass('fade');
            }
        });

        // About
        if (scrollTop >= $('#about').offset().top && scrollTop < $('#about').offset().top + 400) {
            $('#about').addClass('on');
        } else {
            $('#about').removeClass('on');
        }
    });
    $(window).trigger('scroll');

    
});