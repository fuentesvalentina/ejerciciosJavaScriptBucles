/*  Realizar una página con un script que calcule el valor
 de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: 
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/

const dni = parseInt(prompt("Ingrese su numero de DNI"));

if (isNaN(dni)) {
  alert("Por favor, introduce un número válido de DNI.");
} else if (dni >= 0 && dni <= 99999999) {
  const resto = dni % 23;
  switch (resto) {
    case 1:
      document.write("La letra correspondiente es T");
      break;
    case 2:
      document.write("La letra correspondiente es R");
      break;
    case 3:
      document.write("La letra correspondiente es W");
      break;
    case 4:
      document.write("La letra correspondiente es A");
      break;
    case 5:
      document.write("La letra correspondiente es G");
      break;
    case 6:
      document.write("La letra correspondiente es M");
      break;
    case 7:
      document.write("La letra correspondiente es Y");
      break;
    case 8:
      document.write("La letra correspondiente es F");
      break;
    case 9:
      document.write("La letra correspondiente es P");
      break;
    case 10:
      document.write("La letra correspondiente es D");
      break;
    case 11:
      document.write("La letra correspondiente es X");
      break;
    case 12:
      document.write("La letra correspondiente es B");
      break;
    case 13:
      document.write("La letra correspondiente es N");
      break;
    case 14:
      document.write("La letra correspondiente es J");
      break;
    case 15:
      document.write("La letra correspondiente es Z");
      break;
    case 16:
      document.write("La letra correspondiente es S");
      break;
    case 17:
      document.write("La letra correspondiente es Q");
      break;
    case 18:
      document.write("La letra correspondiente es V");
      break;
    case 19:
      document.write("La letra correspondiente es H");
      break;
    case 20:
      document.write("La letra correspondiente es L");
      break;
    case 21:
      document.write("La letra correspondiente es C");
      break;
    case 22:
      document.write("La letra correspondiente es K");
      break;
    case 23:
      document.write("La letra correspondiente es E");
      break;
  }
  alert("Número de DNI válido.");
} else {
  alert("El número de DNI debe estar entre 0 y 99999999.");
}
