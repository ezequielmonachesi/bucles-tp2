// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
// guión -.


let cadena = prompt('Ingrese una oración');

while(confirm() === true){
    cadena += ' - '
    cadena += prompt('Ingrese una oración');
}
document.write(`
<h1>Estas oraciones ingresaste</h1>
${cadena}
`)