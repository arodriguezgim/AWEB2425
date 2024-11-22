/* Ejercicios 2: Escribe por consola la tabla 
del 6 de multiplicar 
let tabla = parseInt( prompt("Escriba la tabla que quieres" ));
let contador;
let resultado;

for( contador = 0; contador <= 10; contador++ ){
    resultado = tabla * contador;
    console.log(tabla + " x " + contador + " = " + resultado);
}
*/
/*Ejercicio 3:
let contador;
let resultado = 0;
for(contador = 0; contador <= 5; contador++){
    resultado = resultado + contador;
}
console.log("La suma es: " + resultado );
*/
/* Ejercicio 4
let contador;
contador = 1;

while ( contador <= 5){
    console.log("Hola Mundo!!!");
    contador = contador + 1; // contador++
}*/
/*Ejercicio 6
for(let contador=10; contador >=1; contador--){
    console.log(contador);
}*/
/* Ejercicio 7*/
let numero = parseInt( prompt("Dime un numero"));
for( let contador = 1; contador <= numero; contador++){
    console.log(contador)
}