### **Capítulo 6: Objetos (3h)**

Los objetos son fundamentales en JavaScript. Este capítulo se centra en enseñar a comprender y manipular objetos, que son colecciones de datos y funcionalidades relacionados. 

---

### **Objetivo**  
Entender qué son los objetos en JavaScript, cómo crearlos, acceder a sus propiedades y métodos, y usarlos para organizar datos más complejos.

---

### **6.1 Introducción a los objetos**
Un objeto es una colección de pares clave-valor. Las claves (también llamadas propiedades) son cadenas, y los valores pueden ser de cualquier tipo (números, cadenas, arrays, funciones, etc.).

#### **Sintaxis básica:**
```javascript
let objeto = {
  clave1: valor1,
  clave2: valor2
};
```

#### **Ejemplo:**
```javascript
let persona = {
  nombre: "Juan",
  edad: 25,
  esEstudiante: true
};
console.log(persona.nombre); // Salida: "Juan"
```

---

### **6.2 Crear objetos**

#### **1. Usando la sintaxis literal:**
La forma más común y sencilla.  
```javascript
let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020
};
```

#### **2. Usando el constructor `Object`:**
Menos común, pero útil en ciertos casos.  
```javascript
let libro = new Object();
libro.titulo = "1984";
libro.autor = "George Orwell";
```

#### **3. Usando funciones constructoras (introducción):**
Se crean como "plantillas" para múltiples objetos.  
```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
let juan = new Persona("Juan", 30);
console.log(juan.nombre); // Salida: "Juan"
```

---

### **6.3 Acceso a propiedades**

#### **1. Usando la notación de punto:**
```javascript
console.log(persona.nombre); // "Juan"
```

#### **2. Usando la notación de corchetes:**
Útil si la clave contiene caracteres especiales o se calcula dinámicamente.  
```javascript
console.log(persona["edad"]); // 25
```

---

### **6.4 Modificación de objetos**

#### **Añadir nuevas propiedades:**
```javascript
persona.apellido = "Pérez";
console.log(persona.apellido); // "Pérez"
```

#### **Modificar valores existentes:**
```javascript
persona.edad = 26;
console.log(persona.edad); // 26
```

#### **Eliminar propiedades:**
```javascript
delete persona.esEstudiante;
console.log(persona.esEstudiante); // undefined
```

---

### **6.5 Métodos en objetos**
Un método es simplemente una función definida dentro de un objeto.  

#### **Ejemplo:**
```javascript
let calculadora = {
  sumar: function (a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b;
  }
};
console.log(calculadora.sumar(5, 3)); // Salida: 8
console.log(calculadora.restar(5, 3)); // Salida: 2
```

---

### **6.6 Iterar sobre objetos**

#### **1. Usando `for...in`:**
Recorre todas las claves de un objeto.  
```javascript
for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}
```

#### **2. Usando `Object.keys()`:**
Devuelve un array con las claves del objeto.  
```javascript
console.log(Object.keys(persona)); // ["nombre", "edad"]
```

#### **3. Usando `Object.values()`:**
Devuelve un array con los valores del objeto.  
```javascript
console.log(Object.values(persona)); // ["Juan", 25]
```

#### **4. Usando `Object.entries()`:**
Devuelve un array de pares clave-valor.  
```javascript
console.log(Object.entries(persona)); // [["nombre", "Juan"], ["edad", 25]]
```

---

### **6.7 Copiar objetos**

#### **1. Asignación directa (superficial):**
```javascript
let copia = persona;
copia.nombre = "Pedro";
console.log(persona.nombre); // "Pedro"
```

#### **2. Copia independiente con `Object.assign()`:**
```javascript
let copia = Object.assign({}, persona);
copia.nombre = "Pedro";
console.log(persona.nombre); // "Juan"
```

#### **3. Copia profunda (con objetos anidados):**
```javascript
let copiaProfunda = JSON.parse(JSON.stringify(personaCompleja));
```

---

### **6.8 Objetos dentro de objetos**

Los valores de un objeto pueden ser otros objetos.  

#### **Ejemplo:**
```javascript
let empresa = {
  nombre: "TechCorp",
  empleados: {
    jefe: "Ana",
    asistentes: ["Luis", "Carla"]
  }
};
console.log(empresa.empleados.jefe); // "Ana"
```

---

### **6.9 Prácticas comunes con objetos**

#### **Fusionar objetos:**
```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let fusionado = { ...obj1, ...obj2 };
console.log(fusionado); // { a: 1, b: 3, c: 4 }
```

#### **Convertir un objeto en JSON:**
```javascript
let json = JSON.stringify(persona);
console.log(json); // '{"nombre":"Juan","edad":25}'
```

#### **Convertir JSON en un objeto:**
```javascript
let objeto = JSON.parse(json);
console.log(objeto); // { nombre: "Juan", edad: 25 }
```

---

### **Ejemplos avanzados**

1. **Contar palabras en un texto:**
   ```javascript
   let texto = "hola mundo hola";
   let palabras = texto.split(" ");
   let contador = {};
   palabras.forEach(palabra => {
     contador[palabra] = (contador[palabra] || 0) + 1;
   });
   console.log(contador); // { hola: 2, mundo: 1 }
   ```

2. **Agrupar elementos por una propiedad:**
   ```javascript
   let personas = [
     { nombre: "Ana", edad: 20 },
     { nombre: "Luis", edad: 20 },
     { nombre: "Carlos", edad: 30 }
   ];
   let agrupados = personas.reduce((grupo, persona) => {
     grupo[persona.edad] = grupo[persona.edad] || [];
     grupo[persona.edad].push(persona.nombre);
     return grupo;
   }, {});
   console.log(agrupados); // { 20: ["Ana", "Luis"], 30: ["Carlos"] }
   ```

---

### **Resumen:**
1. Crear y manipular objetos con sintaxis literal.
2. Acceder y modificar propiedades.
3. Agregar métodos.
4. Iterar sobre objetos.
5. Copiar y combinar objetos.

