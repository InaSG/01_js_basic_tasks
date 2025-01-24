/*
1. Parašykite programą, kuri suskaičiuotų , kiek duotas skaičius a turi 
lyginių ir nelyginių skaitmenų.
@example: 63258 => ‘3 skaičiai lyginiai, 2 nelyginiai’
*/
function lyginiai_nelyginiai(skaicius){
    let lyginiai = 0;
    let nelyginiai = 0;
    
    while (skaicius > 0){
        if ((skaicius % 10) % 2 == 0){
            lyginiai ++;
        } else nelyginiai ++;
       skaicius = Math.floor(skaicius / 10);
    }
    return `${lyginiai} skaičiai lyginiai ir ${nelyginiai} - nelyginiai`;
}

// console.log(lyginiai_nelyginiai(5555555));
    

/*
2. Parašykite funkciją, kuri priimtų parametru du tekstus ir išvestų kuris 
tekstas ilgesnis ir tą tekstą
@example: (‘abc’, ‘b’) => ‘tekstas “abc” yra ilgesnis, jo ilgis 3 simboliai’ 
 (‘abcd’, ‘abcd’) => ‘abu tekstai lygus, jų ilgis 4 simboliai’
 */
function kuris_ilgesnis(tekstas1, tekstas2){
    if(tekstas1.length > tekstas2.length) return `tekstas "${tekstas1}" yra ilgesnis, jo ilgis - ${tekstas1.length} simboliai`;
    else if (tekstas1.length < tekstas2.length) return `tekstas "${tekstas2}" yra ilgesnis, jo ilgis - ${tekstas2.length} simboliai`;
    else return `abu tekstai lygūs, jų ilgis - ${tekstas2.length} simboliai`;
}
// console.log(kuris_ilgesnis("vienas", "vienas"));


// 3. Sukurkite tuščią masyvą.
// • Įdėkite 4 elementus į masyvą
let masyvas = [4, 5, 6, 7];

// • Pridėkite 1 elementą į masyvo galą
masyvas.push(25);

// • Ištrinkite vidurinį elementą ir išveskite jį į consolę 
//console.log(masyvas[Math.floor(masyvas.length/2)]);
elementas = masyvas.splice(Math.floor((masyvas.length/2)), 1);
// console.log(elementas);

// • Išveskite į consolę masyvą pasirašytos f-jos pagalba. 
function parodyti_masyva(masyvas){
    for(let i = 0; i < masyvas.length; i++){
         console.log(masyvas[i]);
     }
}
//parodyti_masyva(masyvas);

// • Pakeiskite 2 elementą nauja reikšme 
masyvas[1] = 888;

// • Pridėkite du naujus elementus į masyvo pradžią 
masyvas.splice(0, 0, 77, 11);

// • Išveskite į consolę masyvą pasirašytos f-jos pagalba.
//parodyti_masyva(masyvas);

/*
4. Parašykite f-ją kur konvertuotų masyvą į stringą
@example: arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456" 
 arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef" 
 arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
 */
function keisti_i_teksta(masyvas){
    let tekstas = "";
    for(let i = 0; i < masyvas.length; i++){
        tekstas += masyvas[i];
    }
    return tekstas;
}
// console.log(keisti_i_teksta([1, 2, 3, 4, 5, 6]));
// console.log(keisti_i_teksta(["a", "b", "c", "d", "e", "f"]));
// console.log(keisti_i_teksta([1, 2, 3, "a", "s", "dAAAA"]));

 /*
5. Parašykite f-ją kuri apverstų masyvą
 */

function reverse(masyvas){
    let apverstas_masyvas = [];
    while (masyvas[0] !== undefined){
        apverstas_masyvas.push(masyvas.pop())
    }
     return apverstas_masyvas; 
}
// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));

 /*
6. Parašykite f-ją kuri gražintų paskutinį masyvo elementą
 */
function getLastItem(masyvas){
    return masyvas.pop();
}
// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

 /*
7. Parašykite f-ją kuriai būtų perduodamas parametras masyvas iš skaičių. 
Ir gražinamas masyvas kurio elementai yra padauginti iš 2
*/
function multipliedArray(masyvas){
    const naujas_masyvas = [];
    for(let i = 0; i < masyvas.length; i++){
        naujas_masyvas.push(masyvas[i] * 2);
    }
    return naujas_masyvas
}
// console.log(multipliedArray([1, 2, 3, 4, 5, 6]));

/*
8. Parašykite f-ją, kuri konvertuotų visus masyvo elementus į stringus
@example: parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"] 
parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"] 
*/
function parseArray(masyvas){
    const naujas_masyvas = [];
    for(let i = 0; i < masyvas.length; i++){
        naujas_masyvas.push(String(masyvas[i]));
    }
    return naujas_masyvas;
}
// console.log(parseArray([1, 2, "a", "b"]));
// console.log(parseArray(["abc", 123, "def", 456]));

/*
9. Išvesti į consolę visą daugybos lentelę (ciklas cikle pagalba
*/
function daugybos_lentele(skaicius1, is_skaiciaus2){
    for(let i = 1; i<= skaicius1; i++){
        for(let j = 1; j <= is_skaiciaus2; j++){
            console.log(`${i} x ${j}`);
        }
    }
}

daugybos_lentele(20, 20);