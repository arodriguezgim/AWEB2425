## **Capítulo 5: Arrays (3h)**

### **Objetivo:**
Entender qué son los arrays, cómo se usan y manipulan en JavaScript, y aplicar métodos comunes para realizar operaciones en ellos.

---

### **5.1 ¿Qué es un array?**
- Un array es una estructura de datos que permite almacenar varios valores en una sola variable.
- Los elementos de un array se identifican por su **índice**, que comienza en 0.

#### **Ejemplo:**
```javascript
let frutas = ["manzana", "plátano", "naranja"];
console.log(frutas[0]); // Salida: manzana
console.log(frutas[2]); // Salida: naranja
```

---

### **5.2 Declaración de arrays**

#### **Maneras de declarar un array:**
1. **Usando corchetes `[]`:**
   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   ```

2. **Usando el constructor `Array`:**
   ```javascript
   let colores = new Array("rojo", "verde", "azul");
   ```

3. **Array vacío:**
   ```javascript
   let vacio = [];
   ```
<!--
#### **Verificar el tipo de un array:**
- En JavaScript, los arrays son técnicamente objetos.
- Para comprobar si una variable es un array:
  ```javascript
  let esArray = Array.isArray(numeros);
  console.log(esArray); // Salida: true
  ```
-->
---

### **5.3 Acceso y modificación de elementos**

#### **Acceder a un elemento:**
- Utiliza su índice:
  ```javascript
  let frutas = ["manzana", "plátano", "naranja"];
  console.log(frutas[1]); // Salida: plátano
  ```

#### **Modificar un elemento:**
- Cambia el valor en un índice específico:
  ```javascript
  frutas[1] = "pera";
  console.log(frutas); // Salida: ["manzana", "pera", "naranja"]
  ```

#### **Agregar un elemento:**
- Añadir al final usando el índice:
  ```javascript
  frutas[3] = "uva";
  console.log(frutas); // Salida: ["manzana", "pera", "naranja", "uva"]
  ```

---

### **5.4 Métodos básicos de arrays**

#### **Añadir elementos**
1. **`push()`:** Añade al final del array.
   ```javascript
   frutas.push("mango");
   console.log(frutas); // ["manzana", "pera", "naranja", "mango"]
   ```

2. **`unshift()`:** Añade al principio.
   ```javascript
   frutas.unshift("limón");
   console.log(frutas); // ["limón", "manzana", "pera", "naranja"]
   ```

#### **Eliminar elementos**
1. **`pop()`:** Elimina el último elemento.
   ```javascript
   frutas.pop();
   console.log(frutas); // ["manzana", "pera"]
   ```

2. **`shift()`:** Elimina el primer elemento.
   ```javascript
   frutas.shift();
   console.log(frutas); // ["pera", "naranja"]
   ```

#### **Longitud del array**
- **`length`:** Devuelve el número de elementos.
  ```javascript
  console.log(frutas.length); // Salida: 3
  ```

---

### **5.5 Iterar sobre arrays**

#### **Usando bucles:**
1. **`for` clásico:**
   ```javascript
   for (let i = 0; i < frutas.length; i++) {
     console.log(frutas[i]);
   }
   ```
<!--
2. **`for...of`:**
   ```javascript
   for (let fruta of frutas) {
     console.log(fruta);
   }
   ```

3. **`forEach`:**
   ```javascript
   frutas.forEach(function(fruta) {
     console.log(fruta);
   });
   ```
-->
---

### **5.6 Métodos avanzados de arrays**
<!--
#### **Búsqueda**
1. **`indexOf()`:** Encuentra la primera aparición de un valor.
   ```javascript
   console.log(frutas.indexOf("pera")); // Salida: 1
   ```

2. **`includes()`:** Comprueba si un valor está en el array.
   ```javascript
   console.log(frutas.includes("uva")); // Salida: false
   ```
-->
#### **Manipulación**
1. **`slice()`:** Devuelve una copia parcial del array.
   ```javascript
   let copia = frutas.slice(0, 2);
   console.log(copia); // ["manzana", "pera"]
   ```

2. **`splice()`:** Añade o elimina elementos.
   ```javascript
   frutas.splice(1, 1, "mango");
   console.log(frutas); // ["manzana", "mango", "naranja"]
   ```

#### **Ordenar**
1. **`reverse()`:** Invierte el array.
   ```javascript
   frutas.reverse();
   console.log(frutas); // ["naranja", "mango", "manzana"]
   ```

2. **`sort()`:** Ordena alfabéticamente.
   ```javascript
   frutas.sort();
   console.log(frutas); // ["mango", "manzana", "naranja"]
   ```

---
<!--
### **5.7 Ejemplos Combinados**

1. **Invertir un array:**
   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   console.log(numeros.reverse()); // [5, 4, 3, 2, 1]
   ```

2. **Eliminar duplicados:**
   ```javascript
   let numeros = [1, 2, 2, 3, 4, 4];
   let unicos = [...new Set(numeros)];
   console.log(unicos); // [1, 2, 3, 4]
   ```

3. **Contar palabras:**
   ```javascript
   let frase = "Hola mundo Hola JavaScript";
   let palabras = frase.split(" ");
   let mapa = {};
   palabras.forEach(palabra => {
     mapa[palabra] = (mapa[palabra] || 0) + 1;
   });
   console.log(mapa); // {Hola: 2, mundo: 1, JavaScript: 1}
   ```
-->
---



