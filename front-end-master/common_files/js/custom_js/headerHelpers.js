window.addEventListener('scroll', function(){
	if(window.pageYOffset > document.getElementsByClassName('nav-logo')[0].offsetHeight){
		document.getElementsByClassName('nav-container')[0].classList.add('nav-fixed');
	}else{
		document.getElementsByClassName('nav-container')[0].classList.remove('nav-fixed');
	}
});

$(document).ready(function() {
    $('a[href^="#"]').click(function(event) {
        var target = $($(this).attr("href")).offset().top - 140;
        $('html').animate({scrollTop:target}, 300);
        event.preventDefault();
    });
});
