const my_button_Ellement = document.querySelector("#my-button");
const pavadinimo_ivesties_el = document.querySelector("#pavadinimas");
const spalvos_ivesties_el = document.querySelector("#spalva");
const uzapvalinimo_ivesties_el = document.querySelector("#uzapvalinimas");
const soniniu_parasc_ivesties_el = document.querySelector("#son_parastes");
const virs_apat_parasc_ivesties_el = document.querySelector("#virs_apat_parastes");
const krast_spalvos_ivesties_el = document.querySelector("#krast_spalva");
const krast_storio_ivesties_el = document.querySelector("#krast_storis");
const krast_stiliaus_ivesties_el = document.querySelector("#krast_stilius");

function pavadinti(){
    let pavadinimas = pavadinimo_ivesties_el.value;
    my_button_Ellement.innerHTML = pavadinimas;
}

// Stilius per js redaguojamas naudojant komandą:
// const mygtukoElementas = document.querySelector(“#my-button”);

// //kai css savybė turi pavadinimą iš 2 žodžių pvz: font-size, jis 
// užrašomas //camelCase būdu, kad jį pakeisti per JS.

// mygtukoElementas.style.fontSize = “10px”;
function pakeisti_spalva(){
    let fono_spalva = spalvos_ivesties_el.value;
    my_button_Ellement.style.backgroundColor = fono_spalva;
}

function uzapvalinti_kampus(){
    let kiek_apvalinti = 0;
    kiek_apvalinti = uzapvalinimo_ivesties_el.value;
    my_button_Ellement.style.borderRadius = kiek_apvalinti;
}

function atstumti_nuo_krastu(){
    let parastes = 0;
    parastes = soniniu_parasc_ivesties_el.value;
    my_button_Ellement.style.paddingRight = parastes;
    my_button_Ellement.style.paddingLeft = parastes;
}

function atstumti_nuo_virs_apac(){
    let parastes = 0;
    parastes = virs_apat_parasc_ivesties_el.value;
    my_button_Ellement.style.paddingTop = parastes;
    my_button_Ellement.style.paddingBottom = parastes;
}

function nustatyti_krast_stori_spalva(){
    let storis = "1px";
    storis = krast_storio_ivesties_el.value;
    let spalva = krast_spalvos_ivesties_el.value;
    my_button_Ellement.style.borderColor = spalva;
    my_button_Ellement.style.borderWidth = storis;
}

function nustatyti_krast_stiliu(){
    let stilius = "solid";
    stilius = krast_stiliaus_ivesties_el.value;
    my_button_Ellement.style.borderStyle = stilius;
}