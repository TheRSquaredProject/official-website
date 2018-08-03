
class Person{
	 //biography should be a markdown text
	 constructor(name, img_url, designation, bio){
		 if(name === undefined){
			console.log("Error with Person object")
		 }
		 this.name = name;
		 this.img_url = img_url;
		 this.desgination = designation;
		 this.bio = bio;
		 this.DOMnode = document.createElement('div');
		 this.DOMnode.className += "person";

		 let containerElem;
		 containerElem = document.createElement('div');
		 containerElem.className += "name";  //name element
		 let nameElem = document.createElement('span');
		 	nameElem.value = this.name;
		 containerElem.appendChild(document.createElement('span'));
		 this.DOMnode.appendChild(containerElem);

		 containerElem = document.createElement('div');
		 containerElem.className += "display_picture";
		 let imgElem = document.createElement('img');
		 	 imgElem.setAttribute('src', img_url);
		 containerElem.appendChild(imgElem);
		 this.DOMnode.appendChild(containerElem);

		 containerElem = document.createElement('div');
		 containerElem.className += "designation";
		 let designationEleme = document.createElement('div');
		 	 designationEleme.value = designation;
		 containerElem.appendChild(designationEleme);
		 this.DOMnode.appendChild(containerElem);

		 let bioElem = document.createElement('p');
		 	 bioElem.classList.add('hidden');
		 	 bioElem.value = bio;
		 this.DOMnode.appendChild(bioElem);
     }
}


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


//this function is FILLED with bugs. have to change the whole thing later
function getChild(elem, className){
	var childs = [];
	for (var i = 0; i < elem.childNodes.length; i++) {
		if(elem.childNodes[i].className){
			if (elem.childNodes[i].className.includes(className)) {
			  childs.push(elem.childNodes[i]);
			}
		}
	}
	return childs;
}

function populatePop_Up(popUp, person, populate){
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

	if(populate){
		let getPersonChildren = person.getElementsByClassName('details')[0].getElementsByClassName.bind(person);
		let img_link = person.getElementsByClassName('display-picture')[0].children[0].getAttribute('src');
		img.setAttribute('src', img_link);
		name.textContent = getPersonChildren('name')[0].children[0].textContent;
		designation.textContent = getPersonChildren('designation')[0].textContent;
		project_name.textContent = getPersonChildren('project-name')[0].textContent;

		if(getPersonChildren('twitter')[0].textContent == ""){
			twitter.classList.add('hide');
		}else{
			twitter.classList.remove('hide');
			twitter.setAttribute('href', getPersonChildren('twitter')[0].textContent);
		}

		if(getPersonChildren('facebook')[0].textContent == ""){
			facebook.classList.add('hide');
		}else{
			console.log("ne");
			facebook.classList.remove('hide');
			console.log(facebook.classList);
			facebook.setAttribute('href', getPersonChildren('facebook')[0].textContent);
		}

		if(getPersonChildren('email')[0].textContent == ""){
			email.classList.add('hide');
		}else{
			email.classList.remove('hide');
			email.setAttribute('href', 'mailto:'+getPersonChildren('email')[0].textContent);
		}

		if(getPersonChildren('instagram')[0].textContent == ""){
			instagram.classList.add('hide');
		}else{
			instagram.classList.remove('hide');
			instagram.setAttribute('href', getPersonChildren('instagram')[0].textContent);
		}

		line_title.forEach(function(elem, i){
			elem.innerHTML = getPersonChildren('line')[i].getElementsByClassName('title')[0].innerHTML;
		})
		line_p.forEach(function(elem, i){
			elem.innerHTML = getPersonChildren('line')[i].getElementsByClassName('data')[0].innerHTML;
		})
		main_bio.innerHTML = getPersonChildren('main-bio')[0].innerHTML;
	}else{
		let getPersonChildren = person.getElementsByClassName('details')[0].getElementsByClassName.bind(person);
		let img_link = person.getElementsByClassName('display-picture')[0].children[0].getAttribute('src');
		img.setAttribute('src', "");
		name.textContent = "";
		designation.textContent = "";
		project_name.textContent = "";
		email.setAttribute('href', "#");
		facebook.setAttribute('href', "#");
		instagram.setAttribute('href', "#");
		twitter.setAttribute('href', "#");
		line_title.forEach(function(elem, i){
			elem.textContent = "";
		})
		line_p.forEach(function(elem, i){
			elem.textContent = "";
		})
		main_bio.innerHTML = "";
	}
}


$(document).ready(function(){
	$('.div-name').click(function(){
		let divIndex = $('.div-name').index(this);
		divSelectorClassRemover(divIndex);
		//$('.div-selector-container').addClass('div'+(divIndex+1));
		$('.div-name').removeClass('position-selected');
		$(this).addClass('position-selected');
		$('.division-container:first-child').addClass('divC'+(divIndex+1))
	});
	
	var currentPerson = "";
	$(".person").click(function(){
		$('.pop-up-container')[0].classList.add("pop-up-shown");
		$('.pop-up-container')[0].classList.remove("pop-up-hidden");
		populatePop_Up(document.getElementsByClassName('pop-up')[0], this, true);
		currentPerson = this;
	});

	$(".cross").click(function(){
		$('.pop-up-container')[0].classList.remove("pop-up-shown",
			$('.pop-up-container')[0].classList.add("pop-up-hidden"));
			populatePop_Up(document.getElementsByClassName('pop-up')[0], currentPerson, false);
	});

})
