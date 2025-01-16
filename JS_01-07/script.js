// Darbas su įvesties laukeliais
// Sukurti registracijos formą (imituojamam socialiniam tinklui), kurioje vykdomas duomenų 
// teisingumo patikrinimas (validacija). Turint laiko, pritaikykite stilizaciją.
// Jos įvesties laukeliai:
// Vardas
// Pavardė
// Gimimo data (date input)
// Elektroninis paštas (email input)
// Ar sutinkate su taisyklėmis ir salygomis (checkbox input)
// Žmogui suvedus duomenis į įvesties laukelius, reikia patikrinti duomenų teisingumą.
// Taisyklės, kad registracija įvyktų sėkmingai:
// 1. Vardas turi būti sudarytas iš 3-40 simbolių;
// 2. Pavardė turi būti sudaryta iš 3-70 simbolių;
// 3. Buvo sutikta su taisyklėmis ir salygomis;
// Nesėkmingos registracijos atveju išmesti alert() pranešimą, 
// pranešantį, kodėl registracija nepavyko.
// Sėkmingos registracijos atveju imituojame elektroninio 
// pašto pranešimą console.log():
// “Siunčiamas laiškas adresu EMAIL...”
// "
// Sveiki, VARDAS PAVARDĖ. Ačiū kad registravotės mūsų 
// socialiniame tinkle. Jūsų laikinasis slaptažodis 
// VARDAS_GIMIMOMETAI. Linkime gražios dienos - one.lt 
// administracija"

// Pavyzdys kaip gauti metus iš datos:
// const dateInput = document.querySelector(“#datos-ivestis”);
// let metai = dateInput.value.slice(0,4); //Ištraukiami pirmi 4 simb.

const f_name_input = document.querySelector("#vardas");
const s_name_input = document.querySelector("#pavarde");
const birth_date_input = document.querySelector("#gimimo_data");
const email_input = document.querySelector("#el_pastas");
const is_agree_input = document.querySelector("#ar_sutinka");

// console.log([document.querySelector("button")]);
function getData() {
    let f_name = f_name_input.value;
    let s_name = s_name_input.value;
    let birth_date = birth_date_input.value;
    let birth_year = birth_date.slice(0, 4);
    let email_address = email_input.value;
    let is_agree = is_agree_input.checked;
    let pranesimas1 = "";
    let pranesimas2 = "";
    let pranesimas3 = "";
    let pranesimas4 = "";
    let pranesimas5 = "";

    if (f_name.length < 3){
       pranesimas1 = "Vardas - per trumpas.  ";
    } else if (f_name.length > 40){
        pranesimas1 = ("Vardas - per ilgas.  ");
    }

    if (s_name.length < 3){
        pranesimas2 = "Pavardė - per trumpa.  ";
    } else if (s_name.length > 70){
        pranesimas2 = "Pavardė - per ilga.  ";
    }

    if (birth_date == "" || birth_year < 1850 || birth_year > 2025){
        pranesimas3 = "Įveskite savo gimimo datą!  ";
    }

    if (email_address.includes("@") === false || email_address.includes(".") === false ){
        pranesimas4 = "Įveskite savo elektroninio pašto adresą!  ";
    }

    if (is_agree === false){
        pranesimas5 = "Norint registruotis privalote sutikti su sąlygomis ir taisyklėmis!";
    }
    
    if (pranesimas1 != "" || pranesimas2 != "" || pranesimas3 != "" || pranesimas4 != "" || pranesimas5 != ""){
        alert(pranesimas1 + pranesimas2 + pranesimas3 + pranesimas4 + pranesimas5);
    } else {
        console.log(`Siunčiamas laiškas adresu ${email_address}: 
            Sveiki, ${f_name} ${s_name}. 
            Ačiū kad registravotės mūsų socialiniame tinkle. Jūsų laikinasis slaptažodis: ${f_name}_${birth_year}. 
        Linkime gražios dienos - one.lt administracija`);
    }  
    
}
