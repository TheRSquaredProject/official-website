$(document).ready(()=>{
    $('img').each(function () {
        var imgurl = $(this).attr('data-src');
        if (imgurl) {
            $(this).attr('src', imgurl);
        }
    });
});