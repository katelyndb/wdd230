
const cards = document.querySelector('.cards');
var jsonurl = 'https://katelyndb.github.io/wdd230/chamber/data.json';
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
    let counter = 0
    data.companies.forEach(company => {
    counter += 1
    if ((company.membership == "Silver" || company.membership == "Gold") && counter < 4) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let icon = document.createElement('img');
    let p = document.createElement('p');
    let pmember = document.createElement('p');
    let a = document.createElement('a');

    h2.innerHTML = `${company.name}`;
    card.setAttribute = ('class', 'company_card');
    icon.setAttribute('src', company.iconname);
    icon.setAttribute('alt', `Icon of  ${company.name}`);
    icon.setAttribute('loading', 'lazy');
    p.innerHTML =`<b>Address</b>: ${company.address} <br> <b>Phone Number </b>: ${company.phonenum}`;
    a.setAttribute('href', company.weburl);
    a.innerHTML = 'Link to Website';
    a.setAttribute('target', '_blank');
    if (company.memberyear == 1 || company.memberyear == 0 ){
      pmember.innerHTML = `<b>Membership Level</b>: ${company.membership} <br> First year as a valued member!`;
    }else{
      pmember.innerHTML = `<b>Membership Level</b>: ${company.membership} <br> <strong>${company.memberyear} </strong> years as a valued member!`;
    }
    if ((company.membership == "Silver" || company.membership == "Gold") && counter < 4) {
    card.append(h2);
    card.append(icon);
    card.append(a);
    card.append(p);
    card.append(pmember);
    cards.append(card);
    }
    }
  });
}
getCompanies(jsonurl);