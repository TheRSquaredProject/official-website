$(document).ready(()=>{
    $('img').each(function () {
        var imgurl = $(this).attr('data-src');
        if (imgurl && $(this).css('display')!='none') {
            $(this).attr('src', imgurl);
        }
    });
    $('.secure-img').bind('contextmenu', function(e) {return false;});
});
