
const prekes = [
    { barkodas: "4061615651", pavadinimas: "Degtukai", kaina: 0.2 },
    { barkodas: "4061615652", pavadinimas: "Dantų šepetėlis", kaina: 1.5 },
    { barkodas: "4061615653", pavadinimas: "Kava", kaina: 4.99 },
    { barkodas: "4061615654", pavadinimas: "Vandens butelis", kaina: 0.89 },
    { barkodas: "4061615655", pavadinimas: "Šokoladas", kaina: 1.79 },
    { barkodas: "4061615656", pavadinimas: "Tualetinis popierius", kaina: 2.5 },
    { barkodas: "4061615657", pavadinimas: "Makaronai", kaina: 0.99 },
    { barkodas: "4061615658", pavadinimas: "Ryžiai", kaina: 1.2 },
    { barkodas: "4061615659", pavadinimas: "Kondicionierius", kaina: 3.5 },
    { barkodas: "4061615660", pavadinimas: "Šampūnas", kaina: 3.99 }];

/*
1 Užduotis: Kiekvienai prekei masyve pritaikykite metodą, kuris modifikuoja kiekvienos prekės barkodą.
Barkodai prasideda pirmąja prekės pavadinimo raide ir atskiriamas brūkšneliu, pvz:
D-4061615651 (degtukai).
Rezultatą console.log’inkite
*/
prekes.forEach((preke) => {
    let pradzia = `${preke.pavadinimas.charAt(0)}-`;
    preke.barkodas = pradzia + preke.barkodas;
});
// console.log(prekes);

/*
2 Užduotis: Išfiltruokite prekes, kurios prasideda pirmąja raide 'D'. Rezultate turi likti 2 prekės: ‘Degtukai’ ir ‘Dantų šepetėlis’. 
Rezultatą console.log’inkite
*/
const preke_prsideda_D = prekes.filter((preke) =>
    preke.pavadinimas.startsWith("D")
);
// console.log(preke_prsideda_D);

/*
3 Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur.
*/
const daugiau_uz_eura = prekes.filter((preke) =>
    preke.kaina > 1
);
// console.log(daugiau_uz_eura);

/*
4 Užduotis: Išfiltruokite prekes, kurios kainuoja mažiau nei 3 eur.
*/
const maziau_uz_tris = prekes.filter((preke) =>
    preke.kaina < 3
);
// console.log(maziau_uz_tris);

/*
5 Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur ir mažiau nei 3 eur.
*/
const tarp_vieno_ir_triju = prekes.filter((preke) =>
    preke.kaina > 1 && preke.kaina < 3
);
// console.log(tarp_vieno_ir_triju);

/*
6 Užduotis: Raskite prekę, kurios pavadinimas: ‘Kava’. Jos reikšmę pakeiskite į ‘Kavos pupelės’.
*/
const kavos_indeksas = prekes.findIndex((preke) =>
    preke.pavadinimas.toLowerCase() === "kava".toLowerCase());
prekes[2].pavadinimas = "Kavos pupelės";

// console.log(prekes);

/*
7 Užduotis: Prekėms, kurios kainuoja pigiau nei 1.5eur pridėkite pvmProcentas laukelį į šiuos objektus, 
šioms prekėms taikomas pvmProcentas: 15%, prekėms kurios yra brangesnės, taikomas pvmProcentas: 21%. 
Apskaičiuokite pvmMokestis laukelių reikšmes, pritaikę šį pvmProcentą prie kainos.

Finale kiekvienas objektas turi atrodyti taip:
{ 
barkodas: "4061615651",
pavadinimas: "Degtukai", 
kaina: 0.2,
pvmProcentas: 15,
pvmMokestis: 0.03
}
*/

const atnaujintos_prekes = prekes.map((preke) => {
    if (preke.kaina < 1.5){
        preke.pvmProcentas = 15;
        preke.pvmMokestis = (15 * preke.kaina / 100).toFixed(2);
        return preke;
    } else{
        preke.pvmProcentas = 21;
        preke.pvmMokestis = (21 * preke.kaina / 100).toFixed(2);
        return preke;
    }
});
console.log(atnaujintos_prekes);

/*
8 Užduotis: Raskite prekes, kurios kainuoja pigiau nei 2 eur, ir jų pavadinimas baigiasi raide ‘s’.
*/
const atrinktos_prekes = prekes.filter((preke) =>
    preke.kaina < 2 && preke.pavadinimas.endsWith("s"));

// console.log(atrinktos_prekes);