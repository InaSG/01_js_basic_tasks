/*
2025-01-21 (Užduotis ilgesniam laikui)
Objektų pritaikymas ir DOM manipuliacijos
Tikslas:
Sukurti paprastą QUIZ aplikaciją apie JavaScript, naudojant visas iki šiol išmoktas žinias: kintamuosius, sąlyginius sakinius, ciklus, masyvus, ir DOM manipuliaciją.
Užduoties tikslai:
Naudoti masyvą ir objektus duomenų saugojimui.
Naudoti ciklus ir sąlyginius sakinius atsakymų tikrinimui.
Manipuliuoti DOM elementais klausimams ir atsakymams rodyti.
Pridėti mygtukų įvykių stebėtojus.
Užduoties etapai:
Pasiruošimas:
Sukurti masyvą, kuriame bus objektai. Kiekvienas objektas reprezentuos vieną klausimą su atsakymais.
*/
const starto_mygtukas = document.querySelector("#start_button");
const klausimo_deze = document.querySelector("#quiz_container");
const klausimas = document.getElementById("klausimas");
const ats_variantai = document.querySelector("#atsakymai");
const pateikti_mygtukas = document.querySelector("#pateikti");
const ivertinimo_el = document.getElementById("ivertinimas");
const teisingo_ats_pateikimo_el = document.getElementById("teisingas_ats");
let teisingu_ats_skaicius = 0;

//TODO: sugalvoti daugiau klausimų;
//TODO:
const questions = [
  {
    question: "Kas yra 'let'?",
    answers: ["Kintamasis", "Funkcija", "Ciklas", "DOM elementas"],
    correctAnswer: 0 // Indeksas teisingo atsakymo
  },
  {
    question: "Ką daro 'document.querySelector'?",
    answers: ["Keičia stilių", "Pasirenka DOM elementą", "Prideda tekstą", "Sukuria funkciją"],
    correctAnswer: 1
  }
];

/*
Logika pradėti quiz'ą:
Paspaudus „Pradėti QUIZ“ mygtuką:
Slėpti mygtuką.
*/
function pradeti() {
  starto_mygtukas.classList.add("hidden");
  klausimo_deze.classList.remove("hidden");
  pateikti_klausima();
}

//TODO: nebeleisti keisti ats. po pateikimo;

/*Atvaizduoti pirmąjį klausimą ir atsakymų sąrašą iš masyvo.*/
let j = 0;
function pateikti_klausima() {
  pateikti_mygtukas.disabled = false;
  let atsakimuHTML = "";
  for (let i = 0; i < questions[j].answers.length; i++) {
    atsakimuHTML += `<input class ="to_check_box" id="k1a${i + 1}" type ="radio" name="radio" 
              value = "${questions[j].answers[i]}">
               ${questions[j].answers[i]}<br>`;
  }
  // console.log(atsakimuHTML);
  klausimas.innerText =  `${j+1}. ${questions[j].question}`;
  ats_variantai.innerHTML = atsakimuHTML;
  j++;
};

/*Įsitikinti, kad atsakymai yra paspaudžiami (pridėti mygtukus su įvykio stebėtojais).
Atsakymo tikrinimas:
Pasirinkus atsakymą:
Patikrinti, ar jis teisingas.
Rodoma žinutė „Teisingai!“ arba „Neteisingai!“.
Pereiti prie kito klausimo (arba parodyti rezultatą, jei tai buvo paskutinis klausimas).*/

pateikti_mygtukas.addEventListener("click", priimti_ats);

function priimti_ats() {
  let inputs = document.querySelectorAll("input");
  let ats_indeksas;
  for (const i in inputs) {
    if (inputs[i].checked) ats_indeksas = i;
  }

  if (ats_indeksas) {
    if (ats_indeksas == questions[j-1].correctAnswer) {
      console.log(teisingu_ats_skaicius);
      console.log(questions[j-1].answers[0])
      pateikti_mygtukas.disabled = true;
      teisingu_ats_skaicius++;
      ivertinimo_el.className = "teisingai";
      ivertinimo_el.innerText = "teisingai";
    } else{
      pateikti_mygtukas.disabled = true;
      ivertinimo_el.className = "neteisingai";
      ivertinimo_el.innerText = "neteisingai";
      teisingo_ats_pateikimo_el.innerText = `teisingas atsakymas - ${questions[j-1].answers[questions[j-1].correctAnswer]}`;
    } 
    setTimeout(() => {
      if (j < questions.length) {
        ivertinimo_el.innerText = "";
        teisingo_ats_pateikimo_el.innerText = "";
        pateikti_klausima();
    } else {
      ivertinti_rezultatus;
    }
    console.log("kitas klausimas")}, 3000);
  } else {
      ivertinimo_el.className = "nepasirinktas_ats";
      ivertinimo_el.innerText = "Pasirinkite teisingą atsakymą";
  }
}
//TODO: pabaigti;

// Rezultatų atvaizdavimas:
// Kai visi klausimai atsakyti:
// Atvaizduoti bendrą rezultatą (alert arba div elemente).
// Pridėti mygtuką „Pradėti iš naujo“, kuris leidžia iš naujo pradėti quiz'ą.


// Papildomos idėjos:
// Laikmatis kiekvienam klausimui (pvz., 10 sekundžių).
// Klausimų atsitiktinė tvarka.
// Taškų sistema (pvz., +1 už teisingą atsakymą).
