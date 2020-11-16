// 1.	Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// a.	0 - 0           = 0
// b.	0 - 4           = 10
// c.	0 - 100         = 5050 
// d.	574 - 815       = labai didelis skaicius
// e.	-50 - 50        = 0 
// f.	-70 - 30        = santykinai mazas neigiamas skaicius

// jeigu: 
// nuo > iki
// nuo < iki

const nuo = 3;
const iki = 1;

let suma = 0;
if ( nuo < iki ) {
    for (let i = nuo; i <= iki; i++) {
    suma = suma + i;
    }
} else {
    for (let i = iki; i <= nuo; i++) {
        suma = suma + i;
    }
}

console.log(`Skaiciu intervale nuo ${nuo} ir ${iki} suma yra ${suma}`);




