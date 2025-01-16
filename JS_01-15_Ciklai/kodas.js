// const skaiciai = [];
// let skaicius = 0;

// while (skaicius <=100){
//     skaiciai.push(skaicius);
//     skaicius+=2;
// }
// console.log(skaiciai);


// //Sukurti funkciją, kuri susumuoja visus skaičius masyve ir
// //atiduoda bendrą sumą

// const skaiciai = [];
// let suma = 0;
// let index = 0;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// while (index < 10){
//     skaicius = rand(1, 100);
//     skaiciai.push(skaicius);
//     suma += skaicius
//     index++;
// }
// console.log(skaiciai)
// console.log(suma);

// 

// const skaiciai = [];

// function didziausiasSk(masyvas){
//     let didziausias = masyvas[0];
//     let index = 1;
//     while (index < masyvas.length){
//         if (masyvas[index] > didziausias) didziausias = masyvas[index];
//         index ++;
//     }
//     return didziausias;
// }

// index = 0;
// while (index < 10){
//         let skaicius = rand(1, 100);
//         skaiciai.push(skaicius);
//         index++;
//     }

// console.log(skaiciai);
// console.log(didziausiasSk(skaiciai));

/*
ND:
1. Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų. Atsitiktiniai skaičiai nuo M iki O.
*/
function generuotiAtsitiktinius(kiek, min, max){
    const atsitiktiniai_sk = [];
    let i = 0;
    while (i < kiek){
        skaicius = rand(min, max);
        atsitiktiniai_sk.push(skaicius);
        i++;
    }
    return atsitiktiniai_sk;
}
// console.log(generuotiAtsitiktinius(4, 100, 105));

/*
2. Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M, mažesnius nei N.

atsakymas konsolėje: 4, 2, 4 
*/ 
function tikMazesni(masyvas, norma){
    let i = 0;
    const atsakymas = [];
    while (i < masyvas.length){
        if(masyvas[i] < norma){
            atsakymas.push(masyvas[i]);
        }
        i++;
    }
    return atsakymas;
}
    
// console.log((tikMazesni([4,5,6,7,2,4], 5)).join(", "));

/*
3. Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų, kiek kartų pateiktame skaičių masyve yra pasikartojantis skaičius 3;
*/
function countAllThrees(array){
    let i = 0;
    count = 0;
    while (i < array.length){
        if (array[i] === 3){
            count++;
        }
        i++;
    }
    return count;
}
// console.log(countAllThrees([4, 3, 66, 3, 6, 96, 3, 3, 3]));

/*
4. Sukurkite funkcijas countAllEven(array) ir countAllOdd(array). Pirmoji funkcija suskaičiuoja, kiek yra lyginių skaičių pateiktame 
masyve. Kita suskaičiuoja kiek yra nelyginių skaičių;
*/
let masyvas = [5, 8, 6, 7, -8, 2, 0];
function countAllEven(array){
    let i = 0;
    let count = 0;
    while (i < array.length){
        if (array[i] % 2 === 0) {
            count++;
        }
        i++;
    }
    return count;
}

function countAllOdd(array){
    let i = 0;
    let count = 0;
    while (i < array.length){
        if (array[i] % 2 === 1) {
            count++;
        }
        i++;
    }
    return count;
}
// console.log(countAllEven(masyvas));
// console.log(countAllOdd(masyvas));

/*
5. Sukurkite funkciją countAllEvenUnderSix(array), kuri suskaičiuoja, kiek yra lyginių skaičių, kurių reikšmė yra  6 arba mažesnė  
pateiktame masyve.
*/
function countAllEvenUnderSix(array){
    let i = 0;
    let count = 0;
    while (i < array.length){
        if (array[i] % 2 === 0 && array[i] <= 6) {
            count++;
        }
        i++;
    }
    return count;    
}
// console.log(countAllEvenUnderSix(masyvas));

/*
6. Sukurkite funkciją throwCoin(), kuri imituoja monetos metimą. funkcijos gražinama reikšmė: “H” - Herbas arba “S” - Skaičius;
*/
function throwCoin(){
    rezultatas = Math.round(Math.random());
    if(rezultatas === 0) return  "S";
    else return "H"
}
// console.log(throwCoin());

/*
7. Sukurkite funkciją, kuri imituoja monetos metimą 20 kartų, suskaičiuokite kiek kartų iškrito skaičius, kiek kartų iškrito herbas. 
Paskaičiuokite procentaliai, kokiu dažnumu krito skaičius, kokiu dažnumu krito skaičius; (pasiūlymas patobulinimui mini-game - > 
pridėti puslapyje mygtuką, leisiantį pasirinkti kokios pusės monetos tikitės, ir pridėti mesti monetą mygtukus, tada atitinkamai 
atvaizduoti, buvo laimėta - ar pralaimėta)
*/
let all_throws = [];
function how_many_heads(throws){
    let i = 0;
    let count_heads = 0;
    let count_tails = 0;

    while (i < throws){
        result = throwCoin();
        if (result == "S")
            count_heads++;
        else count_tails++;
        
        all_throws.push(result);
        i++;
    }
    let how_many_heads = (count_heads / throws * 100).toFixed(0);
    let how_many_tails = (count_tails / throws * 100).toFixed(0);
    return `Iš ${throws} metimų ${how_many_heads}% atvejų iškrito skaičius ir ${how_many_tails}% atvejų - herbas`;
}
// console.log(all_throws);
// console.log(how_many_heads(20));

/*
8. Sukurkite funkciją sumAll(masyvas), kuri susumuoja visus masyvo elementus, bei gražina šią sumą kaip rezultatą;
*/
function sumAll(masyvas){
    let i = 0;
    let suma = 0;
    while (i < masyvas.length){
        suma += masyvas[i];
        i++;
    }
    return suma;
}
// console.log(sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
9. Sukurkite funkciją average(arr), kuri atranda visų masyve pateiktų skaičių vidurkį; PVZ: average([1,2,3,4,5])//3
*/
function average(arr){
    let i = 0;
    let suma = 0;
    while (i < arr.length){
        suma += arr[i];
        i++;
    }
    return (suma/arr.length).toFixed(2);
}

console.log(sumAll([1, 2, 3, 4, 6, 7, 8, 9]));

/*
10. Sukurkite funkciją findAllUniqueNumbers(masyvas), kuri atranda masyve esančius unikalius skaičius. gražina juos masyvo pavidalu: 
pvz: findAllUniqueNumbers([1,1,2,8,8,1, 4, 6]) // [1,2,8,4,6];
*/
