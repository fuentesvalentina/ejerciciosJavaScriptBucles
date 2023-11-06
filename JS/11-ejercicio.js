/*Realiza un script que pida por teclado
 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() */

let edades = [];
let nombres = [];

for (let i = 1; i <= 3; i++) {
  let nombre = prompt(`Ingrese el nombre ${i}:`);
  let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));
  if (!isNaN(edad)) { //! --> verifica si edad es un numero válido
    edades.push(edad);//push agrega el numero al final de un arreglo
    nombres.push(nombre);
  } else {
    alert("Por favor, ingrese una edad válida.");
    i--;
  }
}

if (edades.length === 3) { //verificamos que el usuario ingreso 3 edades al arreglo
  const edadMayor = Math.max(...edades);
  const indiceMayor = edades.indexOf(edadMayor);//se utiliza para encontrar el índice de esa edad más grande en el arreglo edades.
  const nombreMayor = nombres[indiceMayor];
  alert(`La persona mayor es: ${nombreMayor} (Edad: ${edadMayor})`);
} 
