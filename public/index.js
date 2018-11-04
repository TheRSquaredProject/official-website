$(document).scroll(()=>{
    //parallax code
    if($('.goal-image').css('display')!='none'){ //disable parallax on mobile devices
        $(".cover-picture").animate({'margin-top': -$(this).scrollTop()/2}, 0);
    }
});
$(document).ready(()=>{
    $(".image-container").hover(()=> {
        $(".photo-credits").css('opacity', '1');
    });
    $(".image-container").mouseleave(()=> {
        $(".photo-credits").css('opacity', '0');
    });
});
