/*
Tikslas: Sugeneruoti sąrašą, sudarytą iš pirkinių:
const shoppingList = [
    { name: "Duona", price: 1.491 },
    { name: "Pienas", price: 0.9923 },
    { name: "Sūris", price: 3.789 },
    { name: "Kiaušiniai", price: 2.392 },
    { name: "Bananas", price: 1.194 }
];

Komentaras:
Pridėkite skirtingą spalvą kainai atvaizduoti. Pridėjus papildomą pirkinį į masyvą, HTML turėtų pasikeisti automatiškai.
*/

const shoppingList = [
    { name: "Duona", price: 1.491 },
    { name: "Pienas", price: 0.9923 },
    { name: "Sūris", price: 3.789 },
    { name: "Kiaušiniai", price: 2.392 },
    { name: "Bananas", price: 1.194 }
];

let list = "";
function kurti_saraso_HTML(){
    for (const i in shoppingList){
        list += `<li>${shoppingList[i].name} - <span class="blue">${Number(shoppingList[i].price).toFixed(2)} &#8364</span></li>`;
    }
    return `<ul>${list}</ul>`
}

document.querySelector("#pirkiniu_sarasas").innerHTML = kurti_saraso_HTML();
