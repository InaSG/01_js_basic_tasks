/* 2. Sukurkite nodeJS programą sum.js, kuri parašo argumentuose pateiktų parametrų sumą. 
Jei parametro nepavyksta paversti į skaičių, jo reikšmę laikykime 0;*/

export function sum(skaitmenys){
    let suma = 0;
    skaitmenys.forEach((skaitmuo) => {
        if (!isNaN(skaitmuo)) {
            Number(skaitmuo);
            suma += Number(skaitmuo);
        };
    });
    return suma;
}
