//Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt("Ingrese un texto:");
let contadorVocales = 0;

for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i].toLowerCase();
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
      contadorVocales++;
    }
  }
  
document.write(`El texto contiene ${contadorVocales} vocales.`);
