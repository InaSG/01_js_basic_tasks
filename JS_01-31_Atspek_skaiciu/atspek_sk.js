function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const levels = [
    {
        level: 1,
        number_to: 10,
        attempts: 8,
    },
    {
        level: 2,
        number_to: 20,
        attempts: 8,
    },
    {
        level: 3,
        number_to: 30,
        attempts: 8,
    },
    {
        level: 4,
        number_to: 40,
        attempts: 8,
    },
    {
        level: 5,
        number_to: 50,
        attempts: 8,
    },
    {
        level: 6,
        number_to: 60,
        attempts: 8,
    },
    {
        level: 7,
        number_to: 70,
        attempts: 9,
    },
    {
        level: 8,
        number_to: 80,
        attempts: 9,
    },
    {
        level: 9,
        number_to: 90,
        attempts: 9,
    },
    {
        level: 10,
        number_to: 100,
        attempts: 9,
    },
    {
        level: 11,
        number_to: 200,
        attempts: 9,
    },
    {
        level: 12,
        number_to: 300,
        attempts: 9,
    },
    {
        level: 13,
        number_to: 400,
        attempts: 9,
    },
    {
        level: 14,
        number_to: 500,
        attempts: 9,
    },
    {
        level: 15,
        number_to: 600,
        attempts: 9,
    },
    {
        level: 16,
        number_to: 700,
        attempts: 9,
    },
    {
        level: 17,
        number_to: 800,
        attempts: 9,
    },
    {
        level: 18,
        number_to: 900,
        attempts: 9,
    },
    {
        level: 19,
        number_to: 1000,
        attempts: 9,
    },
    {
        level: 20,
        number_to: 2000,
        attempts: 9,
    },
]

const btn_pradeti_el = document.getElementById("btn_pradeti");
const description_block_el = document.getElementById("description");
const level_text_el = document.getElementById("level_text");
const game_zone_el = document.getElementById("game_zone");



let l = 0;
let a = 1;

let atsakymas = rand(1, levels[l].number_to);
console.log(atsakymas);


btn_pradeti_el.innerText = "Pradėti žaidimą";
btn_pradeti_el.addEventListener("click", start_game);

function start_game() {
    btn_pradeti_el.innerText = "Iš naujo";
    // TODO: užšaldyti mygtuką iki pirmo lygio pabaigos
    
    description_block_el.innerHTML = "";

    level_text_el.innerHTML = `<div class="level_text" ><span class="bold">
    ${levels[l].level} lygis</span>: atspėk skaičių nuo 1 iki ${levels[l].number_to}</div>`;
        
    const guessing_zone_el = document.createElement("div");
    guessing_zone_el.innerHTML = `<div class="attempt_number" id="attempt_number">
                                    Spėjimas ${a}:
                                </div>
                                <input class="flex attempt" id="attempts" type="text">
                                <button class="btn_speti" id="btn_speti">Spėti</button>`;
    game_zone_el.appendChild(guessing_zone_el);
    guessing_zone_el.className = "flex";
    const btn_speti_el = document.getElementById("btn_speti");
    btn_speti_el.addEventListener("click", () => {guessing(l)});


    const attempts_container_el = document.createElement("div");
    
    let attempts_container_el_html = "";
    for (let i = 1; i<= levels[l].attempts; i++){
        attempts_container_el_html +=  `<div class="attempt${i}_card flex_column">
                                            <div class="each_attempt" id="attempt${i}"></div>
                                            <div class="attempt_desc">Spėjimas ${i}</div>
                                        </div>`;
    }
    
    attempts_container_el.innerHTML = attempts_container_el_html;
    game_zone_el.appendChild(attempts_container_el);
    attempts_container_el.className = "attempts_container";
};


function guessing(level){
    const attempts_input_el = document.getElementById("attempts");

    for (let i = 1; i <= levels[level].attempts; i++){
        let attempt_el = document.getElementById(`attempt${i}`);
        console.log(attempt_el);
        let spejimas = attempts_input_el.value; 
        if (!Number(spejimas) || Number(spejimas) > levels[level].number_to || Number(spejimas) < 1){
            attempts_input_el.value = "";
            return alert(`Įveskite skaičių nuo 1 iki ${levels[level].number_to}`);
        } else {
            if(Number(spejimas) === atsakymas){
                attempts_input_el.value = "";
                return alert("ATSPĖJAI !!!");
            } else {
                alert("NEATSPĖJAI. Bandyk dar kartą!")
                attempt_el.innerText = Number(spejimas);
                attempts_input_el.value = "";
                // attempts_input_el.innerText = "";
            }
        }
        break;
    }
};