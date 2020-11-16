const wordLIst = ['labas', 'rytas', 'Lietuva'];


/*
Einame per zodziu sarasa
        pasiimu viena konkretu zodi
        pasiruosiu kintamaji naujam atvirkstiniam zodziui
        einu per to zodzio raides
            pasiimu to zodzio raide
            pasidedu is priekio atvirkstiniam zodziui
        spausdinu atvr. zodi
*/

for (let w=0; w<wordLIst.length; w++) {
    const word = wordLIst[w];
        let backward = '';

    for (let r = 0; r < word.length; r++) {
        const letter = word[r];
        backward = letter + backward;
       
    }
    console.log(backward);
}