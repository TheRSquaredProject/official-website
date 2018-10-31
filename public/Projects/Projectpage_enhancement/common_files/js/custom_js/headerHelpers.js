window.addEventListener('scroll', function(){
	if(window.pageYOffset > document.getElementsByClassName('nav-logo')[0].offsetHeight){
		document.getElementsByClassName('nav-container')[0].classList.add('nav-fixed');
		var items = document.getElementsByClassName('nav-item');
		for(let i=0; i<items.length; i++){
			items[i].classList.remove('index-nav-item');
		}
	}else{
		document.getElementsByClassName('nav-container')[0].classList.remove('nav-fixed');
		var items = document.getElementsByClassName('nav-item');
		for(let i=0; i<items.length; i++){
			items[i].classList.add('index-nav-item');
		}
	}
});

$(document).ready(function() {
    $('a[href^="#"]').click(function(event) {
        var target = $($(this).attr("href")).offset().top - 140;
        $('html').animate({scrollTop:target}, 300);
        event.preventDefault();
    });
});
