function cambiarParrafo(){
    let nombre = prompt("Dime tu nombre");
    document.getElementById('parrafo').innerText = nombre;
}
function cambiarApellido(){
    let apellido = prompt("Dime tu apellido");
    document.getElementById('miApellido').innerText = apellido;
}
/* EJERCICIO 2 */
function cambiarFondo( color ){
    document.body.style.backgroundColor = color;
    document.body.style.color = 'white';
}
/* EJERCICIO 3 */
function mostrarOcultar(){
    const texto = document.getElementById('miTexto');
    if ( texto.style.display === 'none' ){
        texto.style.display = 'block';
    } else {
        texto.style.display = 'none';
    }
}