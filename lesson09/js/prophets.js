

const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
  let response = await fetch(URL)
  if (response.ok) {
    let data = await response.json();
    //console.log(data);
    makeProphetCards(data);

  }else{
    throw Error(response.statusText);
  }
}

async function makeProphetCards(data) {
  console.log(data);
  data.prophets.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let date = document.createElement('p');
    let place = document.createElement('p');

    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    date.innerHTML =`Date of Birth: ${prophet.birthdate}`;
    place.innerHTML =`Place of Birth: ${prophet.birthplace}`;
    card.append(h2);
    card.append(place);
    card.append(date);
    card.append(portrait);
    cards.append(card);
  });
}


getProphets();




/*

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

  





  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let date = document.createElement('p')
    let place = document.createElement('p')
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    date.textContent = `Date of Birth: ${prophet.birthdate}`
    place.textContent = `Place of Birth: ${prophet.birthplace}`
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    ____.setAttribute('src', prophet.imageurl);
    ____.setAttribute();
    ____
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(date);
    card.appendChild(place)
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
  */
