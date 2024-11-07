### **Capítulo 2: Variables, tipos de datos y operadores básicos (2h)**

**Objetivo:** Aprender a declarar y usar variables, comprender los tipos de datos principales en JavaScript, y practicar con operadores básicos.

#### 2.1 Declaración de variables
   - **Explicación:** En JavaScript, las variables son contenedores que almacenan datos que podemos usar y modificar.
   - **Tipos de declaración de variables:** Introducción a `let`, `const`, y `var`.
     - **`let`**: permite declarar variables cuyo valor puede cambiar.
     - **`const`**: permite declarar constantes, es decir, variables cuyo valor no cambia.
     - **`var`**: es otra forma de declarar variables, pero actualmente es menos recomendable que `let` y `const`.
   - **Ejemplo básico:**
     ```javascript
     let nombre = "Ana";
     const edad = 25;
     var ciudad = "Madrid";
     console.log(nombre);  // Salida: Ana
     console.log(edad);    // Salida: 25
     console.log(ciudad);  // Salida: Madrid
     ```

#### 2.2 Tipos de datos en JavaScript
   - **Explicación:** JavaScript tiene diferentes tipos de datos que representan información de manera distinta.
   - **Tipos de datos básicos:**
     - **Strings** (cadenas de texto): representan texto entre comillas.
       - **Ejemplo:**
         ```javascript
         let saludo = "Hola, ¿cómo estás?";
         console.log(saludo);  // Salida: Hola, ¿cómo estás?
         ```
     - **Números** (numbers): representan valores numéricos, tanto enteros como decimales.
       - **Ejemplo:**
         ```javascript
         let temperatura = 22.5;
         console.log(temperatura);  // Salida: 22.5
         ```
     - **Booleanos** (booleans): representan valores de verdadero (`true`) o falso (`false`).
       - **Ejemplo:**
         ```javascript
         let mayorDeEdad = true;
         console.log(mayorDeEdad);  // Salida: true
         ```

   - **Ejercicio práctico:** Declara variables para tu nombre, edad y si eres mayor de edad. Muestra cada variable en la consola.

#### 2.3 Operadores básicos
   - **Operadores aritméticos:**
     - **Suma (`+`)**: suma dos valores.
     - **Resta (`-`)**: resta dos valores.
     - **Multiplicación (`*`)**: multiplica dos valores.
     - **División (`/`)**: divide dos valores.
     - **Módulo (`%`)**: obtiene el resto de la división.
     - **Ejemplo de uso:**
       ```javascript
       let a = 10;
       let b = 3;
       console.log(a + b);   // Salida: 13
       console.log(a - b);   // Salida: 7
       console.log(a * b);   // Salida: 30
       console.log(a / b);   // Salida: 3.3333333333333335
       console.log(a % b);   // Salida: 1
       ```

   - **Operadores de concatenación:**
     - La concatenación de cadenas permite unir varios textos en una sola variable usando el operador `+`.
     - **Ejemplo:**
       ```javascript
       let nombre = "Carlos";
       let saludo = "Hola, " + nombre + "!";
       console.log(saludo);  // Salida: Hola, Carlos!
       ```

#### 2.4 Operadores de comparación
   - **Explicación:** Los operadores de comparación devuelven `true` o `false` según la relación entre los valores.
   - **Principales operadores de comparación:**
     - `==` : igual a (compara valores sin importar el tipo).
     - `===` : estrictamente igual a (compara valores y tipo).
     - `!=` : no igual a.
     - `!==` : estrictamente no igual a.
     - `<`, `>`, `<=`, `>=` : menor, mayor, menor o igual, mayor o igual.
   - **Ejemplo práctico:**
     ```javascript
     let x = 5;
     let y = "5";
     console.log(x == y);    // Salida: true (compara solo el valor)
     console.log(x === y);   // Salida: false (compara valor y tipo)
     ```

#### 2.5 Ejercicio de práctica guiada
   - **Ejercicio:** Declara dos variables `num1` y `num2` con valores numéricos.
     - Realiza operaciones de suma, resta, multiplicación y división entre ellas.
     - Usa operadores de comparación para verificar si `num1` es mayor que `num2`.
   - **Código de ejemplo:**
     ```javascript
     let num1 = 10;
     let num2 = 7;
     console.log(num1 + num2);   // Suma
     console.log(num1 - num2);   // Resta
     console.log(num1 * num2);   // Multiplicación
     console.log(num1 / num2);   // División
     console.log(num1 > num2);   // Comparación
     ```

#### 2.6 Ejercicio final: Operaciones y mensajes personalizados
   - **Ejercicio:** Declara variables para almacenar un nombre, edad, ciudad y ocupación.
     - Usa concatenación para crear un mensaje como: "Hola, soy [nombre], tengo [edad] años, vivo en [ciudad] y soy [ocupación]".
   - **Código de ejemplo:**
     ```javascript
     let nombre = "Laura";
     let edad = 30;
     let ciudad = "Valencia";
     let ocupacion = "diseñadora";
     console.log("Hola, soy " + nombre + ", tengo " + edad + " años, vivo en " + ciudad + " y soy " + ocupacion);
     ```
