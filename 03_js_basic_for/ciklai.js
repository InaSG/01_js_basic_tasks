/*
1. Parašykite f-ją, kuri išvestų nurodyto skaičiaus daugybos lentelę
Multiplication(3)
1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
Ir t.t. iki
10 * 3 = 30
*/
function multiplication(skaicius){
    for (let i = 1; i <=10; i++){
        rezultatas = i * skaicius;
        console.log(i + ` * ` + skaicius + ` = ` + rezultatas)
    }
}
//multiplication(3);

/*
2.Išvesti į konsolę skaičiuos nuo 10 iki 100. Visais žinomais ciklais while, 
do while, for
pvz (10, 20, 30,..,..,..,.., 100)
*/
// let rezult2 = [];
// let i = 1;
// while (i <= 10){
//     rezult2.push(i * 10);
//     i++;
// }
// let rezult2 = [];
// for (let i = 1; i<= 10; i++){
//     rezult2.push(i * 10);
// }

// console.log(rezult2.join(", "));

/*
3. Perašyti pateikta ciklą for į ciklą while.
for (let i = 0; i <= 10; i+=2){
    console.log(`Skaičius i = ${i}`);
}
Gaunamas rezultatas:
Skaičius i = 0
Skaičius i = 2
Skaičius i = 4 
Skaičius i = 6
Skaičius i = 8
Skaičius i = 10
*/
// let i = 0;
// while (i <= 10){
//     console.log(`Skaičius i = ${i}`);
//     i+=2;
// }

/*
4. Naudojantis ciklu, sumuokite visus skaičius nuo 1 iki 100 ir išveskite 
galutinį rezultatą.
Uždavinį išspręskit dviem skirtingais būdais while ir for ciklu
*/
// let i = 1;
// let rezult4 = 0;
// while (i <=100){
//     rezultatas += i;
//     i++;
// }

// let rezult4 = 0;
// for (let i = 0; i <= 100; i++){
//     rezultatas += i;
// }

// console.log(rezultatas);

/*
5. Parašykite f-ją, kuri išvestų visus skaičius, kurie dalijasi iš 3 
intervale nuo 0 iki 100. 
Uždavinį išspręskit dviem skirtingais būdais while ir for ciklu
*/
// let i = 0;
// while (i <= 100){
//     if (i % 3 === 0 && i !== 0) console.log(i);
//     i++;
// }
// for(let i = 0; i <= 100; i++){
//     if (i % 3 === 0 && i !== 0) console.log(i);
// }

/*
6. Parašyti f-ją, kuriai būtų paduodamas bet kokio ilgio skaičius ir 
suskaičiuoja kiek skaitenų jį sudaro
*/
// function countDigits(digits){
//     //let rezult6 = String(digits).length;
//     let digits = String(digits);
//     return rezult6;
// }
// console.log(countDigits(458962));
// console.log(countDigits(452));
// console.log(countDigits(19));

/*
7. Matematikas, pastebėjęs gobšaus turtuolį pasiūlė tokį sandorį:
Pirmą dieną jis turtuoliui duos 1 mln. dolerių, o tas jam už tai sumokės 2 
centus. Kitą dieną matematikas ir vėl duos turtuoliui 1 mln. dolerių, o tas 
jam užmokės dvigubai daugiau negu praėjusią dieną, t.y. 4 centus. Ir taip jie 
darys visą mėnesį (31 dieną, matematikas kasdien duos po milijoną dolerių, o 
turtuolis mokės dvigubai daugiau negu praėjusią dieną. Parašykite programą 
kuri suskaičiuotų kiek pinigų duos matematikas . turtuoliui ir kiek turtuolis 
sumokės matematikui.
*/
function count_two_sums(matematikas_moka, turtuolis_moka, dienos){
    let turtuolio_suma = 0;
    for (let i = 1; i <= dienos; i++){
        turtuolis_moka = 0.02 * (2**(i - 1));
        turtuolio_suma = turtuolio_suma + turtuolis_moka;
    }
    matematiko_suma = matematikas_moka * dienos;
    return `Per 31 d. matematikas turtuoliui sumokės ${matematiko_suma}, o turtuolis matematikui - ${turtuolio_suma.toFixed(2)}`;
}

console.log(count_two_sums(1000000, 0.02, 31));

/*
8. Parašyti programą kuri atspausdintu visus Armstrongo skaičius nuo 100 
iki 999 intervale. Armstongo skaičiaus pvz ABC = A3 + B3 + C3 (visų
atskirų skaitmenų pakeltų skaičiaus skaitmenų kiekio laipsniu suma.) 
*/

/*
9. Parašykite funkcija kuri paskaičiuotų atstumą tarp dviejų taškų
koordinačių sistemoje. Parametrai 4 perduodami skaičiai x1, y1, x2, y2 
@example: 
(0,0) (0,1) => 1 
(0,0) (1,0) => 1 
(-5,0) (10,-10) => 
18.027756377319946
*/
