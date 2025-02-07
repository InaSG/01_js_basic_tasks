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
  },
  {
    question: "Kaip turėtume rašyti norėdami pakeisti p elemento, kurio id = 'demo', tekstą?",
    answers: ["document.getElement('p').innerHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World!';", "#demo.innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';"],
    correctAnswer: 3
  },
  {
    question: "Kaip parašytumėte 'alert' pranešimą 'Pasirinkite bent vieną atsakymą!'?",
    answers: ["msg('Pasirinkite bent vieną atsakymą!');", "alertBox('Pasirinkite bent vieną atsakymą!');", "alert('Pasirinkite bent vieną atsakymą!');", "msgBox('Pasirinkite bent vieną atsakymą!');"],
    correctAnswer: 2
  },
  {
    question: "Kaip JavaScript kalboje kuriami sąlygos sakiniai?",
    answers: ["if i == 5 then", "if (i == 5)", "if i = 5 then", "if (i = 5)"],
    correctAnswer: 1
  },
  {
    question: "Kaip JavaScript kalboje aprašomi masyvai?",
    answers: ["const colors = (1:'red', 2:'green', 3:'blue')", "let colors = 1 = (red), 2 = (green), 3 = (blue)", "let colors = red, green, blue", "const colors = ['red', 'green', 'blue']"],
    correctAnswer: 3
  },
  {
    question: "Kaip JavaScript kalboje kuriami 'for' ciklai?",
    answers: ["for i = 1 to 5", "for (i = 0; i <= 5)", "for (i <= 5; i++)", "for (i = 0; i <= 5; i++)"],
    correctAnswer: 3
  },
  {
    question: "Kaip suapvalintumėte skaičių 7,25?",
    answers: ["Math.rnd(7.25)", "Math.round(7.25)", "round(7.25)", "rnd(7.25)"],
    correctAnswer: 1
  },
  {
    question: "Koks įvykis įvyksta, kai vartotojas paspaudžia kurį nors HTML elementą?",
    answers: ["onclick", "onchange", "onmouseover", "onmouseclick"],
    correctAnswer: 0
  },
  {
    question: "Kaip rekomenduojama deklaruoti kintamuosius JavaScript kalboje?",
    answers: ["kintamasis = 0", "var kintamasis == 0", "let kintamasis = 0", "let kintamasis == 0"],
    correctAnswer: 2
  }
];

const starto_mygtukas = document.querySelector("#start_button");
const klausimo_deze = document.querySelector("#quiz_container");
const uzduoties_el = document.querySelector("#uzduotis");
const klausimas = document.getElementById("klausimas");
const ats_variantai = document.querySelector("#atsakymai");
const pateikti_mygtukas = document.querySelector("#pateikti");
const ivertinimo_bloko_el = document.getElementById("ivertinimai");
const ivertinimo_el = document.getElementById("ivertinimas");
const teisingo_ats_pateikimo_el = document.getElementById("teisingas_ats");
const pavadinimo_dezes_el = document.getElementById("pavadinimo_div");
const galutinio_ivertinimo_el = document.createElement("h3");

let teisingu_ats_skaicius = 0;
let j = 0;
let atsakimuHTML = "";

/*
Logika pradėti quiz'ą:
Paspaudus „Pradėti QUIZ“ mygtuką:
Slėpti mygtuką.
*/
function pradeti() {
  teisingu_ats_skaicius = 0;
  j = 0;
  galutinio_ivertinimo_el.remove();
  teisingo_ats_pateikimo_el.innerText = "";
  ivertinimo_el.innerText = "";
  starto_mygtukas.classList.add("hidden");
  klausimo_deze.classList.remove("hidden");
  pateikti_mygtukas.classList.remove("hidden");
  pavadinimo_dezes_el.insertAdjacentElement("beforeend", klausimo_deze);
  pateikti_klausima();
}

/*Atvaizduoti pirmąjį klausimą ir atsakymų sąrašą iš masyvo.*/

function pateikti_klausima() {
  pateikti_mygtukas.disabled = false;
  uzduoties_el.innerHTML = "Pasirinkite teisingą atsakymą!";
  let atsakimuHTML = "";
  for (let i = 0; i < questions[j].answers.length; i++) {
    atsakimuHTML += `<input class ="to_check_box" id="k1a${i + 1}" type ="radio" name="radio" 
              value = "${questions[j].answers[i]}">
               ${questions[j].answers[i]}<br>`;
  }
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

function deaktyvuoti_radio(){
  let radio = document.getElementsByName("radio");
  for(let i = 0; i < radio.length; i++)
   {
       radio[i].disabled = true;
   }
  };

  function aktyvuoti_radio(){
    let radio = document.getElementsByName("radio");
    for(let i = 0; i < radio.length; i++)
     {
         radio[i].disabled = false;
     }
    };

function priimti_ats() {
  let inputs = document.querySelectorAll("input");
  let ats_indeksas;
  for (const i in inputs) {
    if (inputs[i].checked) ats_indeksas = i;
  }

  if (ats_indeksas) {
    if (ats_indeksas == questions[j-1].correctAnswer) {
      deaktyvuoti_radio();
      pateikti_mygtukas.disabled = true;
      teisingu_ats_skaicius++;
      ivertinimo_el.className = "teisingai";
      ivertinimo_el.innerText = "teisingai";
    } else{
      deaktyvuoti_radio();
      pateikti_mygtukas.disabled = true;
      ivertinimo_el.className = "neteisingai";
      ivertinimo_el.innerText = "neteisingai";
      teisingo_ats_pateikimo_el.innerText = `teisingas atsakymas - "${questions[j-1].answers[questions[j-1].correctAnswer]}"`;
    } 
      if (j < questions.length) {
          if (ats_indeksas == questions[j-1].correctAnswer){
            setTimeout(()=>{
              ivertinimo_el.innerText = "";
              teisingo_ats_pateikimo_el.innerText = "";
              pateikti_klausima();}, 500);
            } else {
              setTimeout(()=>{
              ivertinimo_el.innerText = "";
              teisingo_ats_pateikimo_el.innerText = "";
              pateikti_klausima();}, 3000);
              };
    } else ivertinti_rezultatus();
    
  } else {
      ivertinimo_el.className = "nepasirinktas_ats";
      ivertinimo_el.innerText = "Pasirinkite teisingą atsakymą";
  }
}

// Rezultatų atvaizdavimas:
function ivertinti_rezultatus(){
  let teisingas_linksnis = "klausimus";
  if (teisingu_ats_skaicius == 1) teisingas_linksnis = "klausimą";
  else if (teisingu_ats_skaicius > 9 || teisingu_ats_skaicius === 0) teisingas_linksnis = "klausimų";

  // Atvaizduoti bendrą rezultatą (alert arba div elemente).
   klausimo_deze.remove();
  pavadinimo_dezes_el.insertAdjacentElement("beforeend", galutinio_ivertinimo_el);
  let galutinis_ivertinimas = `Teisingai atsakėte į ${teisingu_ats_skaicius} ${teisingas_linksnis} iš ${questions.length}`;
  if (teisingu_ats_skaicius > 3) galutinio_ivertinimo_el.className = "patenkinamai";
  else galutinio_ivertinimo_el.className = "nepatenkinamai";
  console.log(galutinis_ivertinimas);
  galutinio_ivertinimo_el.innerText = galutinis_ivertinimas;
  galutinio_ivertinimo_el.classList.add("ivertinimas");
  starto_mygtukas.innerText = "Pradėti iš naujo";
  starto_mygtukas.classList.remove("hidden");
  starto_mygtukas.addEventListener("click", pradeti);
};


// Papildomos idėjos:
// Laikmatis kiekvienam klausimui (pvz., 10 sekundžių).
// Klausimų atsitiktinė tvarka.
// Taškų sistema (pvz., +1 už teisingą atsakymą).
