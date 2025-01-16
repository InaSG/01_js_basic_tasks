// Sąlyga: Generuojamas skaičius tarp 0 ir 99;

// Žemiau pateiktos kategorijos. Sugeneruotas skaičius papuola į Vieną iš šių kategorijų. Kiekviena kategorija turi savo operaciją. Tą operaciją reikia atlikti. Operacijos rezultatas turi būti išspausdintas su console.log();
    
// Kategorija 1: 0 - 10 - pakelti skaičių kvadratu ir atspausdinti
// Kategorija 2: 11 - 19  - atspausdinti skaičių tokį koks jis yra;
// Kategorija 3: 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
// Kategorija 4: 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
// Kategorija 5:  50 arba didesnis ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
// Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;
    
// Rezultatas:
// Iškritus bet kuriai sąlygai atspausdinti, kokią sąlygą skaičius atitiko
// PVZ. sugeneruotas skaičius 28:
// Skaičius - 28, Kategorija 3, operacijos rezultatas: 26
    
function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
let sk = rand(0, 99);
console.log(`Skaičius - ${sk}`);
  
if (sk <= 10){
    sk*= sk;
    console.log("Kategorija 1");
    console.log(`Operacijos rezultatas: ${sk}`)
}
else if (sk <= 19){
    console.log("Kategorija 2");
    console.log(`Operacijos rezultatas: ${sk}`)
}
else if (sk <=49 && sk % 2 == 0){
    console.log("Kategorija 3");
    sk = sk - (Math.floor(sk/10));
    console.log(`Operacijos rezultatas: ${sk}`)
}
else if (sk <=49 && sk % 2 != 0){
    console.log("Kategorija 4");
    sk = (sk + (sk % 10)) / 2;
    console.log(`Operacijos rezultatas: ${sk}`)
}
else if(sk > 49 && sk % 3 == 0){
    console.log("Kategorija 5");
    let text = String.fromCharCode(rand(65, 90)) +
    String.fromCharCode(rand(65, 90)) + 
    String.fromCharCode(rand(65, 90)) + 
    String.fromCharCode(rand(65, 90));

    console.log(`Operacijos rezultatas: ${text}`);
}
else{
    console.log("Skaičius netinkamas nei vienai kategorijai");
}
