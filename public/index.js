$(document).scroll(()=>{
    //parallax code
    $(".cover-picture").animate({'margin-top': -$(this).scrollTop()/2}, 0);
    $(".image-container").hover(()=> {
        $(".photo-credits").css('opacity', '1');
    });
    $(".image-container").mouseleave(()=> {
        $(".photo-credits").css('opacity', '0');
    }); 
});