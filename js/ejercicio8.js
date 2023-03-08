// 8- Crea script para generar pirámide siguiente con los números del 1 al número
// que indique el usuario (no mayor de 50)
// 1
// 12
// 123
// 1234
// 12345
// 123456

let number;

do {
  number = parseInt(prompt("Ingrese un número del 1 al 50"));
} while (number < 0 || number > 50);

if (number > 0 && number <= 50) {
  for (let j = 0; j <= number; j++) {
    for (let i = 1; i <= j; i++) {
      document.write(i);
    }
    document.write("<br>");
  }
} else {
  alert("No es valido el numero");
}
