function divSelectorClassRemover(hoveredDivIndex, divIndexToRemove=4){
	if(divIndexToRemove > hoveredDivIndex){
		$('.div-selector-container').removeClass('div'+(divIndexToRemove+1));
		$('.division-container:first-child').removeClass('divC'+(divIndexToRemove+1))
		divSelectorClassRemover(hoveredDivIndex, divIndexToRemove-1);
	}else{
		return 0;
	}
}

function outClickListener(){
	if(!$(event.target).closest('#pop-up-window').length) {
		if($('.pop-up-container')[0].classList.contains('pop-up-shown')) {
			$('.pop-up-container')[0].classList.remove('pop-up-shown');
			$('.pop-up-container')[0].classList.add('pop-up-hidden');
		}
	}
}

//<div id="pop-up-window" class="pop-up">
//	<div class="profile-data">
//		<img src="members/intekhab_hossain.jpg">
//		<div class="info">
//			<span class="name"></span>
//			<span class="designation"></span>
//			<span class="project-name"></span>
//		</div>
//		<div class="social-links">
//			<a href="#"><img src="icons/email.svg"></a>
//			<a href="#"><img src="icons/facebook.svg"></a>
//			<a href="#"><img src="icons/instagram.svg"></a>
//			<a href="#"><img src="icons/twitter.svg"></a>
//		</div>
//		<img src="icons/cross.svg" class="cross">
//	</div>
//
//	<div class="bio">
//		<div class="info">
//			<div class="line">
//				<span class="title"></span>
//				<p></p>
//			</div>
//			<div class="line">
//				<span class="title"></span>
//				<p></p>
//			</div>
//			<div class="line">
//				<span class="title"></span>
//				<p></p>
//			</div>
//		</div>
//
//		<div class="main-bio">
//			<p> </p>
//		</div>
//	</div>
//</div>


function getChild(elem, className){
	var childs = [];
	for (var i = 0; i < elem.childNodes.length; i++) {
		if (elem.childNodes[i].className == className) {
		  childs.push(elem.childNodes[i]);
		}
	}
	return childs;
}

function populatePop_Up(popUp, person){
	let profile_data = getChild(popUp, 'profile-data')[0];
		let img = profile_data.children[0];
		let profile_info = getChild(profile_data, 'info')[0];
			let name = getChild(profile_info, 'name')[0];
			let designation = getChild(profile_info, 'designation')[0];
			let project_name = getChild(profile_info, 'project-name')[0];
		let social_links = getChild(profile_data, 'social-links')[0];
			let email = getChild(social_links, 'email')[0];
			let facebook = getChild(social_links, 'facebook')[0];
			let instagram = getChild(social_links, 'instagram')[0];
			let twitter = getChild(social_links, 'twitter')[0];
	let bio = getChild(popUp, 'bio')[0];
		let bio_info = getChild(bio, 'info')[0];
			let info_lines = getChild(bio_info, 'line');
				let line_title = [];
				let line_p = [];
				info_lines.forEach(function(elem){
					line_title.push(getChild(elem, 'title')[0]);
					line_p.push(getChild(elem, 'data')[0]);
				})
		let main_bio = getChild(bio, 'main-bio')[0];

	let getPersonChildren = person.getElementsByClassName('details')[0].getElementsByClassName.bind(person);
	let img_link = person.getElementsByClassName('display-picture')[0].children[0].getAttribute('src');
	img.setAttribute('src', img_link);
	name.textContent = getPersonChildren('name')[0].children[0].textContent;
	designation.textContent = getPersonChildren('designation')[0].textContent;
	project_name.textContent = getPersonChildren('project-name')[0].textContent;
	email.setAttribute('href', getPersonChildren('email')[0].textContent);
	facebook.setAttribute('href', getPersonChildren('facebook')[0].textContent);
	instagram.setAttribute('href', getPersonChildren('instagram')[0].textContent);
	twitter.setAttribute('href', getPersonChildren('twitter')[0].textContent);
	line_title.forEach(function(elem, i){
		elem.textContent = getPersonChildren('line')[i].getElementsByClassName('title')[0].textContent;
	})
	line_p.forEach(function(elem, i){
		elem.textContent = getPersonChildren('line')[i].getElementsByClassName('data')[0].textContent;
	})
	main_bio.textContent = getPersonChildren('main-bio')[0].textContent;
}

$(document).ready(function(){
	$('.div-name').hover(function(){
		let divIndex = $('.div-name').index(this);
		divSelectorClassRemover(divIndex);
		$('.div-selector-container').addClass('div'+(divIndex+1));
		$('.division-container:first-child').addClass('divC'+(divIndex+1))
	})

	$(".person").click(function(){
		$('.pop-up-container')[0].classList.add("pop-up-shown");
		$('.pop-up-container')[0].classList.remove("pop-up-hidden");
		populatePop_Up(document.getElementsByClassName('pop-up')[0], this);
	})

	$(".cross").click(function(){
		$('.pop-up-container')[0].classList.remove("pop-up-shown",
			$('.pop-up-container')[0].classList.add("pop-up-hidden"));
	})

})
