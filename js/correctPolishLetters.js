function correctPolishLetters(string) {
const chars = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
string = string.replace(/[ąćęłńóśźż]/g, m => chars[m]);
let ats = string;
return ats;
}

console.log( correctPolishLetters('Jędrzej Błądziński') );