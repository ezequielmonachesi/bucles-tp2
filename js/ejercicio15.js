/* 15- Realiza un script que cuente el número de vocales que tiene un texto. */

let texto = prompt('Ingrese un texto y te mostraré la cantidad de vocales que tiene =D')
let count = 0;
for(let x = 0; x < texto.length; x++){
    if(texto.charAt(x) === 'a' || texto.charAt(x) === 'e' || texto.charAt(x) === 'i' || texto.charAt(x) === 'o' || texto.charAt(x) === 'u' ){
        count++;
    }
}
document.write(`Número de vocales de la palabra ingresada: ${count}`)

