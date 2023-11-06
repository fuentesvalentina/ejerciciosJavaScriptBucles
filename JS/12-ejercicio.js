// Realiza un script que genere un número aleatorio entre 1 y 99

const numeroAleatorio = Math.floor(Math.random() * 98) + 1;
document.write(`Número aleatorio entre 1 y 99: ${numeroAleatorio}`);


/*Math.random() genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).

Multiplicamos ese número aleatorio por 98 para obtener un número entre 0 (inclusive) y 98 (exclusivo).

Luego, sumamos 1 al resultado para obtener un número entre 1 (inclusive) y 99 (inclusive).

Math.floor() se utiliza para redondear el número al entero más cercano. Esto asegura que obtendrás un número entero en lugar de un decimal.
 */