window.addEventListener('scroll', function(){
	if(window.pageYOffset > document.getElementsByClassName('land')[0].offsetHeight){
		document.getElementsByClassName('nav-container')[0].classList.add('nav-fixed');
	}else{
		document.getElementsByClassName('nav-container')[0].classList.remove('nav-fixed');
	}
})
