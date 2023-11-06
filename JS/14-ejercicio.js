/*Realiza un script que pida una cadena de texto 
y lo muestre poniendo el signo – entre cada carácter 
sin usar el método replace. Por ejemplo, si tecleo 
“hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

const texto = prompt("Ingrese una cadena de texto:");
let textoConGuiones = '';

for (let i = 0; i < texto.length; i++) {// texto.length se utiliza para obtener la longitud de una cadena de texto, devuelve el número de caracteres que contiene la cadena
  if (i !== texto.length - 1) { //si es el ultimo caracter de la cadena no agrega el guion
    textoConGuiones += texto[i] + '-';//La operación de concatenación (+=) agrega el carácter actual más el guion a la cadena textoConGuiones
  } else {
    textoConGuiones += texto[i];//es el ultimo caracter
  }
}

document.write(`Texto con guiones: ${textoConGuiones}`);
