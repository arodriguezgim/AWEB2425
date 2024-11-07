### **Capítulo 1: Introducción a la programación y a JavaScript (2h)**

**Objetivo:** Familiarizar a los estudiantes con los conceptos básicos de programación y configurar su entorno de trabajo con JavaScript. También, realizar sus primeros ejercicios prácticos.

#### 1.1 ¿Qué es programar?
   - **Explicación:** Programar es dar instrucciones a una computadora para realizar tareas específicas. 
   - **Ejemplo práctico:** Comparar la programación con una receta de cocina. Cada paso de una receta es como una "instrucción" que la computadora seguirá en el orden que el programador indique.

#### 1.2 Introducción a JavaScript: dónde y cómo se usa
   - **Explicación:** JavaScript es un lenguaje de programación que permite agregar interactividad a las páginas web, como botones que reaccionan al hacer clic o formularios que muestran mensajes.
   - **Ejemplos de uso de JavaScript en la vida cotidiana:**
     - Menús de navegación en páginas web que se despliegan al pasar el ratón.
     - Calculadoras en línea.
     - Galerías de imágenes que cambian al hacer clic.

#### 1.3 Configuración del entorno: uso de la consola del navegador y VSCode
   - **Consola del navegador:** Explicación de cómo abrir la consola del navegador (Ctrl+Shift+J en Chrome) y qué representa.
   - **VSCode:** Configuración básica del editor Visual Studio Code para escribir y ejecutar código JavaScript.
   - **Ejemplo práctico:**
     - Abrir la consola del navegador y escribir:
       ```javascript
       console.log("Hola, mundo");
       ```
     - Explicar cómo esta línea muestra "Hola, mundo" en la consola, permitiendo a los estudiantes ver cómo JavaScript se comunica con ellos.

#### 1.4 Primeros pasos con JavaScript: variables y tipos de datos básicos
   - **Variables:** Explicar que una variable es como una "caja" que almacena un valor que podemos usar más adelante.
   - **Ejemplos prácticos:**
     - Declaración de una variable para almacenar un nombre:
       ```javascript
       let nombre = "Juan";
       console.log(nombre);
       ```
     - Explicar que esta línea guarda el nombre "Juan" en una variable llamada `nombre`, y al usar `console.log(nombre);`, mostramos su valor en la consola.

   - **Tipos de datos básicos:**
     - **Texto (strings):** cadenas de texto. Ejemplo:
       ```javascript
       let saludo = "Hola";
       ```
     - **Números (numbers):** pueden ser enteros o decimales. Ejemplo:
       ```javascript
       let edad = 20;
       ```
     - **Booleanos:** valores verdaderos o falsos (true/false). Ejemplo:
       ```javascript
       let mayorDeEdad = true;
       ```

#### 1.5 Ejercicio práctico: Creación de un saludo personalizado
   - **Instrucción del ejercicio:** Pedir a los estudiantes que creen un pequeño script que:
     - Almacene su nombre en una variable.
     - Almacene su edad en otra variable.
     - Use `console.log` para mostrar un mensaje como "Hola, soy [nombre] y tengo [edad] años".
   - **Código de ejemplo:**
     ```javascript
     let nombre = "Ana";
     let edad = 18;
     console.log("Hola, soy " + nombre + " y tengo " + edad + " años");
     ```

#### 1.6 Tarea para practicar
   - **Desafío opcional:** Pedir a los estudiantes que intenten almacenar su ciudad y pasatiempo favorito en variables y creen un mensaje similar al del ejercicio.
   - **Código de ejemplo de la tarea:**
     ```javascript
     let ciudad = "Madrid";
     let pasatiempo = "leer";
     console.log("Vivo en " + ciudad + " y me gusta " + pasatiempo);
     ```

