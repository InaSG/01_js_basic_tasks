import fs from 'node:fs';
import path from 'path';

/*
1. Sukurkite programą, patikrinančią ar failas.txt egzistuoja kataloge data/failas.txt. Jei failas egzistuoja - 
konsolėje išveskite pranešimą “failas.txt yra data kataloge”;
const arEgzistuoja = fs.existsSync("kelias/iki/failo.txt"); 
// duoda boolean reikšmę true - jei egzistuoja, false - jei neegzistuoja

2. Patobulinkite sukurtą programą, kad jei failas kataloge data neegzistuoja arba failas.txt neegzistuoja, kad juos sukurtų.
Direktorijos sukūrimas:
fs.mkdirSync(“katalogas”);
//sukuria katalogą duotu pavadinimu projekto direktorijoje

3. Patobulinkite sukurtą programą, kad nuo šiol ji priimtų paleidimo metu pateikiamą parametrą, arba kelis parametrus 
(iš process.argv) ir jais papildytų failas.txt, atskirtais naujomis eilutėmis.
*/
const tekstas = process.argv.slice(2);

let ieskomas_failas = "failas.txt"
let katalogas = "katalogas";
const arEgzistuoja_failas = fs.existsSync(path.join(process.cwd(), katalogas, ieskomas_failas));

if (arEgzistuoja_failas) {
    if (process.argv.length < 3){
        console.log("Nepateikėte nieko, kuo būtų galima papildyti failą");
    }
    else {
        tekstas.forEach((arg)=>{
            fs.appendFileSync(path.join(process.cwd(), katalogas, ieskomas_failas), `\n ${arg}`);
        });
    }
}
else {
    if (!fs.existsSync(path.join(process.cwd(), katalogas))){
        fs.mkdirSync("katalogas");
        fs.writeFileSync(path.join(process.cwd(), katalogas, ieskomas_failas), "");;
        console.log("Sukurtas katalogas 'Katalogas' ir failas 'failas.txt' jame.");
    } else{
        fs.writeFileSync(path.join(process.cwd(), katalogas, ieskomas_failas), "");
        console.log("Kataloge 'Katalogas' sukurtas failas 'failas.txt' jame.");
    };
};


