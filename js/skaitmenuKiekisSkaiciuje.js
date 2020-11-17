// UZDUOTIS***************************

// 3.	Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// a.	priima vieną kintamąjį
// b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.	priešingu atveju, funkcija tęsia darbą
// d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// e.	gražina skaitmenų kiekį

// SPRENDIMAS APACIOJE****************

function skaitmenuKiekisSkaiciuje(num) {
  if (typeof num !== 'number' || '' + num === 'NaN' || typeof num === 'string' || typeof num === "undefined" || typeof num === 'Infinity') {
  return `rezultatas: "Pateikta netinkamo tipo reiksme"`;
  } 
  const numString = num.toString();
  let numStringIlgis = numString.length;
  const ats = `rezultatas: ${numStringIlgis}`;
  return ats;
  }


// TESTAI: 

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( 5.4 ) );
console.log( skaitmenuKiekisSkaiciuje( -5.456879 ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) ); /*KLAIDA, SUSKAICIUOJA "8".*/
console.log( skaitmenuKiekisSkaiciuje( 4E+7 ) ); /*KLAIDA, SUSKAICIUOJA "8".*/
// console.log( skaitmenuKiekisSkaiciuje( Laimis ) ); KLAIDA
// console.log( skaitmenuKiekisSkaiciuje( 5EGH ) ); KLAIDA
// console.log( skaitmenuKiekisSkaiciuje( 5,456879 ) ); KLAIDA
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) ); KLAIDA

console.log('-----------------');

// destytojo variantas

// KAZKUR KLAIDA, nemazina skaiciaus ir 

function numLength(num) {
  // input validation
  if (typeof num !== 'number') {
    return `rezultatas: "Pateikta netinkamo tipo reiksme"`;
  }
  if ('' + num === 'NaN') {
  return `rezultatas: "Pateikta netinkamo tipo reiksme"`;
  } 
  //logic
const textNum = '' + num;
let size = textNum.length;

if (num < 0) {
  console.log('Radau minusa');
  size--;
}

if (num % 1 !== 0) {
  size--;
}
if ('' + num === 'Infinity') {
  return `rezultatas: "begalybe"`;
}

  return size;
}




// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );

console.log( skaitmenuKiekisSkaiciuje( -5 ) );
console.log( skaitmenuKiekisSkaiciuje( 2.2 ) );
console.log( skaitmenuKiekisSkaiciuje( 3.14528 ) );
console.log( skaitmenuKiekisSkaiciuje( -3.14528 ) );
console.log( skaitmenuKiekisSkaiciuje( 3, 14528 ) );

console.log('------------');
console.log(numLength(Infinity));
// NEISPRENDZIAMI console.log(numLength(56465456465488888888888888888888888888888888888888658629842892548646848645));
// NEISPRENDZIAMI console.log(numLength(0.0000000000000000000000000000000000000000002));
