function skaitmenuKiekisSkaiciuje(num) {
    if (typeof num !== 'number') {
    return `rezultatas: "Pateikta netinkamo tipo reiksme`;
    } 
    const numString = num.toString();
    let numStringIlgis = numString.length;
    return `rezultatas: ${numStringIlgis}`;
    
  }
  console.log( skaitmenuKiekisSkaiciuje( true ) );