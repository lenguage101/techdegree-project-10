$(document).ready(function(){
	lightbox.option({
		'alwaysShowNavOnTouchDevices' : true,
		'fadeDuration' : 500
	})
	for(let i = 0; i < 12; i++){		
		//Creating the HTML elements
		let $card = $('div.card')[i];
		let $profilePic = document.createElement('div'); 
		$profilePic.className="profile-pic";
		let $picture = document.createElement('img');
		$picture.className = "picture";
		let $pictureLink = document.createElement('a');
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
		$card.appendChild($profileInfo);
		$card.insertBefore($profilePic, $profileInfo);
		$profilePic.appendChild($picture);
		$picture.appendChild($pictureLink);
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
				$pictureLink.href = data.results[0].picture.large;
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
		$pictureLink.setAttribute('data-lightbox', 'img' + i);
	}
	let $card = $('div.card');
	$card.click(function(){
		
	})
})
