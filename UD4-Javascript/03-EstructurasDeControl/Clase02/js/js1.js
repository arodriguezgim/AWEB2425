/* EJ 1: Escribe un script que pida una nota
y te devuelva si es Sobresaliente, Notable, 
Aprobado, o Suspenso */
let nota = parseInt( prompt("Introduce la nota" ) );

if (nota >= 9) {
    console.log("Sobresaliente");
  } else if (nota >= 7) {
    console.log("Notable");
  } else if (nota >= 5) {
    console.log("Aprobado");
  } else {
    console.log("Suspenso");
  }
