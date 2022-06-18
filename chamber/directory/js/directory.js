
const cards = document.querySelector('.cards');
var requesturl = '../data.json'
//import * as data from '........../data.json';
//const {companies} = data;
console.log(data); // output 'testing'



async function getPatrons(requesturl) {
  const response = await fetch(requestURL);
  if (response.ok) {
      const data = await response.json();
      makeCompanyCards(data);
  }
}

async function makeCompanyCards(data) {
    console.log(data);
    data.companies.forEach(company => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let icon = document.createElement('img');
    let p = document.createElement('p');
    let pmember = document.createElement('p');
    let a = document.createElement('a');

    h2.innerHTML = `${company.name}`;
    icon.setAttribute('src', company.iconname);
    icon.setAttribute('alt', `Icon of  ${company.name}`);
    icon.setAttribute('loading', 'lazy');
    p.innerHTML =`Address: ${company.adress} <br> Phone Number: ${company.phonenum}`;
    a.setAttribute('href', company.weburl);
    a.setAttribute('value', "DID THIS WORK?");
    pmember.innerHTML = `Membership Level: ${company.membership} <br> Years as a valued member: <strong>${company.memberyear} </strong>`;
    card.append(h2);
    card.append(icon);
    card.append(a);
    card.append(p);
    card.append(pmember);
    cards.append(card);
  });
}
