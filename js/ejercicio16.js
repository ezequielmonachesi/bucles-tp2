/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */

let texto = prompt('Ingrese un texto y lo invertiré');
let textoInvertido = '';

for(let f = texto.length; f>=0; f--){
    textoInvertido+=texto.charAt(f);
}
document.write(`El texto invertido de ${texto.toUpperCase()} sería: <br> ${textoInvertido.toLocaleUpperCase()} `)