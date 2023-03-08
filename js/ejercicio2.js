/* 2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje
de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje
“Introduce un número válido” */

let nota = parseInt(prompt("Ingrese una nota"));

if(!isNaN(nota) === true){
  switch (nota) {
    case 0:
    case 1:
    case 2:
      document.write(`
      <h1>Calificación según nota</h1>
      <p>Nota ingresada [${nota}] es: Muy deficiente.</p>
      `);
      break;
    case 3:
    case 4:
      document.write(`
      <h1>Calificación según nota</h1>
      <p>Nota ingresada [${nota}] es: Insuficiente.</p>
      `);
      break;
    case 5:
    case 6:
      document.write(`
        <h1>Calificación según nota</h1>
        <p>Nota ingresada [${nota}] es: Suficiente.</p>
        `);
      break;
    case 7:
      document.write(`
          <h1>Calificación según nota</h1>
          <p>Nota ingresada [${nota}] es: Bien.</p>
          `);
      break;
    case 8:
    case 9:
      document.write(`
          <h1>Calificación según nota</h1>
          <p>Nota ingresada [${nota}] es: Notable.</p>
          `);
      break;
    case 10:
      document.write(`
              <h1>Calificación según nota</h1>
              <p>Nota ingresada [${nota}] es: Sobresaliente.</p>
              `);
      break;
    default:
      document.write(`
      Número erróneo.
      `);
  }
} else{
  document.write(`
  Introduce un número válido.
  `);
}
