/*
3. Sukurkite nodeJS programą today.js, kuri priima parametrą rezimas=savaites_diena | menuo | menesio_diena
Priklausomai nuo parametro atspausdinti tekstą, nusakantį informaciją apie šią dieną. Konsolės rezultato PVZ:
Jei rezimas = "savaites_diena: "Šiandien - Antradienis".
Jei rezimas = "menuo": "Šiandien - Vasaris".
Jei rezimas = "menesio_diena": "Šiandien 18 diena".
Jei nepasirinktas nei vienas iš paminėtų rėžimų, pranešti apie tai console.log pranešimu:
"Prašome pasirinkti vieną iš pateiktų rėžimų: savaites_diena, menuo, menesio_diena".
*/

export function today(rezimas){
    let date = new Date();
    if (rezimas == "savaites_diena"){
        let sav_diena = date.getDay();
        if(sav_diena === 0) sav_diena = "Sekmadienis";
        else if(sav_diena === 1) sav_diena = "Pirmadienis";
        else if(sav_diena === 2) sav_diena = "Antradienis";
        else if(sav_diena === 3) sav_diena = "Trečiadienis";
        else if(sav_diena === 4) sav_diena = "Ketvirtadienis";
        else if(sav_diena === 5) sav_diena = "Penktadienis";
        else if(sav_diena === 6) sav_diena = "Šeštadienis";
        return `Šiandien - ${sav_diena}`;
    } else if (rezimas == "menuo"){
        let menuo = date.getMonth();
        if (menuo = 0) menuo = "Sausis";
        else if (menuo = 1) menuo = "Vasaris";
        else if (menuo = 2) menuo = "Kovas";
        else if (menuo = 3) menuo = "Balandis";
        else if (menuo = 4) menuo = "Gegužė";
        else if (menuo = 5) menuo = "Birželis";
        else if (menuo = 6) menuo = "Liepa";
        else if (menuo = 7) menuo = "Rugpjūtis";
        else if (menuo = 8) menuo = "Rugsėjis";
        else if (menuo = 9) menuo = "Spalis";
        else if (menuo = 10) menuo = "Lapkritis";
        else if (menuo = 11) menuo = "Gruodis";
        return `Šiandien - ${menuo}.`;
    } else if (rezimas == "menesio_diena"){
        return date.getDate();
    }
}

