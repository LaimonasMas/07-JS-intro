
 /* KINTAMŲJŲ INICIJAVIMAS*/


 // 1.	Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
 //      a.	Po kiekvieno jų inicijavimo, išvesti į console

 const birth = 1986;
 console.log(birth);

 const age = 34;
 console.log(age);

 const students = 32
 console.log(students);

//  2.	Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//       a.	Po kiekvieno jų inicijavimo, išvesti į console

const firstName = 'Laimonas';
console.log(firstName);

const lastName = 'Masionis';
console.log(lastName);

const city = 'Vilnius';
console.log(city);

// 3.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//       a.	Po kiekvieno jų inicijavimo, išvesti į console

const numbers = [1.5, 6, 7, 9, 12];
console.log(numbers);

const prices = [1, 2, 1.6, 2.2, 3];
console.log(prices);

const cars = [2, 4, 8, 12, 23];
console.log(cars);

// 4.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//       a.	Po kiekvieno jų inicijavimo, išvesti į console

const friends = ['Linas', 'Antanas', 'Mindaugas', 'Andrius', 'Jonas'];
console.log(friends);

const colors = ['green', 'yellow', 'orange', 'white', 'blue'];
console.log(colors);

const streetNames = ['Dziaugsmo', 'Upes', 'Ukmerges', 'Zadeikos', 'Ateities'];
console.log(streetNames);


 /*VEIKSMAI SU KINTAMAISIAIS*/


// 1.	Susumuoti visus skaičiaus tipo kintamuosius
// a.	Rezultatą išvesti į console

const sum = birth + age + students
console.log(sum);

// 2.	Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// a.	Rezultatą išvesti į console

const string = `${firstName} ${lastName} ${city}`;
console.log(string);

// 3.	Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// a.	1-2+3-4+5
// b.	Rezultatą išvesti į console

const numbersValue = numbers[0] - numbers[1] + numbers[2] - numbers[3] + numbers[4];
console.log(numbersValue);

const pricesValue = prices[0] - prices[1] + prices[2] - prices[3] + prices[4];
console.log(pricesValue);

const carsValue = cars[0] - cars[1] + cars[2] - cars[3] + cars[4];
console.log(carsValue);

// 4.	Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const friendsReverse = friends[4] + ', ' + friends[3] + ', ' + friends[2] + ', ' + friends[1] + ', ' + friends[0];
console.log(friendsReverse);

const colorsReverse = colors[4] + ', ' + colors[3] + ', ' + colors[2] + ', ' + colors[1] + ', ' + colors[0];
console.log(colorsReverse);

const streetNamesReverse = streetNames[4] + ', ' + streetNames[3] + ', ' + streetNames[2] + ', ' + streetNames[1] + ', ' + streetNames[0];
console.log(streetNamesReverse);

const allTogetherReverse = streetNamesReverse + ', ' + colorsReverse + ', ' + friendsReverse;
console.log(allTogetherReverse);















 

