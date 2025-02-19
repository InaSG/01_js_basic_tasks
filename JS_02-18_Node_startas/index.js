import { hello } from "./hello-world.js";
import { sum } from "./sum.js";
import { today } from "./today.js";

/* Pavardės iškonsolinimas */
// const arg = process.argv;
// if (arg.length > 2) hello(arg.slice(2));
// else console.log("Nepateiktas parametras");


/* Sumos funkcijos iškvietimas */
// const arg = process.argv;
// if (arg.length >= 4) console.log(sum(arg.slice(2)));
// else console.log("Pateikite bent du skaičius, kuriuos norite sudėti");

 /*  today funkcijos iškvietimas */
const arg = process.argv;

const galimiPasirinkimai = ["savaites_diena", "menuo", "menesio_diena"];
let rezimas = arg[2];
if (galimiPasirinkimai.includes(rezimas)) console.log(today(rezimas));
else console.log(`Įrašykite vieną pasirinktą režimą. Galimi pasirinkimai: ${galimiPasirinkimai.join(", ")}.`);

