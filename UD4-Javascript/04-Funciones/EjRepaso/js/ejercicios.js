function ejercicio1(){
    let numero = parseInt( prompt( "Dame un número y te diré si es PAR o IMPAR"));
    if ( esPar(numero) ) {
        alert("El número ES PAR");
    } else {
        alert("El número ES IMPAR");
    }
}

function esPar( numero ){
    if ( numero % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}
//////// EJERCICIO 2 /////////////////
function ejercicio2(){
    let num1 = parseInt( prompt(" Dame el PRIMER número"));
    let num2 = parseInt( prompt(" Dame el SEGUNDO número"));
    let num3 = parseInt( prompt(" Dame el TERCER número"));
    if ( num1 > num2 && num1 > num3 ){
        alert("El numero " + num1 + " es el MAYOR");
    }
    if ( num2 > num1 && num2 > num3 ){
        alert("El numero " + num2 + " es el MAYOR");
    }
    if ( num3 > num1 && num3 > num2 ){
        alert("El numero " + num3 + " es el MAYOR");
    }
}

//////// EJERCICIO 3 /////////////////
function ejercicio3(){
    let nota = parseInt( prompt( "Dime la nota del alumno del 1 al 100" ) );
    if( nota >= 0 && nota < 50 ){
        alert("Tu nota es: INSUFICIENTE");
    } else if ( nota >= 50 && nota < 60){
        alert("Tu nota es: SUFICIENTE");
    } else if ( nota >= 60 && nota < 70){
        alert("Tu nota es: BIEN");
    } else if ( nota >= 70 && nota < 90){
        alert("Tu nota es: NOTABLE");
    } else {
        alert("Tu nota es: SOBRESALIENTE");
    }
}
//////// EJERCICIO 4 /////////////////
function ejercicio4(){
    let anio = parseInt( prompt( "Dime el año" ) );
    if ( anio % 4 === 0 ){
        alert("El año es BISIESTO");
    } else {
        alert("El año NO es BISIESTO");
    }
}


