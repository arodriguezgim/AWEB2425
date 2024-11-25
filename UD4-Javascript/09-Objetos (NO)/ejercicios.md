### **Ejercicios Básicos (1-5)**

1. **Crear y acceder a un objeto**  
   Crea un objeto llamado `persona` con las propiedades `nombre`, `edad` y `esEstudiante`. Muestra cada una de las propiedades en la consola.  
   **Ejemplo:**  
   ```javascript
   let persona = {
     nombre: "María",
     edad: 22,
     esEstudiante: true
   };
   console.log(persona.nombre); // "María"
   ```

2. **Modificar propiedades**  
   Crea un objeto `coche` con las propiedades `marca`, `modelo` y `año`. Cambia el valor de `año` por 2023 y añade una nueva propiedad `color`. Muestra el objeto completo.  

3. **Eliminar una propiedad**  
   Crea un objeto llamado `libro` con las propiedades `titulo`, `autor` y `paginas`. Elimina la propiedad `paginas` y muestra el objeto resultante.

4. **Añadir métodos a un objeto**  
   Crea un objeto `calculadora` con un método `sumar` que reciba dos números como parámetros y devuelva su suma.  
   **Ejemplo:**  
   ```javascript
   let calculadora = {
     sumar: function (a, b) {
       return a + b;
     }
   };
   console.log(calculadora.sumar(3, 4)); // 7
   ```

5. **Iterar sobre propiedades con `for...in`**  
   Crea un objeto `producto` con las propiedades `nombre`, `precio` y `stock`. Usa un bucle `for...in` para mostrar cada propiedad y su valor en la consola.  
   **Ejemplo:**  
   ```javascript
   let producto = {
     nombre: "Laptop",
     precio: 1200,
     stock: 10
   };
   for (let clave in producto) {
     console.log(`${clave}: ${producto[clave]}`);
   }
   ```

---

### **Ejercicios Intermedios (6-8)**

6. **Contar propiedades de un objeto**  
   Crea un objeto `pais` con varias propiedades como `nombre`, `poblacion`, y `continente`. Escribe una función que reciba el objeto y devuelva el número de propiedades que tiene.  
   **Ejemplo:**  
   ```javascript
   let pais = {
     nombre: "España",
     poblacion: 47000000,
     continente: "Europa"
   };
   function contarPropiedades(obj) {
     return Object.keys(obj).length;
   }
   console.log(contarPropiedades(pais)); // 3
   ```

7. **Copiar un objeto sin modificar el original**  
   Crea un objeto `usuario` con propiedades como `nombre` y `edad`. Haz una copia del objeto usando `Object.assign()` y modifica la copia sin afectar al original.  

8. **Fusionar objetos**  
   Crea dos objetos `estudiante1` y `estudiante2`, cada uno con propiedades únicas. Combínalos en un solo objeto usando el operador `...` (spread).  
   **Ejemplo:**  
   ```javascript
   let estudiante1 = { nombre: "Luis", curso: "Matemáticas" };
   let estudiante2 = { edad: 20, activo: true };
   let estudianteCompleto = { ...estudiante1, ...estudiante2 };
   console.log(estudianteCompleto);
   ```

---

### **Ejercicios Avanzados (9-10)**

9. **Convertir un array en un objeto**  
   Escribe una función que reciba un array de nombres y devuelva un objeto donde cada nombre sea una clave y su valor sea la longitud del nombre.  
   **Ejemplo:**  
   ```javascript
   let nombres = ["Ana", "Luis", "Carmen"];
   function arrayAObjeto(arr) {
     let objeto = {};
     arr.forEach(nombre => {
       objeto[nombre] = nombre.length;
     });
     return objeto;
   }
   console.log(arrayAObjeto(nombres)); // { Ana: 3, Luis: 4, Carmen: 6 }
   ```

10. **Filtrar propiedades**  
    Crea un objeto `empleado` con varias propiedades como `nombre`, `edad`, `cargo`, y `salario`. Escribe una función que reciba este objeto y devuelva un nuevo objeto solo con las propiedades `nombre` y `cargo`.  
    **Ejemplo:**  
    ```javascript
    let empleado = {
      nombre: "Pedro",
      edad: 35,
      cargo: "Ingeniero",
      salario: 50000
    };
    function filtrarPropiedades(obj) {
      let { nombre, cargo } = obj;
      return { nombre, cargo };
    }
    console.log(filtrarPropiedades(empleado)); // { nombre: "Pedro", cargo: "Ingeniero" }
    ```

---
