/*Realiza un script que muestre la posición de la primera
 vocal de un texto introducido por teclado.
 */

 // Solicitar al usuario que ingrese un texto
let texto = prompt("Ingrese un texto:");

// Llamar a la función para encontrar la primera vocal
let posicion = encontrarPrimeraVocal(texto);

// Mostrar la posición de la primera vocal
if (posicion !== -1) {
    document.write("La vocal '" + texto[posicion] + "' está en la posición " + (posicion));
} else {
    document.write("No se encontraron vocales en el texto.");
}

// Función para encontrar la primera vocal en un texto
function encontrarPrimeraVocal(cadena) {
  // Convertir el texto a minúsculas para hacer coincidencias sin distinción entre mayúsculas y minúsculas
  cadena = cadena.toLowerCase();
  
  // Definir un conjunto de vocales
  const vocales = "aeiou";
  
  // Iterar a través de la cadena y encontrar la posición de la primera vocal
  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
      return i;
    }
  }
  
  // Si no se encontraron vocales, devolver -1
  return -1;
}
