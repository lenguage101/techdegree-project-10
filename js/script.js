$(document).ready(function(){
	for(let i = 0; i < 12; i++){		
		//Creating the HTML elements
		let $card = $('div.card')[i];
		let $anchor = document.createElement('a');
		$anchor.className = "modal";
		let $profilePic = document.createElement('div'); 
		$profilePic.className="profile-pic";
		let $picture = document.createElement('img');
		$picture.className = "picture";
		let $profileInfo = document.createElement('div');
		$profileInfo.className = "profile-info";
		let $name = document.createElement('p');
		$name.className = "name";
		let $email = document.createElement('p');
		$email.className = "email";
		let $city = document.createElement('p');
		$city.className = "city";
		let $phone = document.createElement('p');
		$phone.className = "phone";
		let $street = document.createElement('p');
		$street.className = "street";
		let $birthday = document.createElement('p');
		$birthday.className = "birthday";
		//Appending the elements to the divs
		$card.appendChild($anchor);
		$anchor.appendChild($profileInfo);
		$anchor.insertBefore($profilePic, $profileInfo);
		$profilePic.appendChild($picture);
		$profileInfo.appendChild($birthday);
		$profileInfo.insertBefore($street, $birthday);
		$profileInfo.insertBefore($phone, $street);
		$profileInfo.insertBefore($city, $phone);
		$profileInfo.insertBefore($email, $city);
		$profileInfo.insertBefore($name, $email);
		$.ajax({
			//using AJAX from jquery to get info from the random user API
			url: 'https://www.randomuser.me/api/',
			dataType: 'json',
			success: function(data) {
				$picture.src = data.results[0].picture.large;
				$anchor.href = data.results[0].picture.large;
				$name.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
				$email.innerHTML = data.results[0].email;
				$city.innerHTML = data.results[0].location.city;
				$phone.innerHTML = data.results[0].phone;
				$phone.style.display = 'none';
				$street.innerHTML = data.results[0].location.street +
									", " +
									data.results[0].location.city + " " +
									data.results[0].location.state + " " +
									data.results[0].location.postcode;
									;
				$street.style.display = 'none';
				$birthday.innerHTML = 'Birthday: ' + data.results[0].dob;
				$birthday.style.display = 'none';
			}
		})
		$anchor.setAttribute('data-lightbox', 'img-' + i);
		$anchor.setAttribute('data-title', 'Click Outside the modal to exit');
		$anchor.style.color = '#000';
	}
	lightbox.option({
		'alwaysShowNavOnTouchDevices': true,
		'wrapAround': true,
		'sanitizeTitle': true
	})
	let $anchor = $('a');
	//displays the modal with the correct info
	$anchor.on('click', function(){
		//travering through the DOM in order to display modal
		let overlay = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling
			.nextElementSibling.nextElementSibling.nextElementSibling;
		let profileInfo = this.childNodes[1];
		let nav = overlay.firstChild.firstChild.childNodes[1].childNodes;
		console.log(nav);
		//Changing the HTML on each elements.
		for (let i=2; i < 8; i++){
			nav[i].innerHTML = profileInfo.childNodes[i-2].innerHTML;
		}
	})
})
