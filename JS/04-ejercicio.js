/* Realiza un script que pida números hasta que se pulse
 “cancelar”. Si no es un número deberá indicarse con un
  «alert» y seguir pidiendo números. Al salir con “cancelar” 
  deberá indicarse la suma total de los números introducidos.*/

  let suma = 0;
  let continuar = true;
  
  while (continuar) {
    let entrada = prompt("Ingrese un número:");
  
    if (entrada === null) {
      continuar = false; // El usuario pulsó "cancelar"
    } else {
      let numero = parseFloat(entrada);
  
      if (!isNaN(numero)) {
        suma += numero;
      } else {
        alert("Por favor, ingrese un número válido.");
      }
    }
  }
  
  if (!isNaN(suma)) {
    alert("La suma total de los números introducidos es: " + suma);
  } else {
    alert("No se ingresaron números.");
  }