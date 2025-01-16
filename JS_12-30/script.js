/* Įsikelkite į kodo viršų šią funkciją:
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//panaudojimo pavyzdys. Panaudojama rand funkcija sugeneruoja atsitiktinį:
//skaičių nuo 1 iki 5  
let iskritesSkaiciusNuo1Iki5 = rand(1, 5);
//skaičių nuo 7 iki 100  
let iskritesSkaiciusNuo1Iki100 = rand(7, 100);

1. Sugeneruokite skaičių nuo 1 iki 6 (taip imituojant kauliuko metimą).
Jį atvaizduokite console.log'e tokiu formatu: "Iškrito kauliukas - 5"
2. Jei iškrito kauliukas - 6          console.log’e() parašykite “Va bank!”
3. Jei iškrito kauliukas - 1    	    console.log’e() parašykite “Whoops!”
4. Jei iškrito lyginis kauliukas      html’e pridėtas div elementas turėtų įgauti reikšmę “Lyginis”, priešingu atveju 
“Nelyginis”;
5. “Išmeskite” dar vieną kauliuką. Jei abu kauliukai buvo 6 - Išskleiskite alert su pranešimu: “Vienas iš 36!” */

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pirmo_kauliuko_skaicius = rand(1, 6);
let antro_kauliuko_skaicius = rand(1, 6);
let kauliuko1_skaicius_Element = document.querySelector("#kauliukas1 .iskrito_akiu");
let kauliuko2_skaicius_Element = document.querySelector("#kauliukas2 .iskrito_akiu");
let kauliuko1_ar_lyginis_Element = document.querySelector("#kauliukas1 .ar_lyginis");
let kauliuko2_ar_lyginis_Element = document.querySelector("#kauliukas2 .ar_lyginis");

console.log(`Pirmas kauliukas - ${pirmo_kauliuko_skaicius}`);
console.log(`Antras kauliukas - ${antro_kauliuko_skaicius}`);

kauliuko1_skaicius_Element.innerHTML = pirmo_kauliuko_skaicius;
kauliuko2_skaicius_Element.innerHTML = antro_kauliuko_skaicius;

if(pirmo_kauliuko_skaicius == 6){
    console.log("Va bank!");
}
else if(pirmo_kauliuko_skaicius == 1){
    console.log("Whoops!");
}

if(antro_kauliuko_skaicius == 6){
    console.log("Va bank!");
}
else if(antro_kauliuko_skaicius == 1){
    console.log("Whoops!");
}

if(pirmo_kauliuko_skaicius % 2 == 0){
    console.log("Lyginis");
    kauliuko1_ar_lyginis_Element.innerHTML = "Lyginis";
}
else {
    console.log("Nelyginis");
    kauliuko1_ar_lyginis_Element.innerHTML = "Nelyginis";
}

if(antro_kauliuko_skaicius % 2 == 0){
    console.log("Lyginis");
    kauliuko2_ar_lyginis_Element.innerHTML = "Lyginis";
}
else {
    console.log("Nelyginis");
    kauliuko2_ar_lyginis_Element.innerHTML = "Nelyginis";
}

if(pirmo_kauliuko_skaicius == 6 & antro_kauliuko_skaicius == 6){
    alert("Vienas iš 36!")
}

if (pirmo_kauliuko_skaicius > antro_kauliuko_skaicius){
    kauliuko1_skaicius_Element.style.backgroundColor = "green";
    kauliuko2_skaicius_Element.style.backgroundColor = "red";
}
else if(antro_kauliuko_skaicius > pirmo_kauliuko_skaicius){
    kauliuko2_skaicius_Element.style.backgroundColor = "green";
    kauliuko1_skaicius_Element.style.backgroundColor = "red";
}
else{
    kauliuko1_skaicius_Element.style.backgroundColor = "orange";
    kauliuko2_skaicius_Element.style.backgroundColor = "orange";
}