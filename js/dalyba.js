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
  const ats = a / b;  
   
  return ats;
    
}
console.log( dalyba(6, 3) );