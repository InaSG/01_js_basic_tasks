/*
Sukurkite programą, kuri kreipiasi į dogs API serverį. Nuoroda į API dokumentaciją: 
https://dog.ceo/dog-api/documentation/ 
1.Gauti visas veisles pagal dokumentacijoje nurodytą nuorodą.*/

const select_el = document.getElementById("sunys");
const veisles_korteles_el = document.getElementById("veisles_kortele");

fetch("https://dog.ceo/api/breeds/list/all")
    .then((metadata) => {metadata.json()
    .then(apdoroti_ats);
});

/* 2.Sutvarkyti iš serverio gautą objektą taip, kad gaunamos veislės būtų viename sąraše.
3.Visas veisles atvaizduoti <select></select> HTML elemente, kaip pasirinkimus */

function pirma_raide_didzioji(zodis){
    let Zodis = zodis.replace(zodis[0], zodis[0].toUpperCase());
    return Zodis;
}

function apdoroti_ats(sunys){
   let veisliu_obj = sunys.message;
   let pagr_veisliu_masyvas = Object.keys(veisliu_obj);
   let visu_veisliu_sarasas = ["All breeds"];
    pagr_veisliu_masyvas.forEach((veisle) => {
        if (veisliu_obj[veisle].length > 0) {
            let pilnas_pavadinimas = "";
            veisliu_obj[veisle].forEach((poveisle) =>{
                pilnas_pavadinimas = pirma_raide_didzioji(veisle) + " " + pirma_raide_didzioji(poveisle);
                visu_veisliu_sarasas.push(pilnas_pavadinimas);
            });
        } else visu_veisliu_sarasas.push(pirma_raide_didzioji(veisle));
    })
    let selecto_html = "";
    visu_veisliu_sarasas.forEach((veisle)=> {
        selecto_html += `<option value="${veisle}">${veisle}</option>`;
    });
    select_el.innerHTML = selecto_html;
   };

/*4.Pasirinkus naują reikšmę, automatiškai turi būti kreipiamasi į serverį, dinamiškai 
generuojant kreipimosi adresą taip, kad būtų gaunama nuotrauka pagal šuns veislę.
5.Po select elementu atvaizduoti šuns nuotrauką ir parašyti jo veislę
*/

select_el.addEventListener('change', rodyti_info);

function rodyti_info(){
    let veisle = select_el.value;
    let veisle_adrese = veisle.replace(" ", '/').toLowerCase();
    let veisles_nuotraukos_adresas = `https://dog.ceo/api/breed/${veisle_adrese}/images/random`;
    fetch(veisles_nuotraukos_adresas)
    .then((metadata) => {metadata.json()
        .then((data) => {
            let veisles_korteles_html = 
            `<img src= ${data.message} style="max-width: 500px">
            <h3>${veisle}</h5>`;
            veisles_korteles_el.innerHTML = veisles_korteles_html;
        });    
    });  
};