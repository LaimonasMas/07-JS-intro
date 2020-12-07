function specialNumber(n){
    let string = n.toString()
    let valid = ['0','1','2','3','4','5']
    for(let i = 0; i < string.length; i++){
      if(!valid.includes(string[i])) return 'NOT!!'
    }
    return 'Special!!'
  }

console.log(specialNumber(25432));


// Neefektyvus, bet veikia:

// function specialNumber(n){
//     const str = n.toString();
//     console.log(str);
//     const data = [6, 7, 8, 9];
//     const search0 = str.includes(data[0]);
//     const search1 = str.includes(data[1]);
//     const search2 = str.includes(data[2]);
//     const search3 = str.includes(data[3]);
//     if (search0 === true || search1 === true || search2 === true || search3 === true) {
//       return 'NOT!!'
//     } else {
//       return 'Special!!'
//     }
//   }
  
  console.log( specialNumber(12345) );