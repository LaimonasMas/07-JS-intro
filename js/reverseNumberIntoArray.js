function digitize(n) {
    const string = n.toString()
    const array = string.split('');
    const rev = array.reverse();
    const number = rev.join('');
    const finalArray = Array.from(String(number), Number);
    return finalArray;
  }
 
  console.log( digitize(35231) );

