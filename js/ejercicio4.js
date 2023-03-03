// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
// número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
// “cancelar” deberá indicarse la suma total de los números introducidos.

let numero = parseInt(prompt('Ingrese un número'));
let otroNumero;
while(confirm('Presione Aceptar para seguir ingresando números. Para terminar haga click en Cancelar') === true){
    otroNumero = parseInt(prompt('Ingrese otro número'));
    if(!isNaN(otroNumero) === true){
        numero += otroNumero;
    }else{
        alert('Número incorrecto, por favor ingrese un número valido.')
    }
}
document.write(numero);