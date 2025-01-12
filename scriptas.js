/* 
1. Parašykite f-ją, kuriai perduodamas vienas parametras, ir ji nustatytų ar skaičius yra lyginis ar ne. 
Išvedamo atsakymo pvz. "X skaičius yra lyginis" /  "X skaičius yra nelyginis" 
*/
function lyginis_nelyginis(skaicius){
    if (skaicius % 2 == 0) return `${skaicius} skaičius yra lyginis`;
    else return `${skaicius} skaičius yra nelyginis.`;
}

// console.log(lyginis_nelyginis(55));
// console.log(lyginis_nelyginis(10));

/* 
2. Parašykite f-ją, kuriai perduodami du parametrai (skaičius ir daliklis), paskaičiuotumėte likutį dalinant.  
Išvedamo atsakymo pvz.: "Dalinant X iš Y, liekana yra Z" 
*/

function dalybos_liekana(dalinys, daliklis){
    let liekana = dalinys % daliklis;
    return `Dalinant ${dalinys} iš ${daliklis}, liekana yra ${liekana}.`;
}

// console.log(dalybos_liekana(9, 3));
// console.log(dalybos_liekana(15, 4));

/*
3. Parašykite f-ją, kuriai perduodami du parametrai, paskaičiuotų dviejų skaičių vidurkį 
Išvedamo atsakymo pvz.: "Skaičių X ir Y vidurkis Z"
*/

function vidurkis(sk1, sk2){
    let vidurkis = (sk1 + sk2) / 2
    return `Skaičių ${sk1} ir ${sk2} vidurkis ${vidurkis}.`;
}

// console.log(vidurkis(10, 3));
// // console.log(vidurkis(10, 3));

/*
4. Laikrodis rodo laiką h, m, s. Parašykite programą, kuri apskaičiuotų kiek sekundžių prabėgo po vidurnakčio. (perduodami 
trys parametrai) 
Išvedamo atsakymo pvz.: "Po vidurnakčio prabėgo XXX sekundžių"
*/

function sek_po_vidurnakcio(h, m, s){
    let sekundes = s + (m * 60) + (h * 3600);
    let sekundes_text = (sekundes).toString();
    if(sekundes_text.slice(-1) == 1) return `Po vidurnakčio prabėgo ${sekundes} sekundė.`;
    else if(sekundes_text.slice(-1) == 0) return `Po vidurnakčio prabėgo ${sekundes} sekundžių.`;
    else return `Po vidurnakčio prabėgo ${sekundes} sekundės.`;
}

// console.log(sek_po_vidurnakcio(0, 0, 0));
// console.log(sek_po_vidurnakcio(1, 0, 8));
// console.log(sek_po_vidurnakcio( 0, 1, 2589745600));
// console.log(sek_po_vidurnakcio(10, 10, 1));

/*
5. Parašykite programą kuri patikrintų ar skaičius  dalinasi iš 3, 5 ar iš abiejų tai yra ir iš 3 ir iš 5.  
Jei dalinasi iš 3 be liekanos atspausdinam „Labas“,  jei dalinasi iš 5 be liekanos atspausdinam „Rytas“,  
jei dalinasi ir iš 3 ir iš 5 atspausdinam „Labas rytas“, jei nesidalina nei iš 3 nei iš 5 išvedam paprasčiausiai skaičių. 
Išvedamo atsakymo pvz.: 3 => „Labas“ arba 5 => „Rytas“  arba 15 => „Labas Rytas“ arba 7 => 7
*/
function ar_dalinasi(skaicius){
    if (skaicius % 3 == 0 && skaicius % 5 == 0) return "Labas rytas";
    else if (skaicius % 3 == 0) return "Labas";
    else if (skaicius % 5 == 0) return "Rytas";
    else return skaicius;
}

// console.log(ar_dalinasi(9));
// console.log(ar_dalinasi(10));
// console.log(ar_dalinasi(15));
// console.log(ar_dalinasi(8));

/*
6. Jonas ir Petras dalyvavo šaškių turnyre. Jonas surinko n taškų o Petras m. Nustatykite kuris iš dalyvių surinko daugiau 
taškų turnyre.  
Išvedamo atsakymo pvz.: „Laimėtojo vardas : xxxxx“
*/
function laimetojas(n, m){
    if (n > m) return `Laimėtojo vardas: Jonas`;
    else if (m > n) return `Laimėtojo vardas : Petras`;
    else return "Lygiosios!"
}

// console.log(laimetojas(1, 5));
// console.log(laimetojas(4, 3));
// console.log(laimetojas(4, 4));


/*
7. Žinomi kambario matmenys ilgis ir plotis. Reikia apskaičiuoti, kokią pinigų sumą reiks mokėti už plyteles, skirtas kambario 
grindims kloti, jei plytelių vieno kvadrato kaina yra 23 eurai. Plytelių reikia pirkti 5 proc. daugiau galimiems nuostoliams padengti. 
Plytelės supakuotos po 1.5m2 ir parduotuvės darbuotojai nesutinka ardyti pakuočių. Galima pirkti tik pilnas pakuotes.  
Išvedamo atsakymo pvz.: „Kambario dydis X ir Y, reikės Z pakuočių plytelių. Reikalinga pinigų suma E“
*/
function plyteliu_kaina(ilgis, plotis){
    let grindu_plotas = ilgis * plotis;
    let reikia_plyteliu = grindu_plotas + grindu_plotas * 0.05;
    let reikia_pakuociu = Math.ceil(reikia_plyteliu / 1.5);
    let plyt_pakuotes_kaina = 23 * 1.5
    let plyteliu_kaina = reikia_pakuociu * plyt_pakuotes_kaina;
    return `Kambario dydis: ${ilgis} x ${plotis}. Reikės ${reikia_pakuociu} pakuočių plytelių. Reikalinga pinigų suma - ${plyteliu_kaina} Eur.`; 
}

// console.log(plyteliu_kaina(10, 2));
// console.log(plyteliu_kaina(10, 10));

/*
8. Pirmos lietuviškos litų monetos išėjo 1925 metais. Tai buvo 5, 2 ir 1 lito vertės sidabrinės monetos. Duotą pinigų sumą 
n (litais) pakeiskite nurodytomis monetomis, panaudojant kuo mažiau monetų.  
Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, n2 monetų po 2 litus ir n3 monetų po 1 litą. 
Viso monetų N skaičius“.
*/

function iskeisti_monetomis(suma){
    function litai_reikiamu_linksniu(suma){
        if ((suma > 1 && suma < 10) || ((suma > 20) && (suma % 10 > 1) && (suma % 10 < 10))) return "litus";
        else if (suma % 10 === 1 && suma % 100 != 11) return "litą";
        else return "litų";
    } 

    function monetos_reikiamu_linksniu(monetu_skaicius){
        if (monetu_skaicius % 10 === 1 && monetu_skaicius != 11) return "monetos";
        return "monetų";
    }
    if (suma >= 5){
        po_penkis = Math.floor(suma / 5);
        suma2 = suma - po_penkis * 5;
        if (suma2 >= 2){
            po_du = Math.floor(suma2 / 2);
            suma3 = suma2 - po_du * 2;
            viso = po_penkis + po_du;
            if (suma3 == 1){
                po_viena = suma3;
                viso = po_penkis + po_du + po_viena;
                return `Norint gauti ${suma} ${litai_reikiamu_linksniu(suma)}, reikės ${po_penkis} ${monetos_reikiamu_linksniu(po_penkis)} po 5 litus, ${po_du} ${monetos_reikiamu_linksniu(po_du)} po 2 litus ir ${po_viena} ${monetos_reikiamu_linksniu(po_viena)} po 1 litą. Viso ${viso} ${monetos_reikiamu_linksniu(viso)}.`;
            } else return `Norint gauti ${suma} ${litai_reikiamu_linksniu(suma)}, reikės ${po_penkis} ${monetos_reikiamu_linksniu(po_penkis)} po 5 litus ir ${po_du} ${monetos_reikiamu_linksniu(po_du)} po 2 litus. Viso ${viso} ${monetos_reikiamu_linksniu(viso)}.`;
        } else if (suma2 == 1){
            po_viena = suma2;
            viso = po_penkis + po_viena;
            return `Norint gauti ${suma} ${litai_reikiamu_linksniu(suma)}, reikės ${po_penkis} ${monetos_reikiamu_linksniu(po_penkis)} po 5 litus ir ${po_viena} ${monetos_reikiamu_linksniu(po_viena)} po 1 litą. Viso ${viso} ${monetos_reikiamu_linksniu(viso)}.`;
        } else return `Norint gauti ${suma} ${litai_reikiamu_linksniu(suma)}, reikės ${po_penkis} ${monetos_reikiamu_linksniu(po_penkis)} po 5 litus.`;
    } else if (suma >= 2){
        po_du = Math.floor(suma / 2);
        suma2 = suma - po_du * 2;
        if (suma2 >= 1){
            po_viena = suma2;
            viso = po_du + po_viena;
            return `Norint gauti ${suma} ${litai_reikiamu_linksniu(suma)}, reikės ${po_du} ${monetos_reikiamu_linksniu(po_du)} po 2 litus ir ${po_viena} ${monetos_reikiamu_linksniu(po_viena)} po 1 litą. Viso ${viso} ${monetos_reikiamu_linksniu(viso)}.`;
        } else return `Norint gauti ${suma} ${litai_reikiamu_linksniu(suma)}, reikės ${po_du} ${monetos_reikiamu_linksniu(po_du)} po 2 litus.`;
    } else if (suma >= 1){
        po_viena = suma;
        return `Norint gauti ${suma} ${litai_reikiamu_linksniu(suma)}, reikės ${po_viena} ${monetos_reikiamu_linksniu(po_viena)} po 1 litą.`;
    }
}

// console.log(iskeisti_monetomis(1));
// console.log(iskeisti_monetomis(2));
// console.log(iskeisti_monetomis(3));
// console.log(iskeisti_monetomis(4));
// console.log(iskeisti_monetomis(5));
// console.log(iskeisti_monetomis(6));
// console.log(iskeisti_monetomis(11));
// console.log(iskeisti_monetomis(16));
// console.log(iskeisti_monetomis(52));
// console.log(iskeisti_monetomis(33));
// console.log(iskeisti_monetomis(14));
// console.log(iskeisti_monetomis(101));
// console.log(iskeisti_monetomis(211));
// console.log(iskeisti_monetomis(5000));
// console.log(iskeisti_monetomis(10011));
// console.log(iskeisti_monetomis(50000501));
