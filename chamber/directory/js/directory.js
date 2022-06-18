
const cards = document.querySelector('.cards');
var jsonurl = 'https://katelyndb.github.io/wdd230/chamber/directory/data.json';
//import * as data from '........../data.json';
//const {companies} = data;

async function getCompanies(requesturl) {
  const response = await fetch(requesturl);
  console.log(response);
  if (response.ok) {
      const data = await response.json();
      makeCompanyCards(data);
  }else{
    throw Error(response.statusText);
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
    p.innerHTML =`Address: ${company.address} <br> Phone Number: ${company.phonenum}`;
    a.setAttribute('href', company.weburl);
    a.innerHTML = 'Link to Website';
    a.setAttribute('target', '_blank')
    pmember.innerHTML = `Membership Level: ${company.membership} <br> Years as a valued member: <strong>${company.memberyear} </strong>`;
    card.append(h2);
    card.append(icon);
    card.append(a);
    card.append(p);
    card.append(pmember);
    cards.append(card);
  });
}
getCompanies(jsonurl);
