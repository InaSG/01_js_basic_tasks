const vardo_ivesties_el = document.getElementById("vardas");
const vardo_tikrinimo_el = document.getElementById("vardo_tikrinimas");
const pavardes_ivesties_el = document.getElementById("pavarde");
const pavardes_tikrinimo_el = document.getElementById("pavardes_tikrinimas");
const darb_numerio_ivesties_el = document.getElementById("darb_numeris");
const numerio_tikrinimo_el = document.getElementById("numerio_tikrinimas");
const registr_mygtuko_el = document.getElementById("mygtukas_registruotis");
const registr_patvirtinimo_el = document.getElementById("registr_patvirtinimas");

const registracijos = gauti_registraciju_duomoenis();
console.log(registracijos);
/* Validacija: darbuotojo vardas - nuo 3 iki 50 simbolių, pirma raidė privalo būti didžioji, 
negali būti nei vieno skaičiaus, negali būti nei vieno tarpelio.*/

let ar_teisingas_vardas = 0;
let ar_teisinga_pavarde = 0;
let ar_teisingas_numeris = 0;

function gauti_registraciju_duomoenis(){
    const duomenys = JSON.parse(localStorage.getItem("Registracijos"));
    console.log(`is localStorage gauta: ${duomenys}`)
    if (!duomenys) return [];
    else return (duomenys);
};

vardo_ivesties_el.addEventListener("keydown", (event)=>{
    if (!(event.keyCode === 16 || event.keyCode === 20 || 
        event.keyCode === 8 || (event.keyCode >=65 && event.keyCode <=90) || 
        "ąčęėįšųūĄČĘĖĮŠŲŪ".includes(event.key))){
        event.preventDefault();
        return;
    };
});

vardo_ivesties_el.addEventListener("change", (event)=>{
    if (event.target.value){
        event.target.value = (event.target.value).replace((event.target.value)[0], ((event.target.value)[0]).toUpperCase());
    }

    if (event.target.value.length < 3 ) {
        pranesti_apie_trukumus(vardo_tikrinimo_el, "Vardas negali būti trumpesnis, nei trys raidės");
        ar_teisingas_vardas = 0;
    } else if (event.target.value.length > 50 ) {
        pranesti_apie_trukumus(vardo_tikrinimo_el, "Vardas negali būti ilgesnis, nei penkiasdešimt raidžių");
        ar_teisingas_vardas = 0;
    } else {
        pranesti_apie_sekme(vardo_tikrinimo_el);
        ar_teisingas_vardas = 1;
    };
});

/* darbuotojo pavardė - nuo 3 iki 50 simbolių, pirma raidė privalo būti didžioji, 
negali būti nei vieno skaičiaus. */

pavardes_ivesties_el.addEventListener("keydown", (event)=>{
    if ("0123456789".includes(event.key)){
        event.preventDefault();
        return;
    };
});

pavardes_ivesties_el.addEventListener("change", (event)=>{
    if (event.target.value){
        event.target.value = (event.target.value).replace((event.target.value)[0], ((event.target.value)[0]).toUpperCase());
    }
    if (event.target.value.length < 3 ) {
        pranesti_apie_trukumus(pavardes_tikrinimo_el, "Pavardė negali būti trumpesnė, nei trys raidės");
        ar_teisinga_pavarde = 0;
    } else if (event.target.value.length > 50 ) {
        pranesti_apie_trukumus(pavardes_tikrinimo_el, "Pavardė negali būti ilgesnė, nei penkiasdešimt raidžių");
        ar_teisinga_pavarde = 0;
    } else {
        pranesti_apie_sekme(pavardes_tikrinimo_el);
        ar_teisinga_pavarde = 1;
    };
});
/* darbuotojo numeris - prasideda trimis didžiosiomis raidėmis, po trečiosios 
raidelės automatiškai padedamas "-" ir tuomet leistina įvestis - tik trys skaičiai.*/ 

darb_numerio_ivesties_el.addEventListener("keydown", (event)=>{
    if (event.target.value.length <= 3){  
        if (!((event.keyCode >=65 && event.keyCode <=90)|| event.keyCode === 8)){
        event.preventDefault();
        return;
        }
    }
    else if (event.target.value.length > 3 && event.target.value.length < 8){    
        if (!("0123456789".includes(event.key) || event.keyCode === 8)){
        event.preventDefault();
        return;
        };
    };
});

darb_numerio_ivesties_el.addEventListener("keyup", (event)=>{
    if (event.target.value.length === 3) {
        event.target.value = (event.target.value).toUpperCase().concat("-");
    }
});

darb_numerio_ivesties_el.addEventListener("change", (event)=>{
    if (event.target.value.length < 7 ) {
        pranesti_apie_trukumus(numerio_tikrinimo_el, "Įveskite savo darbuotojo numerį");
        ar_teisingas_numeris = 0;
    } else {
        pranesti_apie_sekme(numerio_tikrinimo_el);
        ar_teisingas_numeris = 1;
    };
});

/* Po kiekvienu įvesties laukeliu - pagalbinis tekstas raudonomis arba žaliomis 
mažomis raidelėmis sufleruojantis, ar validacija sėkminga, ar kažko trūksta. 
Pakeitus įvesties laukelio reikšmę, pagalbinis tekstas turi atsinaujinti į kitą 
būseną, jei laukelyje įvesta reikšmė yra neteisinga, arba iš neteisingos 
pasikeitė į sėkmingą.*/

function pranesti_apie_sekme(elementas){
    elementas.classList.add("green");
    elementas.classList.remove("red");
    elementas.innerText = "Laukas užpildytas sėkmingai";
}

function pranesti_apie_trukumus(elementas, tekstas){
    elementas.classList.remove("green");
    elementas.classList.add("red");
    elementas.innerText = tekstas;
}

/*Savo nuožiūra padarykite formą kiek įmanoma labiau patogesne 
naudotis. (tarkime apribokite leistinų įvesti raidžių kiekį iki 50)
Po forma esančio mygtuko pagalba užfiksuokite, kada įvyko check-in (datą ir laiką) */

registr_mygtuko_el.addEventListener("click", (event)=>{
    if (ar_teisingas_vardas + ar_teisinga_pavarde + ar_teisingas_numeris === 3){
        let visa_data = new Date();
        let metai = visa_data.getFullYear();
        let menuo = (visa_data.getMonth() + 1).toString().padStart(2, 0);
        let diena = visa_data.getDate().toString().padStart(2, 0);
        let valandos = visa_data.getHours().toString().padStart(2, 0);
        let minutes = visa_data.getMinutes().toString().padStart(2, 0);
        let sekundes = visa_data.getSeconds().toString().padStart(2, 0);
        let sutvarkyta_data = `${metai}-${menuo}-${diena} ${valandos}:${minutes}:${sekundes}`;
        registr_patvirtinimo_el.innerHTML = `<div class="green registr_patvirtinimas">Registracija sėkminga.</div> Registracijos laikas - ${sutvarkyta_data}`; 
        registr_mygtuko_el.disabled = "true";

        const registracija = {
            vardas: vardo_ivesties_el.value,
            pavarde: pavardes_ivesties_el.value,
            darb_nr: darb_numerio_ivesties_el.value,
            reg_data: sutvarkyta_data
        }
        registracijos.push(registracija);
        console.log(registracijos);
        localStorage.setItem("Registracijos", JSON.stringify(registracijos));
    } else alert("Tinkamai užpildykite visus laukelius");
});


/*išsaugokite objektą į bendrą sąrašą localStorage (tariamam tolimesniam 
panaudojimui kituose programos vystymo etapuose)*/


