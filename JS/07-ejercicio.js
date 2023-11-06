/*Haz un script que escriba una pirámide inversa de los números del
 1 al número que indique el usuario (no mayor de 50). */

const numeroUsuario = parseInt(prompt("Ingrese un número (no mayor de 50):"));

if (isNaN(numeroUsuario) || numeroUsuario <= 0 || numeroUsuario > 50) {
  alert("Por favor, ingrese un número válido y que no sea mayor de 50.");
} else {
  document.write("<pre>"); 
  for (let i = numeroUsuario; i >= 1; i--) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea = linea + i;
    }
    document.write(linea + "<br>");
  }
  document.write("</pre>"); 
}
