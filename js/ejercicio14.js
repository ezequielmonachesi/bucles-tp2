/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

let texto = 'hola que tal';
let elemento;

for(let k = 0; k < texto.length; k++){
    elemento = (texto.charAt(k)).concat('-');
    document.write(elemento)
}
;
document.write('<br>' + texto.substring(-1))

