// 3.	Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// a.	0 - 11
// b.	8 - 31
// c.	-18 - 18
// d.	rezultatą pateikti tokiu formatu:
// i.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// ii.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// iii.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.


const nuo = 0;
const iki = 11; 
const daliklis = 3;

let kiekis = 0;

// % - matematinis operatorius, dalybos liekana
for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        kiekis++;
    }
}

console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`);


// rez -> 0, 11, 3
// rez -> 0, 11, 5
// rez -> 0, 11, 7
// rez -> 6, 14, 5
// rez -> 6, 14, 7
