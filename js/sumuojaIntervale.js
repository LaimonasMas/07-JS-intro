// sumuoja pvz nuo 0 iki 8

function summation(num) {
    let sum = 0;
    const number = num;
    for (let i=0; i<number; i++) {
      sum += 1 + i;
      }
      return sum;
  }
  
  console.log( summation(8) )

//   arba 

// function summation(num) {
//     let sum = 0;
//     const number = num;
//     for (let i=1; i<=number; i++) {
//       sum += i;
//         }
//       return sum;
//   }
  
//   console.log( summation(8) )