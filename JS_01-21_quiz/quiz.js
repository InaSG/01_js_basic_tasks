/*
2025-01-21 (Užduotis ilgesniam laikui)
Objektų pritaikymas ir DOM manipuliacijos
Tikslas:
Sukurti paprastą QUIZ aplikaciją apie JavaScript, naudojant visas iki šiol išmoktas žinias: kintamuosius, sąlyginius sakinius, ciklus, masyvus, ir DOM manipuliaciją.
Užduoties etapai:
Pasiruošimas:
Sukurti masyvą, kuriame bus objektai. Kiekvienas objektas reprezentuos vieną klausimą su atsakymais.
*/

const questions = [
  {
    question: "Kas yra 'let'?",
    answers: ["Kintamasis", "Funkcija", "Ciklas", "DOM elementas"],
    correctAnswer: 0 // Indeksas teisingo atsakymo
  },
  {
    question: "Ką daro 'document.querySelector'?",
    answers: ["Keičia stilių", "Pasirenka DOM elementą", "Prideda tekstą", "Sukuria funkciją"],
    correctAnswer: 0
  }
];

/*
Logika pradėti quiz'ą:
Paspaudus „Pradėti QUIZ“ mygtuką:
Slėpti mygtuką.
Atvaizduoti pirmąjį klausimą ir atsakymų sąrašą iš masyvo.
*/
function pradeti(){
  const starto_mygtukas = document.querySelector("#start_button");
  const klausimo_deze = document.querySelector("#quiz_container");
  starto_mygtukas.classList.add("hidden");
  klausimo_deze.classList.remove("hidden");
}
// Įsitikinti, kad atsakymai yra paspaudžiami (pridėti mygtukus su įvykio stebėtojais).
// Atsakymo tikrinimas:
// Pasirinkus atsakymą:
// Patikrinti, ar jis teisingas.
// Rodoma žinutė „Teisingai!“ arba „Neteisingai!“.
// Pereiti prie kito klausimo (arba parodyti rezultatą, jei tai buvo paskutinis klausimas).
// Rezultatų atvaizdavimas:
// Kai visi klausimai atsakyti:
// Atvaizduoti bendrą rezultatą (alert arba div elemente).
// Pridėti mygtuką „Pradėti iš naujo“, kuris leidžia iš naujo pradėti quiz'ą.
// Užduoties tikslai:
// Naudoti masyvą ir objektus duomenų saugojimui.
// Naudoti ciklus ir sąlyginius sakinius atsakymų tikrinimui.
// Manipuliuoti DOM elementais klausimams ir atsakymams rodyti.
// Pridėti mygtukų įvykių stebėtojus.
// Papildomos idėjos:
// Laikmatis kiekvienam klausimui (pvz., 10 sekundžių).
// Klausimų atsitiktinė tvarka.
// Taškų sistema (pvz., +1 už teisingą atsakymą).
