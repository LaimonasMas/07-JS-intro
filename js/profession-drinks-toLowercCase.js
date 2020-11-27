/*
Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:
*/
/*
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".
*/

function getDrinkByProfession(param){
    const word = param;
    let ats = word.toLowerCase();
    if (ats === 'politicia') {
      return "Patron Tequila";
      }
    if (ats === 'school counselor') {
      return "Anything with Alcohol";
    }
    if (ats === 'programmer') {
      return "Hipster Craft Beer"
    }
    if (ats === 'bike gang member') {
      return "Moonshine";
    }
    if (ats === 'politician') {
      return "Your tax dollars";
    }
    if (ats === 'rapper') {
      return "Cristal";
    }
    return 'Beer';
  }

console.log( getDrinkByProfession('Politician') );