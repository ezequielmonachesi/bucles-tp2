/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en
orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

let fila = parseInt(prompt("Ingrese el número de filas"));
let columna = parseInt(prompt("Ingrese el número de columnas"));

for (let f = 1; f <= columna * fila; f++) {
  document.write(`${f} `);
  if (f % columna === 0) {
    document.write("<br>");
  }
}