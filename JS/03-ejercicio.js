/*Realiza un script que pida cadenas de texto  
hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -.
 */

let cadenas = [];
let continuar = true;

while (continuar) {
  let texto = prompt("Ingrese una cadena de texto:");
  
  if (texto !== null) {
    cadenas.push(texto);
  } else {
    continuar = false;
  }
}

if (cadenas.length > 0) {
  let resultado = cadenas.join("-");
  document.write("Cadenas concatenadas con guión: " + resultado);
} else {
 document.write("No se ingresaron cadenas.");
}
