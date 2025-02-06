const vardo_ivesties_el = document.getElementById("#vardas");
const vardo_tikrinimo_el = document.getElementById("#vardo_tikrinimas");
const pavardes_ivesties_el = document.getElementById("#pavarde");
const pavardes_tikrinimo_el = document.getElementById("#pavardes_tikrinimas");
const darb_numerio_ivesties_el = document.getElementById("#darb_numeris");
const numerio_tikrinimo_el = document.getElementById("#numerio_tikrinimas");
const registr_mygtuko_el = document.getElementById("#mygtukas_registruotis");

/* Validacija: darbuotojo vardas - nuo 3 iki 50 simbolių, pirma raidė privalo būti didžioji, 
negali būti nei vieno skaičiaus, negali būti nei vieno tarpelio.*/

vardo_ivesties_el.addEventListener("change", (event)=>{
    console.log(event.target);
})

/* darbuotojo pavardė - nuo 3 iki 50 simbolių, pirma raidė privalo būti didžioji, 
negali būti nei vieno skaičiaus. */
// pavardes_ivesties_el.addEventListener("change", (event)=>{
//     console.log("raide");
// })

/* darbuotojo numeris - prasideda trimis didžiosiomis raidėmis, po trečiosios 
raidelės automatiškai padedamas "-" ir tuomet leistina įvestis - tik trys skaičiai.*/ 


/* Po kiekvienu įvesties laukeliu - pagalbinis tekstas raudonomis arba žaliomis 
mažomis raidelėmis sufleruojantis, ar validacija sėkminga, ar kažko trūksta. 
Pakeitus įvesties laukelio reikšmę, pagalbinis tekstas turi atsinaujinti į kitą 
būseną, jei laukelyje įvesta reikšmė yra neteisinga, arba iš neteisingos 
pasikeitė į sėkmingą. Savo nuožiūra padarykite formą kiek įmanoma labiau patogesne 
naudotis. (tarkime apribokite leistinų įvesti raidžių kiekį iki 50)
Po forma esančio mygtuko pagalba užfiksuokite, kada įvyko check-in (datą ir laiką) 
bei išsaugokite objektą į bendrą sąrašą localStorage (tariamam tolimesniam 
panaudojimui kituose programos vystymo etapuose)*/
