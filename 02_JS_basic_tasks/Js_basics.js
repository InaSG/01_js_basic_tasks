/* 
1. Parašykite f-ją, kuri patikrintų ar galima sudaryti trikampį 
iš 3 duotų kraštinių ilgių (a,b,c).  
Atsakymo pvz:  
„kraštinės a, b, c sudaro trikampį“ 
„kraštinės a, b, c nesudaro trikampį“ 
*/
function ar_trikampis(a, b, c) {
    if (a > (b + c) || b > (a + c) || c > (a + b)) return `Kraštinės ${a}, ${b} ir ${c} nesudaro trikampio.`;
    else return `Kraštinės ${a}, ${b} ir ${c} sudaro trikampį.`;
}
// console.log(ar_trikampis(5, 5, 5));
// console.log(ar_trikampis(15, 5, 5));
// console.log(ar_trikampis(5, 15, 8));
// console.log(ar_trikampis(1, 50, 50));

/* 
2. Kavos puodelių skaičiuotuvas. 6 nusiperki, 7 nemokamas. 
Sukurti f-ją, kuri apskaičiuotų kiek kavos puodelių iš viso 
pirkėjas gaus. 
Pavyzdys:  
totalCups(6) ➞ 7 
totalCups(12) ➞ 14 
totalCups(213) ➞ 248
*/
function kiek_paduoti(perka) {
   return perka + (Math.floor(perka / 6));
}
// console.log(kiek_paduoti(6));
// console.log(kiek_paduoti(12));
// console.log(kiek_paduoti(213));

/* 
3. Parašykite funkciją, kuri apskaičiuos nuolaidos dydį 
priklausomai nuo to, kiek pinigų pirkėjas išleido.  
Skaičiavimai atlikti pagal šias taisykles: 
Iki 50 € – nuolaida nėra taikoma (0%). 
Nuo 50 € iki 100 € – taikoma 10% nuolaida. 
Nuo 100 € iki 200 € – taikoma 15% nuolaida. 
Daugiau nei 200 € – taikoma 20% nuolaida. 
Išvedimo pvz: Pirkėjas pirko prekių už X sumą, kam buvo 
pritaikyta nuolaida Y, Pirkėjas sumokėjo Z sumą pinigų. 
*/
function galutine_suma(suma){
    let sumokejo = suma;
    let nuolaida = 0;
    if (suma > 200) {
        nuolaida = 20;
        sumokejo = suma - (suma * nuolaida / 100);
    } else if (suma >= 100) {
        nuolaida = 15;
        sumokejo = suma - (suma * nuolaida / 100);
    } else if (suma >= 50) {
        nuolaida = 10;
        sumokejo = suma - (suma * nuolaida / 100);
    } else sumokejo = suma - (suma * nuolaida / 100);

    return `Pirkėjas pirko prekių už ${suma} eurų, jam buvo pritaikyta ${nuolaida}% nuolaida. Pirkėjas sumokėjo ${sumokejo} eurų. `;
}

// console.log(galutine_suma(10));
// console.log(galutine_suma(60));
// console.log(galutine_suma(100));
// console.log(galutine_suma(200));
// console.log(galutine_suma(300));

/*
4. Sukurkite funkciją, kuri patikrins, ar skaičius yra tam tikrame intervale. Funkcija turėtų priimti  tris parametrus:  
skaičių ir du intervalus (minimalų ir maksimalų), grąžinti true, jei skaičius yra intervale, ir false, jei ne.
*/
function ar_patenka(skaicius, par1, par2){
    if (par1 < par2){
        if (skaicius >= par1 && skaicius <= par2) return true;
        else return false;
    } else {
        if (skaicius <= par1 && skaicius >= par2) return true;
        else return false;
    }
}
console.log(ar_patenka(0, -2, 9));
console.log(ar_patenka(0, 9, -2));
console.log(ar_patenka(50, -100, 10));
console.log(ar_patenka(50, 10, -110));