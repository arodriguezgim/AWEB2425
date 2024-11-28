## **Capítulo 4: Funciones (3h)**

### **Objetivo:**
Entender la utilidad de las funciones en JavaScript, aprender a definirlas y llamarlas, y explorar los conceptos de parámetros, valores de retorno, y el alcance de las variables.

---

### **4.1 ¿Qué son las funciones?**
- Una función es un bloque de código reutilizable que realiza una tarea específica.
- Las funciones ayudan a estructurar el código y a evitar duplicaciones.
- **Ventajas:**
  - Reutilización.
  - Modularidad.
  - Mejor mantenimiento del código.

---

### **4.2 Declaración y llamada de funciones**

#### **Declaración de una función**
- **Sintaxis básica:**
  ```javascript
  function nombreFuncion() {
    // Código a ejecutar
  }
  ```
- **Ejemplo:**
  ```javascript
  function saludar() {
    console.log("¡Hola, mundo!");
  }
  
  // Llamada a la función
  saludar(); // Salida: ¡Hola, mundo!
  ```

---

### **4.3 Parámetros y argumentos**

#### **Definición de parámetros**
- Las funciones pueden aceptar datos externos (parámetros) al ser llamadas.
- **Sintaxis básica:**
  ```javascript
  function nombreFuncion(parametro1, parametro2) {
    // Uso de los parámetros
  }
  ```
- **Ejemplo:**
  ```javascript
  function sumar(a, b) {
    console.log(a + b);
  }

  sumar(3, 5); // Salida: 8
  ```

#### **Uso de valores predeterminados**
- Los parámetros pueden tener valores por defecto.
- **Ejemplo:**
  ```javascript
  function saludar(nombre = "invitado") {
    console.log(`Hola, ${nombre}`);
  }

  saludar(); // Salida: Hola, invitado
  saludar("Ana"); // Salida: Hola, Ana
  ```

---

### **4.4 Valores de retorno**

#### **Retornar valores desde una función**
- Una función puede devolver un valor usando la palabra clave `return`.
- **Ejemplo:**
  ```javascript
  function multiplicar(a, b) {
    return a * b;
  }

  let resultado = multiplicar(4, 5);
  console.log(resultado); // Salida: 20
  ```

#### **Uso de funciones dentro de expresiones**
- Las funciones que devuelven valores pueden usarse en operaciones.
- **Ejemplo:**
  ```javascript
  function cuadrado(x) {
    return x * x;
  }

  console.log(cuadrado(3) + cuadrado(4)); // Salida: 25
  ```

---

### **4.5 Ámbito de las variables**

#### **Variables locales y globales**
- **Globales:** Declaradas fuera de cualquier función; son accesibles desde cualquier parte del programa.
- **Locales:** Declaradas dentro de una función; solo existen dentro de esa función.
- **Ejemplo:**
  ```javascript
  let global = "Soy global";

  function mostrar() {
    let local = "Soy local";
    console.log(global); // Accede a la variable global
    console.log(local);  // Accede a la variable local
  }

  mostrar();
  console.log(local); // Error: local no está definida
  ```

---
<!--

### **4.6 Funciones como valores y anónimas**

#### **Funciones asignadas a variables**
- Las funciones pueden almacenarse en variables.
- **Ejemplo:**
  ```javascript
  const saludar = function(nombre) {
    return `Hola, ${nombre}`;
  };

  console.log(saludar("Carlos")); // Salida: Hola, Carlos
  ```

#### **Funciones anónimas**
- Son funciones sin nombre, usadas comúnmente en expresiones o callbacks.
- **Ejemplo:**
  ```javascript
  setTimeout(function() {
    console.log("Esto se ejecuta después de 3 segundos");
  }, 3000);
  ```

---

### **4.7 Arrow Functions (Funciones Flecha)**

#### **Introducción**
- Sintaxis compacta para definir funciones.
- **Sintaxis básica:**
  ```javascript
  const nombreFuncion = (parametros) => {
    // Código
  };
  ```
- **Ejemplo:**
  ```javascript
  const sumar = (a, b) => a + b;

  console.log(sumar(3, 7)); // Salida: 10
  ```

#### **Diferencia entre funciones tradicionales y flecha**
- Las funciones flecha no tienen su propio `this`, lo que puede ser útil en ciertos contextos como objetos y eventos.

---

### **4.8 Ejemplos combinados**

#### **Ejemplo 1: Calcular el área de un círculo**
```javascript
function calcularAreaCirculo(radio) {
  return Math.PI * radio * radio;
}

console.log(calcularAreaCirculo(5)); // Salida: 78.53981633974483
```

#### **Ejemplo 2: Comprobar si un número es par**
```javascript
const esPar = (numero) => numero % 2 === 0;

console.log(esPar(4)); // Salida: true
console.log(esPar(7)); // Salida: false
```

#### **Ejemplo 3: Función con lógica compleja**
```javascript
function clasificarEdad(edad) {
  if (edad < 18) {
    return "Menor de edad";
  } else if (edad < 65) {
    return "Adulto";
  } else {
    return "Adulto mayor";
  }
}

console.log(clasificarEdad(20)); // Salida: Adulto
console.log(clasificarEdad(70)); // Salida: Adulto mayor
```
-->

## Practica todo esto realizando ejercicios

[Ejercicios de funciones](./04-Funciones/ejercicios.md)
[Más ejercicios de repaso](./04-Funciones/ejerciciosrepaso.md)

---

