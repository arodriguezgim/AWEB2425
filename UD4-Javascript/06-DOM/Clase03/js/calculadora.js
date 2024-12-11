function sumar() {
    const num1 = parseInt( document.getElementById('num1').value);
    const num2 = parseInt( document.getElementById('num2').value);
    let resultado = (num1 + num2);
    if( isNaN(num1) || isNaN(num2 ) ){
        document.getElementById('resultado').innerText = "Introduce los dos números bien";
    } else{
        document.getElementById('resultado').innerText = resultado;
    }
    
}