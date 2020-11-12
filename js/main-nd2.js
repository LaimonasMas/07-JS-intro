/***********************
 * KINTAMUJU PALYGINIMAS
 ***********************/

// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

// 1.	Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// a.	kuris didesnis

const a = 12;
const b = 5;

if (a > b) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// b.	kuris mažesnis

if (a < b) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// c.	ar jie lygūs

if (a === b) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// d.	ar jie nelygūs

if (a !== b) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// e.	kuris didesnis arba lygus

if (a >= b) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// f.	kuris mažesnis arba lygus

if (a <= b) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// 2.	Išvesti teksto tipo kintamųjų ilgius

const dvylika = 'dvylika';
console.log(dvylika.length);

const penki = 'penki';
console.log(penki.length);

// 3.	Tarpusavyje palyginti teksto tipo kintamųjų ilgius:

const dvylikaIlgis = dvylika.length
const penkiIlgis = penki.length

// a.	kuris didesnis

if (dvylikaIlgis > penkiIlgis) {
    console.log("Pomidoras");
} else {console.log("Bandykite dar kartą.");
}

// b.	kuris mažesnis

if (dvylikaIlgis < penkiIlgis) {
    console.log("Pomidoras");
} else {console.log("Bandykite dar kartą.");
}

// c.	ar jie lygūs

if (dvylikaIlgis === penkiIlgis) {
    console.log("Pomidoras");
} else {console.log("Bandykite dar kartą.");
}

// d.	ar jie nelygūs

if (dvylikaIlgis !== penkiIlgis) {
    console.log("Pomidoras");
} else {console.log("Bandykite dar kartą.");
}

// e.	kuris didesnis arba lygus

if (dvylikaIlgis >= penkiIlgis) {
    console.log("Pomidoras");
} else {console.log("Bandykite dar kartą.");
}

// f.	kuris mažesnis arba lygus

if (dvylikaIlgis <= penkiIlgis) {
    console.log("Pomidoras");
} else {console.log("Bandykite dar kartą.");
}

// 4.	Išvesti sąrašo tipo kintamųjų ilgius

const sarasas12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(sarasas12.length)

const sarasas5 = [1, 2, 3, 4, 5];
console.log(sarasas5.length);

// 5.	Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:

const sarasas12Ilgis = sarasas12.length
const sarasas5ilgis = sarasas5.length

// a.	kuris didesnis

if (sarasas12Ilgis > sarasas5ilgis) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// b.	kuris mažesnis

if (sarasas12Ilgis < sarasas5ilgis) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// c.	ar jie lygūs

if (sarasas12Ilgis === sarasas5ilgis) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// d.	ar jie nelygūs

if (sarasas12Ilgis !== sarasas5ilgis) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// e.	kuris didesnis arba lygus

if (sarasas12Ilgis >= sarasas5ilgis) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

// f.	kuris mažesnis arba lygus

if (sarasas12Ilgis <= sarasas5ilgis) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite dar kartą.");
}

/**************************
 * CIKLO FOR PANAUDOJIMAS
 **************************/

// 1.	Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// a.	0 - 0

 const c = 0;
 const d = 0;
 let suma = 0;

for (let i=c; i<=d; i++){
    suma = suma + i;
}
console.log(suma);

//  b.	0 - 4

const e = 0;
const f = 4;
let suma1 = 0;

for (let i=e; i<=f; i++) {
    suma1 = suma1 + i;
}
console.log(suma1);

// c.	0 - 100

const g = 0;
const h = 100;
let suma2 = 0;

for (let i=g; i<=h; i++) {
    suma2 = suma2 + i;
}
console.log(suma2);

// d.	574 - 815

const j = 574;
const k = 815;
let suma3 = 0;

for (let i=j; i<=k; i++) {
    suma3 = suma3 + i;
}
console.log(suma3);

// f.	-70 - 30

const l = -70;
const m = 30;
let suma4 = 0;

for (let i=l; i<=m; i++) {
    suma4 = suma4 + i;
}
console.log(suma4);

// 2.	panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// a.	pvz.: “abcdef” -> “fedcba”

const zodis = 'abcdef';
const paskRaide = zodis.length-1;
let atsakymas = '';

for (let i=paskRaide; i>=0; i--) {
        atsakymas += zodis[i];
}
console.log(atsakymas);

// 3.	Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// a.	0 - 11


