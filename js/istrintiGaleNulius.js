function noBoringZeros(n) {
    let number = 0;
    const word = n + '';
    for (let i=word.length-1; i>=0; i--) {
      number += word[i];     
      }
      if (n < 0) {
      let noZeros = parseInt(number, 10);
  console.log(noZeros)
      let newNumber = noZeros + '';
      let newNumber1 = newNumber.split("").reverse().join("");
      let newNumber2 = parseInt(newNumber1, 10)
      return -newNumber2;
    }
      let noZeros = parseInt(number, 10);
      let newNumber = noZeros + '';
      let newNumber1 = newNumber.split("").reverse().join("");
      let newNumber2 = parseInt(newNumber1, 10)
      return newNumber2;
}