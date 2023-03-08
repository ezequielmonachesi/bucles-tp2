/* 17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado. */

let texto = prompt("Ingrese un texto y te diré cual es la primera vocal");
for (let v = 0; v < texto.length; v++) {
  if (
    texto.charAt(v) === "a" ||
    texto.charAt(v) === "e" ||
    texto.charAt(v) === "i" ||
    texto.charAt(v) === "o" ||
    texto.charAt(v) === "u"
  ) {
    document.write(texto.charAt(v));
    break;
  }
}
