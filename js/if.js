/**************************
 * KINTAMUJU PALYGINIMAS
 * ************************/


 /*
Palyginimo salyga (if)
galimi operatoriai: >, <, >=, <=, ==, !=, ===, !==
NAUDOTINI: >, <, >=, <=, ===, !==
nenaudotini: ==, !=
"=" reiksmes priskyrimo oreratorius
"==" palyginimas, ar yra lygu
"!=" nelygu
 */


 /*
 Galimos strukturos:
 if ()
 if () else {}
 if () else if () {} ... else if ()
 if () else if () {} ... else if () else {}
 */

 const accountBalance = 200;
 const transfer = 200;

 if (accountBalance < transfer) {
    console.log('Banko zinute: saskaitoje truksta pinigu.');
 }

 if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
 }

 if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
 } else {
    console.log('Banko zinute: saskaitoje truksta pinigu.');
 }

 const akys = 'rudos';

 if (akys === 'melynos') {
     console.log('Grazios sirdies zmogus');
 } else if (akys === 'zalios') {
     console.log('Melagiai');
 } else if (akys === 'raudonos') {
     console.log('programuotojas');
 } else {
     console.log('Ar tu turi akis???');
 }

 console.log('Pirmas bandymas baigtas. Kas toliau?');

 const akys2 = 'zalios';

 if (akys2 === 'melynos') {
    console.log('Grazios sirdies zmogus');
 } else {
    if (akys2 === 'zalios') {
        console.log('Melagiai');
    } else {
        if (akys2 === 'rudos') {
            console.log('programuotojas');
        } else {
            console.log('Ar tu turi akis???');
        }
    }
 }


 const pirmas = 8;
 const antras = '8';

 if (pirmas === antras) {
    console.log(true)
 } else {
     console.log(false)
 }

 
 /*ziureti Ascii table*/
 const zodis1 = 'a';
 const zodis2 = 'b'; 

 if (pirmas === antras) {
    console.log(true)
 } else {
     console.log(false)
 }

 const a = 2;
 const b = 2;
 const c = 2;

 if (a === b) {
     console.log('true');
 } else {
     console.log('false');
 }

