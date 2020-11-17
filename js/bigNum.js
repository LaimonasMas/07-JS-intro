// 4.	Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// a.	priima vieną kintamąjį
// b.	jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.	jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// d.	priešingu atveju, funkcija tęsia darbą
// e.	pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// f.	gražina didžiausią surastą skaičių

function bigNum(list) {
// input validation
if (typeof list !== 'object') {
    return 'Netinkamas tipas';
}
const size = list.length
if (list.length === 0) {
    return 'sarasas yra tuscias';
}
// logic
let biggestNumber = -Infinity;
for (let i=0; i < size; i++) {
const num = list[i];

// saraso elemento validacija
if (typeof num !== 'number') {
    continue;
}

// logika
if (num > biggestNumber) {
    biggestNumber = num;
}
}

// post logic validation
if(biggestNumber === -Infinity) {
    return 'sarase nerastas nei vienas normalus skaicius.';
}


// return
return biggestNumber;
}

// g.	TESTAI:

console.log( bigNum([1]));
console.log( bigNum( [ 1, 2, 3 ] ) );
console.log( bigNum( [] ) );
console.log( bigNum( 'pomidoras' ) );
console.log( bigNum( 585 ) );
console.log( bigNum( true) );
console.log( bigNum( false ) );
console.log( bigNum( [ -5, 78, 14, 0, 18 ] ) );
console.log( bigNum( [ 69, 69, 69, 69, 66 ] ) );
console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );

console.log( bigNum( [ 1, 2, 3, 'labas' ] ), '->', 3);
console.log( bigNum( [ 1, 2, 3, 'labas', 5, 9, 12 ] ), '->', 12);
console.log( bigNum( [ 'labas', 1, 2, 3, 5 ] ), '->', 5);
console.log( bigNum( [ NaN, 78, 14, 0, 18 ] ) );
console.log( bigNum( [ NaN, true, false, []]));
