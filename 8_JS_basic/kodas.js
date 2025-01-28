/*
1. Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, Masyvo 
elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. Rasti 
geriausiai besimokantį ir blogiausiai.
*/
function atsitiktinisSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
function gerBlogVidurkiai(mokiniuKiekis, blogVidurkis, gerVidurkis) {
    let vidurkiai = [];
 
    for (let i = 0; i < mokiniuKiekis; i++) {
        vidurkiai.push(atsitiktinisSkaicius(blogVidurkis, gerVidurkis));
    }
 
    let gersVidurkis = vidurkiai[0];
    let blogsVidurkis = vidurkiai[0];
 
    for (let i = 0; i < vidurkiai.length; i++) {
        if (vidurkiai[i] > gersVidurkis) {
            gersVidurkis = vidurkiai[i];
        }
        if (vidurkiai[i] < blogsVidurkis) {
            blogsVidurkis = vidurkiai[i];
        }
    }
 
    let geriMokiniai = [];
    let blogiMokiniai = [];
 
    for (let i = 0; i < vidurkiai.length; i++) {
        if (vidurkiai[i] == gersVidurkis) {
            geriMokiniai.push(i + 1);
        }
        if (vidurkiai[i] == blogsVidurkis) {
            blogiMokiniai.push(i + 1);
        }
    }
    console.log(`Mokinių vidurkiai: ${vidurkiai}`);
    console.log(`Geriausiai besimokantys mokiniai: Nr. ${geriMokiniai} Vidurkis: ${gersVidurkis}`);
    console.log(`Blogiausiai besimokantys mokiniai: Nr. ${blogiMokiniai} Vidurkis: ${blogsVidurkis}`);
}
// gerBlogVidurkiai(30, 1, 10);

/*
2. Studento trimestro disciplinų skaičius yra 7, kiekvienoje disciplinoj min 3 
pažymiai. Rasti studento semestro vidurkį.
Paprastesnis variantas susikuriam masyvą rankiniu būdu
Sudėtingesnis variantas susigeneruojam masyvą iš random pažymių nuo 1 iki 10, 
pažymių kiekis irgi random nuo 3 iki 6
*/
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sugeneruoti_pazymius(){
    let visi_pazymiai = [];
    for (let i = 0; i < 7; i++){
        let skaiciukas = rand(3, 6);
        let dalyko_pazymiai = [];
        for (let j = 0; j < skaiciukas; j++){
            dalyko_pazymiai[j] = rand(1, 10);
            dalyko_pazymiai.push(rand(1, 10));
        }
        visi_pazymiai.push(dalyko_pazymiai);
    }    
    return visi_pazymiai
}
// console.log(sugeneruoti_pazymius());
// let visi_pazymiai = sugeneruoti_pazymius();
// console.log(visi_pazymiai[0]);

function semestro_vidurkis(pazymiai) {
    let pazymiu_suma = 0;
    pazymiu_skaicius = 0;
 
    for (i = 0; i < pazymiai.length; i++){
        dalyko_pazymiai = pazymiai[i];
 
        for (j = 0; j < dalyko_pazymiai.length; j ++){
            pazymys = dalyko_pazymiai[j];
            pazymiu_skaicius += 1;
            pazymiu_suma += pazymys;
 
        }
    }
        return (pazymiu_suma / pazymiu_skaicius).toFixed(2);
    }
    
// console.log(semestro_vidurkis(sugeneruoti_pazymius()));

/*
3. Mokytojų atlyginimai suvesti į masyvą. Rasti kiek žmonių gauna < nei 600 
Eurų., < nei 800Eurų. ir < nei 1100 eurų. Iš tų trijų grupių surasti, kurių 
yra daugiausia?
Paprastesnis variantas susikuriam masyvą rankiniu būdu su minimum 10 elementų
Sudėtingesnis variantas susigeneruojam masyvą iš random skaičių nuo 500 iki 
1100, elementų gali būti 100
*/
const atlyginimai = []
 
let atlyginimas600 = 0;
let atlyginimas800 = 0;
let atlyginimas1100 = 0;
 
let didziausiaGrupe = 0;
 
for (let i = 0; i < 100; i++) {
    atlyginimai.push(rand(500, 1100));
    if (atlyginimai[i] <= 600) {
        atlyginimas600++;
    }
    else if (atlyginimai[i] <= 800) {
        atlyginimas800++;
    }
    else atlyginimas1100++;
   
}
 
if (atlyginimas800 < atlyginimas1100) {
    didziausiaGrupe = atlyginimas1100;
}
else if (atlyginimas600 < atlyginimas800) {
    didziausiaGrupe = atlyginimas800;
}
else didziausiaGrupe = atlyginimas600
 
// console.log(`Mažiau nei 600 eur gauna ${atlyginimas600} žmonių, mažiau nei 800 eur ${atlyginimas800}, mažiau nei 1100 eur gauna ${atlyginimas1100}, didžiausioje grupėje yra ${didziausiaGrupe} žmonės.`);

/*
4. Parašyti f-ją kuri sudvigubintu masyvą
@example
['Ace', 10, true] => ['Ace', 10, true, 'Ace', 10, true]
[0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
*/
function sudvigubintiMasyva(array) {
    return array.concat(array);
  }
console.log(sudvigubintiMasyva(["Space", 10, true]));
console.log(sudvigubintiMasyva([0, 10, 20, 30, 40, 50]));

/*
5. Parašyti funkciją, kuri stringų masyvo elementus transformuoja į didžiasias 
raides. 
@example
[ 'internship', 'glutinous-shriek', 'elevation' ] => [ 'INTERNSHIP', 
'GLUTINOUS-SHRIEK', 'ELEVATION' ],
[ 'a', 'b', 'c', 'd', 'e' ] => [ 'A', 'B', 'C', 'D', 'E' ]
*/
function iDidziasias(array) {
    return array.map(string => string.toUpperCase());
  }
//   console.log(iDidziasias(['internship', 'glutinous-shriek', 'elevation']));
//   console.log(iDidziasias([ 'a', 'b', 'c', 'd', 'e' ]));

/*
6. Parašyti f-ją, kuri, gražintų masyvą su kito masyvo string ilgiais
@example
[ '', 'a', 'bc', 'def', 'ghij' ] => [ 0, 1, 2, 3, 4 ]
[ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function kokie_masyvu_ilgiai(masyvai){
    let ilgiai = [];
    for (let i = 0; i < masyvai.length; i++){
        ilgiai.push(masyvai[i].length);
    }
    return ilgiai;
}

// console.log(kokie_masyvu_ilgiai([ '', 'a', 'bc', 'def', 'ghij' ]));
// console.log(kokie_masyvu_ilgiai([ 'angular', 'react', 'ember' ]));