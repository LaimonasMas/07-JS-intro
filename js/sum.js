// const pirmas1 = 2
// const antras2 = 2
// const suma1 = pirmas1 + antras2;

// console.log(`${pirmas1} + ${antras2} = ${suma1}`);

function sumavimas(pirmas, antras) {
    const suma = pirmas + antras;
    console.log(`${pirmas} + ${antras} = ${suma}`);
}

sumavimas(2, 5);
sumavimas(22, 55);
sumavimas(-8, 17);
sumavimas(-8, 17);

// pavyzdys
// function sumavimas(pirmas, antras, trecias) {

//     const suma = pirmas + antras + trecias;
//     console.log(`${pirmas} + ${antras} + ${trecias} = ${suma}`);
// }

// sumavimas(2, 5, 6);
// sumavimas(22, 55, 12);
// sumavimas(-8, 17, 11);
// sumavimas(-8, 17, 14);



// KAZKUR ZEMIAU KLAIDA

function pazymiuVidurkis(list) {
    let suma = 0;
    const kiekis = list.length;

    for (let i=0; i < kiekis; i++){
        const pazymys = list[i];
        suma = suma + pazymys;
        
}

const vidurkis = suma / kiekis;

        if (kiekis === 0) {
            console.log('Neturi pazymiu...' );
        } else {
    console.log(`Vidurkis: ${vidurkis}.`);
         }
}

pazymiuVidurkis([5, 8, 9]);
pazymiuVidurkis([5, 8, 9, 7]);
pazymiuVidurkis([]);
pazymiuVidurkis([10, 10, 10, 10, 10]);


// funkcija "pakelta kvadratu":

function kvadratu(a) {
    const ats = a*a;
    console.log(ats)
  }
  
  kvadratu(11);