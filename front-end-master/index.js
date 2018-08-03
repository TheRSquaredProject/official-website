$(document).scroll(()=>{
    //parallax code
    $(".cover-picture").animate({'margin-top': -$(this).scrollTop()/2}, 0);
});