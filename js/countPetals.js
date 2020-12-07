// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
    const petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
        if (nbPetals % 6 === 1) {
          return petals[0];
        }
        if (nbPetals % 6 === 2) {
          return petals[1];
        }
        if (nbPetals % 6 === 3) {
          return petals[2];
        }    
        if (nbPetals % 6 === 4) {
          return petals[3];
        }  
        if (nbPetals % 6 === 5) {
          return petals[4];
        }   
        if (nbPetals % 6 === 0) {
          return petals[5];
        }     
    }
    
    console.log(howMuchILoveYou(6))

// man patinka sitas:

    function howMuchILoveYou(nbPetals) {
        let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
        return petals[(nbPetals-1) % 6];
      }

      console.log(howMuchILoveYou(6))