function scrollSection(){
	alert("gg");
}

$(document).ready(function(){
	/*$(function() {
		$.scrollify({
			section : ".scrollify",
			//scrollbars: false,
			scrollSpeed: 800,
		});
	});*/


	//automatically resizing textarea
	var resizingTextareas = [].slice.call(document.querySelectorAll('textarea[autoresize]'));

	resizingTextareas.forEach(function(textarea) {
	  textarea.addEventListener('input', autoresize, false);
	});

	function autoresize() {
	  this.style.height = 'auto';
	  this.style.height = this.scrollHeight+'px';
	  this.scrollTop = this.scrollHeight;
	  window.scrollTo(window.scrollLeft,(this.scrollTop + this.scrollHeight));
	}


	//change content according to the form name hovered on
	var formOptions =  $('.form-option');
	$('.form-option').hover(function(){
		console.log(this);
		let index = $('.form-option').index(this);
		console.log(index);
		if(index == 0){
			$('.form-arrow').removeClass('arrow-right');
			$('.form-arrow').addClass('arrow-left');
			$('.contact-us-form').removeClass('go-left');
			$('.be-a-volunteer-form').removeClass('be-a-volunteer-fade-in');

		}else if(index == 1){
			$('.form-arrow').removeClass('arrow-left');
			$('.form-arrow').addClass('arrow-right');
			$('.contact-us-form').addClass('go-left');
			$('.be-a-volunteer-form').addClass('be-a-volunteer-fade-in');
		}
	})



	//check for the scroll even and add or remove the 'nav-container-fixed' class when scrolled past a certain point
	function checkScroll(){
		console.log("called");
		if(document.body.scrollTop >= $('.land').height()){
			$('.nav-container').addClass('nav-container-fixed');
		}else{
			//console.log("g");
			$('.nav-container').removeClass('nav-container-fixed');
		}
	}
	document.Onscroll = checkScroll(); 		//it gets called only once when the page is loaded and never gets called later when scrolled.

//	var j = jQuery.noConflict();
//    j( function() {
//        j(".form-container textarea").autoResize();
//    } );
//	var $sections = [$(".land"), $(".land"), $(".what-we-do-container"), $(".about-us-container"), $(".about-us-container")];
//	var $current = null;
//	var lastScrollTop = 0;
//	function scrollSection(){
//		var $window = $(window);
//		for(var i=1; i<$sections.length; i++){
//			if($sections[i] != null){
//				//console.log($sections[i].attr('class'));
//				if($sections[i].offset().top < $(window).scrollTop()+15 && $sections[i].offset().top > $(window).scrollTop()-15){
//						$current = $sections[i];
//						//console.log($current.attr('class'));
//				}
//			}
//		}
//		if($(window).scrollTop() > lastScrollTop+20){
//			lastScrollTop = $(window).scrollTop();
//			console.log("fire one");
//			console.log("Scroll to " +  $sections[$sections.indexOf($current)+1].attr('class'));
//					$('html, body').animate({
//						scrollTop: $sections[$sections.indexOf($current)+1].height()
//					}, 1000);
//				}else if($(window).scrollTop() < lastScrollTop-20){
//					lastScrollTop = $(window).scrollTop();
//					console.log("fire two");
//					console.log("Scroll to " +  $sections[$sections.indexOf($current)-1].attr('class'));
//					$('html, body').animate({
//						scrollTop: $sections[$sections.indexOf($current)-1].height()
//					}, 1);
//		}
		/*
		$sections.forEach(function(){
			let $element = $(this);
			if($element.offset().top > window.scrollTop){ console.log($element); }
		})*/
		/*$('html, body').animate({
			scrollTop: $(".land").height()
		}, 2000);*/
		//alert("gg");
//	}
})
