<<<<<<< HEAD
window.addEventListener('scroll', function(){
	if(window.pageYOffset > document.getElementsByClassName('land')[0].offsetHeight){
		document.getElementsByClassName('nav-container')[0].classList.add('nav-fixed');
	}else{
		document.getElementsByClassName('nav-container')[0].classList.remove('nav-fixed');
	}
})
//-----Google Analytics-------
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-122703977-1');


$(document).ready(function() {
    $('a[href^="#"]').click(function(event) {
        var target = $($(this).attr("href")).offset().top - 140;
        $('body').animate({scrollTop:target}, 300);
        event.preventDefault();
    });
});
