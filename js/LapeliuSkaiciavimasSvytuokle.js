// https://www.codewars.com/kata/5bd776533a7e2720c40000e5/train/javascript

function pendulum(values) {
const array = values.sort(function(a, b){return a-b});
    if ((values.length % 2) === 0) {
    let leftSide = [];
    let rightSide = [];
        for (let i=array.length-1; i>=0; i = i - 2) {
        rightSide.push(array[i]);
        }
        rightSide.reverse();
        for (let i=0; i<array.length; i = i + 2) {
        leftSide.push(array[i]);
        }
        leftSide.reverse();
        let finalArray = leftSide.concat(rightSide);
        return finalArray;
        }
    if ((values.length % 2) === 1) {
    let leftSide = [];
    let rightSide = [];
        for (let i=array.length-1; i>=0; i = i - 2) {
        rightSide.push(array[i]);
        }
        for (let i=1; i<array.length; i = i + 2) {
        leftSide.push(array[i]);
        }
        let finalArray = rightSide.concat(leftSide);
        return finalArray;
        }
}
console.log(pendulum([20,19,25,16,19,30,18,24]));

// sitas man patiko:

// function pendulum(values) {

//     let sort = values.slice().sort((a, b) => a - b)
//     ,  parts = { left: [], right: [] };
    
//     for (let i = 0; i < sort.length; i++) 
//       parts[i % 2 ? 'right' : 'left'].push(sort[i]);
  
//     return parts.left.reverse().concat(parts.right);
    
//   }

