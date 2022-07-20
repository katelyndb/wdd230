
const temple_cards = document.querySelector('.temple_cards');
var jsonurl = 'https://katelyndb.github.io/wdd230/final/temples.json';

async function getTemples(requesturl) {
  const response = await fetch(requesturl);
  console.log(response);
  if (response.ok) {
      const data = await response.json();
      makeTempleCards(data);
  }else{
    throw Error(response.statusText);
  }
}

async function makeTempleCards(data) {
    console.log(data);
    data.temples.forEach(temple => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let icon = document.createElement('img');
    let contact = document.createElement('p');
    let services = document.createElement('p');
    let dedicated = document.createElement('p');
    let closure = document.createElement('p');
    h2.innerHTML = `${temple.name}`;
    card.setAttribute = ('class', 'temple_card');
    icon.setAttribute('src', temple.image);
    icon.setAttribute('alt', `Picture of  ${temple.name}`);
    icon.setAttribute('loading', 'lazy');
    icon.setAttribute('class', "main_img");
    contact.innerHTML =`<h4>Address</h4>: ${temple.address} <br> <h4>Phone Number</h4>: ${temple.telephone}`;
    services.innerHTML =`<h4>Services</h4>: ${temple.services}`;
    dedicated.innerHTML =`<h4>Dedicated<h4>: ${temple.dedicated} `;
    closure.innerHTML =`<h4>Temple Closures</h4>: ${temple.closure}`;
    card.append(h2);
    card.append(icon);
    card.append(contact);
    card.append(dedicated);
    card.append(services);
    card.append(closure);
    temple_cards.append(card);
  });
}
getTemples(jsonurl);
