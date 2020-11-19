// 6.	Funkcija pavadinimu “dalyba”:
// a.	turi priimti du kintamuosius
// b.	reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// i.	esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// ii.	esant geroms - tęsti darbą
// c.	į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// i.	daliname pirmąjį skaičių iš antrojo
// d.	gražinti suskaičiuotą reikšmę
// e.	TESTAI:
// i.	sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą

function dalyba(a, b) {
  if (typeof a !== 'number') {
    return 'ERROR: pirmoji reiksme ne skaiciaus tipo';    
  }
  if (typeof b !== 'number') {
    return 'ERROR: antroji reiksme ne skaiciaus tipo';
  }  
  if (b === 0) {
    return 'ERROR: dalyba is nulio negalima';  
  } 
  if (isNaN(a)) {
    return 'ERROR: pirmoji reiksme ne skaiciaus tipo';
  }
  if (isNaN(b)) {
    return 'ERROR: antroji reiksme ne skaiciaus tipo';
  }
  const ats = a / b;   
  return ats;  
}

// TESTAI:
console.log( dalyba('abc', 3) );
console.log( dalyba(3, 'abc') );
console.log( dalyba('cde' ,'abc') );
console.log( dalyba(['abc'], 3) );
console.log( dalyba(3, ['abc']) );
console.log( dalyba(['cde'] ,['abc']) );
console.log( dalyba(NaN, 3) );
console.log( dalyba(3, NaN) );
console.log( dalyba(6, 0) );

console.log( dalyba(6, 3) );