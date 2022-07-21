const temple_cards = document.querySelector('.temple_container');
var jsonurl = 'https://katelyndb.github.io/wdd230/final/temples.json';

async function getTemples(requesturl) {
	const response = await fetch(requesturl);
	console.log(response);
	if (response.ok) {
		const data = await response.json();
		makeTempleCards(data);
	} else {
		throw Error(response.statusText);
	}
}

async function makeTempleCards(data) {
    
	let color_iterator = 0;
	console.log(data);
	data.temples.forEach(temple => {
		color_iterator = color_iterator + 1;
        console.log(color_iterator);
		if (color_iterator > 2) {
			color_iterator = 0;
		}
		let card = document.createElement('div');
		let h2 = document.createElement('h2');
		let icon = document.createElement('img');
		let contact = document.createElement('p');
		let services = document.createElement('p');
		let dedicated = document.createElement('p');
		let closure = document.createElement('p');
		let like_button = document.createElement('img')
		h2.innerHTML = `${temple.name}`;
		if (color_iterator == 0) {
			card.setAttribute ('class', 'content_box_blue');
		} else if (color_iterator == 1) {
			card.setAttribute ('class', 'content_box_gray');
		} else if (color_iterator == 2) {
			card.setAttribute ('class', 'content_box_dark');
		}
		like_button.setAttribute('src', "images/heart_empty.png");
		like_button.setAttribute('alt', `Like button icon`);
		like_button.setAttribute('class', "main_img like_button");
		like_button.setAttribute('onclick', "toggleLike(this)");
		icon.setAttribute('src', temple.image);
		icon.setAttribute('alt', `Picture of  ${temple.name}`);
		icon.setAttribute('loading', 'lazy');
		icon.setAttribute('class', "main_img temple_json_img");
		let picture_holder = document.createElement('div');
		picture_holder.setAttribute('class', 'temple_img_holder')
		contact.innerHTML = `<h4>Address:</h4> ${temple.address} <br> <h4>Phone Number:</h4> ${temple.telephone}`;
		services.innerHTML = `<h4>Services:</h4> ${temple.services}`;
		dedicated.innerHTML = `<h4>Dedicated:</h4> ${temple.dedicated} `;
		closure.innerHTML = `<h4>Temple Closures:</h4> ${temple.closure}`;
		card.append(h2);
		picture_holder.append(icon);
		card.append(contact);
		card.append(dedicated);
		card.append(services);
		card.append(closure);
		card.append(like_button);
		temple_cards.append(picture_holder)
		temple_cards.append(card);
	});
}

getTemples(jsonurl);
