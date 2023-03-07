/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en
orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

let n1 = parseInt(prompt('Ingrese el número de columnas'));
let n2 = parseInt(prompt('Ingrese el número de filas'));

let n = n1*n2;
document.write(`Columnas y Filas ingresadas ${n1} * ${n2} = Total de celdas: `)
for(let filas = n; filas >= 1; filas--){
    document.write(`${filas} `);
}