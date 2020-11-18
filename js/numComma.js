// function numComma(number, position) {
       
//     return parseFloat(number.toFixed(position));
// }



// const num = 3.1415

// const rez = numComma(num, 2);

// console.log(rez, '->', 3.14);




function numComma(number, position) {
    let ats = number

// 3.1415   (2)
// 314.15    * 10**2
// 314      round
// 3.14     / 10**2

    const power = 10**position
    ats = number * (10**position);
    ats = Math.floor(ats);
    ats /= power;

    return ats;
}

const num = 3.1415

const rez = numComma(num, 2);

console.log(rez, '->', 3.14);