// UZDUOTIS***************************

// 3.	Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// a.	priima vieną kintamąjį
// b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.	priešingu atveju, funkcija tęsia darbą
// d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// e.	gražina skaitmenų kiekį

// SPRENDIMAS APACIOJE****************

function skaitmenuKiekisSkaiciuje(num) {
  if (typeof num !== 'number' || '' + num === 'NaN' || typeof num === 'string' || typeof num === "undefined") {
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
console.log( skaitmenuKiekisSkaiciuje( 5.456879 ) );
console.log( skaitmenuKiekisSkaiciuje( -5.456879 ) );
// console.log( skaitmenuKiekisSkaiciuje( Laimis ) ); KLAIDA
// console.log( skaitmenuKiekisSkaiciuje( 5EGH ) ); KLAIDA
// console.log( skaitmenuKiekisSkaiciuje( 5,456879 ) ); KLAIDA
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) ); KLAIDA


