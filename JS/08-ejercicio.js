/*Crea script para generar pirámide siguiente con los 
números del 1 al número que indique el usuario }
(no mayor de 50) 
 */

const numeroUsuario = parseInt(prompt("Ingrese un número (no mayor de 50):"));

if (isNaN(numeroUsuario) || numeroUsuario <= 0 || numeroUsuario > 50) {
  alert("Por favor, ingrese un número válido y que no sea mayor de 50.");
} else {
  document.write("<pre>"); 
  for (let fila = 1; fila <= numeroUsuario; fila++) {
    let linea = '';//construye la cadena para fila de la piramide
    for (let j = 1; j <= fila; j++) {
      linea = linea + j;
    }
    document.write(linea + "<br>");
  }
  document.write("</pre>"); 
}
