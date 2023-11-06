/*Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

document.write("<pre>");
for (let i = 1; i <= 30; i++) {
  let linea = '';
  for (let j = 1; j <= i; j++) {
    linea = linea + i;
  }
  document.write(linea + "<br>");
}
document.write("</pre>");

  