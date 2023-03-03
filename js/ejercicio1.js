// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
// mensaje que ya puede conducir, si la edad ingresada no es un número válido
// indicarlo en un mensaje.

// Hasta los 80 pueden manejar en este programa
let edad = parseInt(prompt("Ingrese su edad"));

if (!isNaN(edad) === true) {
  if (edad < 18 || edad > 80) {
    document.write("No puedes manejar");
  } else if (edad >= 18) {
    document.write("Puedes manejar");
  }
} else {
  document.write("No ingresó un número válido.");
}
