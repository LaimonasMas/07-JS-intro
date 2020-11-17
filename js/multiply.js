/* SKAICIAI:
- sveikieji
- desimtainiai
- teigiami/neigiami
- NaN
- Infinity
*/




function daugyba(a, b) {
// input validation

    
    if (typeof a !== 'number') {
        console.error('ERROR: pirmoji reiksme ne skaiciaus tipo');
        return false;
    }
    // if ('' + b === 'NaN') {
    if (isNaN(a)) {
        console.error('ERROR: pirmoji reiksme ne normalus skaicius');
        return false;
    }
    
    if (typeof b !== 'number') {
        console.error('ERROR: antroji reiksme ne skaiciaus tipo');
        return false;
        
    }
    if (typeof b === 'Infinity') {
        console.error('ERROR: antroji reiksme ne skaiciaus tipo');
        return false;
    }
    // if ('' + b === 'NaN') {
        if (isNaN(b)) {
        console.error('ERROR: pirmoji reiksme ne normalus skaicius');
        return false;
    }

    
// function logic
    const ats = a * b;

//function result
    return ats;
    
}



console.log(daugyba('labas', 2));
console.log(daugyba('labas', 'labas'));
console.log(daugyba('labas', true));
console.log(daugyba(-2));
console.log(daugyba());

console.log(daugyba(2, 9));
console.log(daugyba(4, 2));
console.log(daugyba(2, 2));
console.log(daugyba(2, NaN));
console.log(daugyba(NaN, 2));

console.log(daugyba(2, Infinity));


