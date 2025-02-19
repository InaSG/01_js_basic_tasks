/* 1. Stačiakampio klasė (Rectangle)
Užduotis:
Sukurkite klasę Stačiakampis (angl. Rectangle), kuri saugos stačiakampio savybes: plotis, aukštis, plotas ir perimetras.
Pradinės klasės savybės:
plotis - (width): gali būti nurodomas pradinis stačiakampio plotis;
aukštis - (height): gali būti nurodomas pradinis stačiakampio aukštis;
plotas - (area): skaičiuojamas pagal formulę: S = plotis * aukštis;
perimetras - (perimeter): skaičiuojamas pagal formulę: P=(plotis+aukštis)*2;
Keičiami laukeliai:
Keičiant plotį arba aukštį, turi būti automatiškai atnaujinamas ir plotas, ir perimetras.
Klasės metodai:
Plotis ir aukštis:
Sukurkite „setter“ ir „getter“ metodus plotui ir aukščiui.
Keičiant plotį arba aukštį, turi keistis ir plotas bei perimetras.
Ploto ir perimetro apskaičiavimas:
Sukurkite „getter“ metodus, kurie grąžina plotą ir perimetrą. */

class Staciakampis {
	#plotis;
	#aukstis;
	#plotas;
	#perimetras;

	constructor(plotis = 1, aukstis = 1, matavimoVienetas = "m") {
		if (typeof plotis !== "number") {
			console.error(
				`Kuriant klasę gautas plotis buvo ne skaičius, gauta reikšmė ${plotis}. Vietoje to naudosime skaičių 1`
			);
			plotis = 1;
		}
		if (typeof aukstis !== "number") {
			console.error(
				`Kuriant klasę gautas aukštis buvo ne skaičius, gauta reikšmė ${aukstis}. Vietoje to naudosime skaičių 1`
			);
			aukstis = 1;
		}
		const galimiMatavimoVienetai = ["m", "cm", "mm", "dm", "km"];
		if (!galimiMatavimoVienetai.includes(matavimoVienetas)) {
			console.error(
				`Pateiktas matavimo vienetas neatitiko nei vieno iš galimų variantų: ${galimiMatavimoVienetai.join()}. Todėl naudosime metrus`
			);
			matavimoVienetas = "m";
		}

		this.#plotis = plotis;
		this.#aukstis = aukstis;
		this.matavimoVienetas = matavimoVienetas;

		this.#plotas = aukstis * plotis;
		this.#perimetras = (plotis + aukstis) * 2;
	}
	
	get plotis() {
		return this.#plotis;
	}
	get aukstis() {
		return this.#aukstis;
	}
	get plotas() {
		return `${this.#plotas}${this.matavimoVienetas}2`;
	}
	get perimetras() {
		return `${this.#perimetras}${this.matavimoVienetas}`;
	}

	set plotis(naujasPlotis) {
		if (typeof naujasPlotis !== "number")
			return console.error(
				"Pateiktas naujas plotis buvo ne skaičius, gauta reikšmė: " +
					naujasPlotis
			);
		this.#plotis = naujasPlotis;
		this.#plotas = naujasPlotis * this.#aukstis;
		this.#perimetras = (naujasPlotis + this.#aukstis) * 2;
	};

	set aukstis(naujasAukstis) {
		// if (typeof naujasAukstis !== "number")
		// 	return console.error(
		// 		"Pateiktas naujas aukštis buvo ne skaičius, gauta reikšmė: " +
		// 			naujasAukstis
		// 	);

		this.#aukstis = naujasAukstis;
		this.#plotas = naujasAukstis * this.#plotis;
		this.#perimetras = (this.#plotis + naujasAukstis) * 2;
	}
}

// const st1 = new Staciakampis(10, 56, 456);

// st1.aukstis = 2;
// console.log(st1);


/*2. Apskritimo klasė (Circle)
Užduotis:
Sukurkite klasę Apskritimas (angl. Circle), kuri saugos apskritimo savybes: spindulys ir plotas.
Pradinės klasės savybės:
spindulys - (radius): gali būti nurodomas pradinis apskritimo spindulys;
plotas - (area): skaičiuojamas pagal formulę: S = pi* r2
Keičiami laukeliai:
Keičiant spindulį, automatiškai turi būti atnaujinamas ir plotas.
Klasės metodai:
Spindulys:
Sukurkite „setter“ ir „getter“ metodus spinduliui.
Keičiant spindulį, turi būti perskaičiuotas plotas.
Ploto apskaičiavimas:
Sukurkite „getter“ metodą, kuris grąžina plotą.
*/
class Apskritimas{
    #spindulys;
    #plotas;
    constructor(spindulys=1){
        if (typeof spindulys !== "number" || spindulys < 0){
            console.error(`Reikšmė "${spindulys}" negali būti apskritimo spindulys. Spindulys gali būti tik teigiamas skaičius. Sukurtam objektui priskirta reikšmė = 1`);
            spindulys = 1;
        } 
        this.#spindulys = spindulys;
        this.#plotas = Math.PI * spindulys**2;
    };

    get spindulys(){
        return this.#spindulys;
    };

    get plotas(){
        return this.#plotas;
    };

    set spindulys(nauja_reiksme) {
        this.#spindulys = nauja_reiksme;
        this.#plotas = Math.PI * nauja_reiksme**2;
    };
};

const apskritimas1 = new Apskritimas(6);
console.log(apskritimas1.spindulys);
console.log(apskritimas1.plotas);
apskritimas1.spindulys = 3;
console.log(apskritimas1.spindulys);
console.log(apskritimas1.plotas);
console.log(apskritimas1);


/*3. Banko sąskaitos klasė (BankAccount)
Užduotis:
Sukurkite klasę BankoSąskaita (angl. BankAccount), kuri imituos banko sąskaitos funkcionalumą. Savybės: balansas ir operacijų istorija.
Pradinės klasės savybės:
balansas - (balance): gali būti nurodytas pradinis sąskaitos balansas (pagal nutylėjimą 0);
operacijų istorija - (transactionHistory): saugo įrašus apie visus įvykdytus operacijas su sąskaita.
Operacijos:
indėlis (deposit) – į sąskaitą galima pridėti pinigų;
išėmimas (withdraw) – iš sąskaitos galima išimti pinigų, jei yra pakankamai lėšų;
Klasės metodai:
Indėlis ir išėmimas:
Sukurkite metodus indėliui ir išėmimui su sąlyga, kad lėšų negalima išimti, jei balansas yra mažesnis už norimą sumą.
Operacijų istorijoje kiekviena operacija turi būti įrašyta su informacija apie operacijos tipą ir sumą.
Balansas:
Sukurkite „getter“ metodą balansui, kuris grąžina esamą sąskaitos balansą.
Operacijų istorija:
Sukurkite „getter“ metodą operacijų istorijai, kuris grąžina visų operacijų sąrašą.
*/

class Banko_saskaita {
	#balansas;
	#operaciju_istorija;

	constructor (){
		this.#balansas = 0;
		this.#operaciju_istorija = [];
	};

	get balansas(){
		return this.#balansas;
	};

	get operaciju_istorija(){
		return this.#operaciju_istorija;
	};

	set operaciju_istorija (suma) {
		this.#operaciju_istorija = this.#operaciju_istorija.push(`inešta ${suma} \u20ac`);
	}

	indelis(suma){		
		if(typeof suma !== "number"){
			return console.error(`Įdedama suma turi būti parašyta skaitine reikšme`);
		} else if (suma < 0){
			return console.error(`Įdedama suma turi būti teigiamas skaičius`);
		} else {
			this.#balansas += suma;
			this.#operaciju_istorija.push(`Sąskaita papildyta ${suma} \u20ac`);
		};	
	};

	isemimas(suma){
		if(typeof suma !== "number"){
			return console.error(`Išimama suma turi būti parašyta skaitine reikšme`);
		} else if (suma < 0){
			return console.error(`Išimama suma turi būti teigiamas skaičius`);
		} else if (suma > this.#balansas){
			return console.error(`Išimti ${suma} \u20ac negalite. Sąskaitoje šiuo metu yra ${this.#balansas} \u20ac`);
		} else {
		this.#balansas -= suma;
		this.#operaciju_istorija.push(`Iš sąskaitos išimta ${suma} \u20ac`);
		};
	};
};

// const saskaita_1 = new Banko_saskaita;
// console.log(saskaita_1);
// saskaita_1.indelis(15);
// saskaita_1.indelis(20);
// saskaita_1.isemimas(50);
// saskaita_1.isemimas(5);

// console.log(saskaita_1);
// console.log(saskaita_1.operaciju_istorija);

/*4. Temperatūros klasė (Temperature)
Užduotis:
Sukurkite klasę Temperatūra (angl. Temperature), kuri saugos temperatūros reikšmes Celsijumi ir Fahrenheit.
Pradinės klasės savybės:
Celsijus - (celsius): gali būti nurodoma pradinė temperatūra Celsijaus skalėje.
Keičiamos temperatūros skalės:
Keičiant temperatūrą Celsijumi arba Fahrenheit, automatiškai turi būti perskaičiuota kita skalė pagal formulę.
Klasės metodai:
Temperatūros skalės:
Sukurkite „getter“ ir „setter“ metodus temperatūrai Celsijumi ir Fahrenheit.
Keičiant Celsijų arba Fahrenheit, turi būti perskaičiuojama kita skalė:
Celsijus į Fahrenheit: F = C  95+32
Fahrenheit į Celsijų: C = (F - 32)59;
Temperatūros perskaičiavimas:
Užtikrinkite, kad keičiant bet kurią temperatūros skalę, kita būtų automatiškai perskaičiuojama ir atnaujinama klasėje.
*/
class Temperatura {
	#temperatura;
	#skale;
	constructor(temperatura = 100, skale = "c"){
		this.#temperatura = temperatura;
		this.#skale = skale;
	}

	get temperatura (){
		return this.#temperatura;
	};

	get skale () {
		return this.#skale;
	};

	set skale(nauja_skale){
		if (this.#skale == nauja_skale.toLowerCase()){
			this.#skale	= this.#skale;
			this.#temperatura = this.#temperatura;
		} else if (nauja_skale.toLowerCase() == "c") {
			this.#skale	= nauja_skale.toLowerCase();
			this.#temperatura = (this.#temperatura - 32) / 1.8;		
		} else if (nauja_skale.toLowerCase() == "f") {	
			this.#skale	= nauja_skale.toLowerCase();
			this.#temperatura = (this.#temperatura * 1.8) +32;
		} else return console.log('Galimas keitimas tik į Celsijaus ("s") arba Farenheito ("f") skalę');
	};
};

const temperatura1 = new Temperatura(10, "c");
console.log(temperatura1);
temperatura1.skale = "d";
console.log(temperatura1);