/*************
 * CIKLAI
 * ********* */

 const kiek = 5;

 for (let i=3; i <= kiek; i++) {
    // logika
    console.log('labas rytas!', i);
}

console.log('pabaiga');


let number = 7;
console.log(number);
 
number++;
console.log(number);

number++;
console.log(number);
number++;
console.log(number);

// number = number - 1   ===  number--
// number = number + 1   ===  number++

number = number - 1;
console.log(number);

number--;
console.log(number);

for (let i=0; i < 5; i++) {
    // logika
    console.log('labas rytas!', i);
}

/*****
 * Jei kas menesi zmogus uzdirba 5000, tai kiek jis tures pajamu per metus?
 * *************/
 

const alga = 5000;
const menesiu = 12;
let pajamos = 0;

for (let i = 1; i <= menesiu; i++) {
    console.log(`${i}) ${i*alga} pinigu.`);
}

for (let i = 1; i <= menesiu; i = i +2 ) {
    console.log(`${i}) ${i*alga} pinigu.`);
}

for (let i = 1; i <= menesiu; i = i + 1 ) {
    pajamos = i * alga;
    // arba pajamos = pajamos + alga;
    console.log(`${i}) ${pajamos} pinigu.`);
}


/*

Parasyti skaicius nuo 8 iki 4
*/

for (let i = 8; i >= 4; i--) {
    console.log(i);
}

console.log('--------------------');

/*
isvardinti ciferblato skaicius nuo duotos valandos iki galo
*/

const valanda = 3;
const maxValandu = 12;

for (let val = valanda; val <= maxValandu; val++) {
    console.log(val + ' val');
}

console.log('------------');

/*
Duotas miestu sarasas. Isvardinti kiekviena aplankyta miesta.
Spausdiname:
"Aplankiau: Miesto pavadinimas."
*/

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys'];

for (let i=0; i < miestai.length; i++) {
    console.log(`Aplankiau: ${miestai[i]}.`);
}

// for (let i=0; i < miestai.length; i++) {
//     const miestoPavadinimas = miestai[i];
//     console.log(`Aplankiau: ${miestoPavadinimas}.`);
// }

console.log('-----------------');

/*
Isvardinti saraso narius is galo
*/

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(abc);

for (let pozicija = abc.length - 1; pozicija >= 0; pozicija--) {
    console.log(abc[pozicija]);
}

console.log('---------------------');

const text = 'braskyte';

for (let i=0; i<text.length; i++) {
    console.log(text[i]);
}

console.log(text.length);

console.log('---------------------');

/*
Duodamas zodis ir is jo reikia isrinkti kas antra raide ir isspausdinti kas gaunasi.
pvz.: abcdef -> bdf
pomidoras -> oioa
*/

const zodis1 = 'abcdef';
let rez = '';

for (let i=1; i < zodis1.length; i = i + 2) {
    const raide = zodis1[i];
    rez = rez + raide; 
    console.log(raide);
    
}
console.log(rez);

// for (let i=1; i < zodis1.length; i = i + 2) {
    
//     rez = rez + zodis1[i];
//     console.log(zodis1[i]);
// }
// console.log(rez);


/*
Duodamas zodis ir is jo reikia isrinkti kas antra raide ir isspausdinti kas gaunasi.
pvz.: abcdef -> bdf
pvz.: pomidoras (2) -> oioa
pvz.: pomidoras (3) -> mos
pvz.: pomidoras (4) -> ia
pvz.: pomidoras (5) -> d
*/

// const zodis = 'pomidoras';
// const step = 2;
// const pirmosRaidesPozicija = step - 1;
// let ats = '';

// for (let i = pirmosRaidesPozicija; i < zodis.length; i = i + step) {
//     const raide = zodis[i];
//     ats = ats + raide;
// }

// console.log(ats);