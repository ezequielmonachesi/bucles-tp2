// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número
// que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
// indica 30).
// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let number;

do{
  number = parseInt(prompt("Ingrese un número mayor que uno y menor que 50"));
}while(number > 50 ||  number <0)

for (let j = number; j >= 1; j--) {
  for (let i = 0; i < j; i++) {
    document.write((String.prototype.repeat = j));
  }
  document.write("<br>");
}
