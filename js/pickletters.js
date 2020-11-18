// 5.	Funkcija pavadinimu “isrinktiRaides”:
// a.	priima du kintamuosius:
// i.	pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// ii.	antrasis nurodo kas kelintą raidę išrinkti
// b.	patikrinti, ar pirmasis kintamasis yra teksto tipo:
// i.	jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// ii.	priešingu atveju tęsiame darbą
// c.	patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// i.	jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// ii.	priešingu atveju tęsiame darbą
// d.	patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// i.	jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// ii.	priešingu atveju tęsiame darbą
// e.	patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// i.	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// ii.	priešingu atveju tęsiame darbą
// f.	patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// i.	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// ii.	priešingu atveju tęsiame darbą
// g.	išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// h.	išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// i.	gražina rezultatą

function pickLetters(text, step) {
    //input validation
    if (typeof text !== 'string') {
        return 'ERROR: pirmoji reiksme ne teksto tipo.'
    }
    if (text === '') {
        return 'ERROR: tekstas negali buti tuscias.'
    }
    if (typeof step !== 'number') {
        return 'ERROR: antroji reiksme ne skaiciaus tipo.'
    }
    if (step % 1 !== 0) {
        return 'ERROR: zingsnis turi buti sveikasis skaicius.'
    }
    // if (step !== Math.round(step)) {
    //     return 'ERROR: zingsnis turi buti sveikasis skaicius.'
    // }

    const size = text.length;

    if (step > size) {
        return 'ERROR: zingsnis yra per didelis lyginant su teksto ilgiu.'
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buto nulinis.'
    }

    //logika

    let rez = '';
    // kitas variantas:

    // for (let i=0; i<size;  i++) {
    //     if (i % step === step - 1) {
    //         rez += text[i];
    //     }
    // }

    // pagrindinis variantas:
    if (step > 0) {
    const firstLetterPosition = step - 1;
    for (let i = firstLetterPosition; i < size;  i += step) {
                    rez += text[i];
            
        }
    } else {const firstLetterPosition = size + step;
        for (let i = firstLetterPosition; i >= 0; i += step) {
                    rez += text[i];
                }

    }


    //post logic validation


    //return
    return rez;
}



// j.	TESTAI:

console.log( pickLetters( 1561, 2 ) );
console.log( pickLetters( '1561', '2' ) );
console.log( pickLetters( 'abc', 4 ) );
console.log( pickLetters( 'abc', 0 ) );
console.log( pickLetters( 'abc', 1.5 ) );
console.log( pickLetters( 'abcdefghijk', 1.5 ) );

console.log( pickLetters( 'abc', 3 ) );
console.log( pickLetters( 'abcdefg', 2 ), '->', 'bdf' );
console.log( pickLetters( 'abcdefghijkl', 3 ), '->', 'cfil' );
console.log( pickLetters( 'abc', -3 ) ); 
console.log( pickLetters( 'abcdefg', -2 ), '->', 'bdf' ); 
console.log( pickLetters( 'abcdefghijkl', -3 ), '->', 'cfil' ); 

console.log( pickLetters( '', 3 ) );







// // a = a + b;
// a += b;
// // a = a - b;
// a -= b;
// // a = a * b;
// a *= b;
// // a = a / b;
// a /= b
// // a = a % b;
// a %= b

// // i = i + 1;
// // i++;
// // ++i;

// // i = i - 1;
// // i--;
// // --i;