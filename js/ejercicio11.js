/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */


let edad1 = parseInt(prompt(`Ingrese la primera edad`));
let nombre1 = prompt(`Ingrese el nombre de la primera persona`);
let edad2 = parseInt(prompt(`Ingrese la segunda edad`));
let nombre2 = prompt(`Ingrese el nombre de la segunda persona`);
let edad3 = parseInt(prompt(`Ingrese la tercera edad`));
let nombre3 = prompt(`Ingrese el nombre de la tercera persona`);
let edadMayor = Math.max(edad1,edad2,edad3);

if(edadMayor === edad1){
document.write(nombre1)
}else if(edadMayor === edad2){
    document.write(nombre2)
}else{
    document.write(nombre3)
}
