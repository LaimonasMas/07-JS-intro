// 2.	panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// a.	pvz.: “abcdef” -> “fedcba”

const text = 'abcdef';
let back = '';

// pvz:1
// for (let i=0;  i < text.length; i++){
//     const letter = text[i];
//     back = letter + back;
// }


// pvz2
// for (let i=text.length-1; i>=0; i--) {
//     const letter = text[i];
//     back = back + letter;
// }

// pvz3
// for (let i=0; i<text.length ; i++) {
//     const letter = text[text.length - i - 1];
//     back = back + letter;
// }

// pvz4
// for (let i=1; i<=text.length ; i++) {
//     const letter = text[text.length - i];
//     back = back + letter;
// }










console.log(text, '->', back);