class Division{
	 constructor{

	 }
}

class Person{
	 //biography should be a markdown text
	 constructor(name, img_url, designation, bio){
		 if(name === undefined){
			 //throw some error
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
