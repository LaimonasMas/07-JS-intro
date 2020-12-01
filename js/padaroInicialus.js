function abbrevName(name){
    const wordName = name.toUpperCase();
    const word = wordName.split(' ')
    return `${word[0][0]}.${word[1][0]}`
  }
  
  console.log( abbrevName("Sam Harris") )