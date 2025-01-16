/* 
 	2. Salyga:
	Generuojami trys atsitiktiniai skaičiai nuo 1 iki 10 (Konsolėje parašomi šie skaičiai iš eilės, kad  eitų atskirti kuris yra pirmasis, antrasis bei trečiasis):
console.log’inkite patį didžiausią iš šių trijų skaičių;
console.log’inkite patį mažiausią iš šių trijų skaičių;
Jei pirmų dviejų sk. suma yra didesnė nei paskutinių dviejų sk. suma, dalinkite visų trijų sumą iš 3 ir apvalinkite į didžiąją pusę. Rezultatą console.logi’inkite;
Jei pirmų dviejų sk. suma yra mažesnė nei paskutinių dviejų sk. suma, dalinkite visų trijų sumą iš 5 ir apvalinkite į mažąją pusę. Rezultatą console.logi’inkite;
Jei pirmas skaičius didesnis už antrąjį tačiau mažesnis už trečiąjį - konsolėje parašykite - “Pirmas - vidurinis”;
Jei antras skaičius didesnis už abu - konsolėje parašykite “Antras didžiausias”;
Jei trečias skaičius mažesnis už abu - konsolėje parašykite “Trečias mažiausias”
Jei pirmasis skaičius yra 3, 5 arba 7 - konsolėje parašykite to skaičiaus pakėlimo 4-tuoju laipsniu rezultatą.
Jei pirmasis skaičius yra 4 arba 9 - konsolėje parašykite to skaičiaus šaknies rezultatą   
*/
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pirmas_sk = rand(1, 10);
let antras_sk = rand(1, 10);
let trecias_sk = rand(1, 10);

console.log(`Pirmasis skaičius - ${pirmas_sk}`);
console.log(`Antrasis skaičius - ${antras_sk}`);
console.log(`Trečiasis skaičius - ${trecias_sk}`);

// console.log’inkite patį didžiausią iš šių trijų skaičių
if ((pirmas_sk > antras_sk && pirmas_sk > trecias_sk) || (pirmas_sk > antras_sk && antras_sk == trecias_sk)){
	console.log(`Didžiausias skaičius - ${pirmas_sk}`);
} else if ((antras_sk > pirmas_sk && antras_sk > trecias_sk) || (antras_sk > pirmas_sk && pirmas_sk == trecias_sk)){
	console.log(`Didžiausias skaičius - ${antras_sk}`);
} else if ((trecias_sk > antras_sk && trecias_sk > pirmas_sk) || (trecias_sk > antras_sk && antras_sk == pirmas_sk)){
	console.log(`Didžiausias skaičius - ${trecias_sk}`);
} else console.log('Yra keli didžiausi skaičiai');

// console.log’inkite patį mažiausią iš šių trijų skaičių
if ((pirmas_sk < antras_sk && pirmas_sk < trecias_sk) || (pirmas_sk < antras_sk && antras_sk == trecias_sk)){
	console.log(`Mažiausias skaičius - ${pirmas_sk}`);
} else if ((antras_sk < pirmas_sk && antras_sk < trecias_sk) || (antras_sk < pirmas_sk && pirmas_sk == trecias_sk)){
	console.log(`Mažiausias skaičius - ${antras_sk}`);
} else if ((trecias_sk < pirmas_sk && trecias_sk < antras_sk) || (trecias_sk < pirmas_sk && pirmas_sk == antras_sk)){
	console.log(`Mažiausias skaičius - ${trecias_sk}`);
} else console.log('Yra keli mažiausi skaičiai');

/* Jei pirmų dviejų sk. suma yra didesnė nei paskutinių dviejų sk. suma, dalinkite visų trijų sumą iš 3 ir apvalinkite į didžiąją pusę. 
Rezultatą console.logi’inkite */
if (pirmas_sk > trecias_sk){
	let rezult = Math.ceil((pirmas_sk + antras_sk + trecias_sk) / 3);
	console.log(rezult);
/* Jei pirmų dviejų sk. suma yra mažesnė nei paskutinių dviejų sk. suma, dalinkite visų trijų sumą iš 5 ir apvalinkite į mažąją pusę. 
Rezultatą console.logi’inkite */
} else if (pirmas_sk < trecias_sk){
	let rezult = Math.floor((pirmas_sk + antras_sk + trecias_sk) / 5);
	console.log(rezult);
} else console.log('Pirmų dviejų skaičių suma yra lygi paskutinių dviejų skaičių sumai');

/* Jei pirmas skaičius didesnis už antrąjį tačiau mažesnis už trečiąjį - konsolėje parašykite - “Pirmas - vidurinis” */
if (pirmas_sk > antras_sk && pirmas_sk < trecias_sk){
	console.log('Pirmas - vidurinis');
}

/* Jei antras skaičius didesnis už abu - konsolėje parašykite “Antras didžiausias” */
if (antras_sk > pirmas_sk && antras_sk > trecias_sk){
	console.log('Antras didžiausias');
}

/* Jei trečias skaičius mažesnis už abu - konsolėje parašykite “Trečias mažiausias” */
if (trecias_sk < pirmas_sk && trecias_sk < antras_sk){
	console.log('Trečias mažiausias');
}

/* Jei pirmasis skaičius yra 3, 5 arba 7 - konsolėje parašykite to skaičiaus pakėlimo 4-tuoju laipsniu rezultatą */
if (pirmas_sk == 3 || pirmas_sk == 5 || pirmas_sk == 7){
	let rezultatas = pirmas_sk**=4;
	console.log(rezultatas);
}

/* Jei pirmasis skaičius yra 4 arba 9 - konsolėje parašykite to skaičiaus šaknies rezultatą */
if (pirmas_sk == 4 || pirmas_sk == 9){
	let rezultatas = Math.sqrt(pirmas_sk);
	console.log(rezultatas);
}