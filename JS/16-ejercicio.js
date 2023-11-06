/*16- Realiza un script que pida una cadena de texto 
y la devuelva al revés. Es decir, si tecleo “hola que tal” 
deberá mostrar “lat euq aloh”. */

// Pedir al usuario que ingrese una cadena de texto
let texto = prompt("Ingrese una cadena de texto:");

// Llamar a la función para invertir la cadena
let textoInvertido = invertirCadena(texto);

// Mostrar la cadena invertida
document.write("Cadena invertida: " + textoInvertido);

// Función para invertir la cadena
function invertirCadena(cadena) {
  return cadena.split('').reverse().join('');
}

/*La función invertirCadena realiza los siguientes pasos:

cadena.split(''): Divide la cadena en un arreglo de caracteres. 
Esto significa que cada carácter se convierte en un elemento de un arreglo. 
Por ejemplo, si el usuario ingresa "hola", se convierte en ['h', 'o', 'l', 'a'].

reverse(): Invierte el orden de los elementos en el arreglo.
 En nuestro ejemplo, el arreglo se convierte en ['a', 'l', 'o', 'h'].

join(''): Une los elementos del arreglo de caracteres en una sola cadena,
 eliminando cualquier espacio entre ellos. En nuestro ejemplo, se convierte en la cadena "aloh". */