/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

let texto = prompt('Ingrese el texto');
let elemento;

for(let k = 0; k < texto.length; k++){
    if(k < texto.length-1){
        elemento = (texto.charAt(k)).concat('-');
    }else{
        elemento = texto.charAt(k);
    }
    document.write(elemento);
}

