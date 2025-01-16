//  Darbas su tekstu

let tekstas = "Ir kitą vasarą pušies drevėje spoksos akutės voverės.";

// 1. Sukurti funkciją, kuri atiduoda pirmą pateikto teksto simbolį;

function first_char(text){
    return text[0];
}
// console.log(first_char(tekstas));


// 2. Sukurti funkciją, kuri atiduoda paskutinį pateikto teksto simbolį;
function last_char(text){
    return text.slice(-1);
}
// console.log(last_char(tekstas));


// 3. Sukurti funkciją, kuri pakeičia visas tekste pateiktas o raides į 0 (nulius)
function replace_o(text){
    return text.toLowerCase().replaceAll("o", "0");
}
// console.log(replace_o(tekstas));


// 4. Sukurti funkciją, kuri atiduoda tekstą be paskutinio simbolio
function cut_end(text){
    return text.slice(0 , (text.length - 1));
}
// console.log(cut_end(tekstas));


// 5. Sukurti funkciją, kuri priimanti tekstą pakeičia pirmąsias dvi raides vietomis
function change_letters(text){
    return text[1] + text[0] + text.slice(2);
}
// console.log(change_letters(tekstas));

// 6. Sukurti funkciją, kuri gavusi datą formatu "2024-01-01" atiduoda metus "2024"
function extract_year(year_month_day){
    return year_month_day.slice(0, 4);
}
// console.log(extract_year("2024-01-01"));

// 7. Sukurti funkciją, kuri gavusi datą tekstiniu formatu "2024-01-01" atiduoda mėnesį pagal jo pavadinimą: "Sausis"
function month_in_word(year_month_day){
    let month = year_month_day.slice(5, 7);
    if (month == "01") return "Sausis";
    else if (month == "02") return "Vasaris";
    else if (month == "03") return "Kovas";
    else if (month == "04") return "Balandis";
    else if (month == "05") return "Gegužė";
    else if (month == "06") return "Birželis";
    else if (month == "07") return "Liepa";
    else if (month == "08") return "Rugpjūtis";
    else if (month == "09") return "Rugsėjis";
    else if (month == "10") return "Spalis";
    else if (month == "11") return "Lapkritis";
    else return "Gruodis";
}
// console.log(month_in_word("2024-12-01"));

// 8. Sukurti funkciją, kuri priimant parametrą savaitėsDiena (skaičius), atitinkamai gražina savaitės dienos pavadinimą
// lietuvių kalboje. pvz savaitesDiena(1) -> “Pirmadienis”;
function week_day_in_word(week_day){
    if (typeof week_day != "number"){
        console.error("Funkcija \"week_day_in_word()\" priima tik skaičius");
        return;
    } else{
        if (week_day == 1) return "Pirmadienis";
        else if (week_day == 2) return "Antradienis";
        else if (week_day == 3) return "Trečiadienis";
        else if (week_day == 4) return "Ketvirtadienis";
        else if (week_day == 2) return "Penktadienis";
        else if (week_day == 2) return "Šeštadienis";
        else if (week_day == 2) return "Sekmadienis";
        else return "Savaitė turi septynias dienas";
    }
}
// console.log(week_day_in_word(10));


/* 9. Sukurti funkciją, kuri priima parametrą saliesKodas. saliesKodas gali būti pateikiamas iš 3 raidžių (pvz: LTU)
 arba 2 raidžių (pvz.: LT). Pateikite pilną šalies pavadinimą pagal pateiktą šalies trumpinį.
LVA arba LV - Latvija
LTU arba LT - Lietuva
POL arba PL - Lenkija
SWE arba SE - Švedija
GER arba DE - Vokietija
Visi kiti šalių kodai - Nežinoma šalis
 */
function country_name(saliesKodas){
    if (saliesKodas == "LVA" || saliesKodas == "LV") return "Latvija";
    else if (saliesKodas == "LTU" || saliesKodas == "LT") return "Lietuva";
    else if (saliesKodas == "POL" || saliesKodas == "PL") return "Lenkija";
    else if (saliesKodas == "SWE" || saliesKodas == "SE") return "Švedija";
    else if (saliesKodas == "GER" || saliesKodas == "DE") return "Vokietija";
    else return "Nežinoma šalis";
}
// console.log(country_name("BE"));