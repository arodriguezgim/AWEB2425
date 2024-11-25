### **Capítulo 7: Manipulación del DOM (3h)**

La manipulación del **DOM (Document Object Model)** permite a los desarrolladores interactuar con la estructura de una página web usando JavaScript. Este capítulo introduce conceptos esenciales como seleccionar elementos, modificar su contenido, y responder a eventos.

---

### **Objetivo**
Comprender cómo interactuar con elementos HTML mediante JavaScript, modificando contenido, estilos y estructuras dinámicamente.

---

### **7.1 ¿Qué es el DOM?**

- **Definición:**  
  El DOM es una representación en árbol de todos los elementos en una página web. Permite a JavaScript acceder y manipular los elementos y estructuras HTML.

- **Relación entre HTML y el DOM:**  
  Cada etiqueta HTML se representa como un nodo en el DOM.

#### **Ejemplo básico del DOM:**
HTML:  
```html
<!DOCTYPE html>
<html>
  <head><title>Ejemplo DOM</title></head>
  <body>
    <h1>Hola Mundo</h1>
    <p>Este es un párrafo</p>
  </body>
</html>
```

DOM en JavaScript:  
```javascript
document.body // Representa el <body> de la página
```

---

### **7.2 Selección de elementos del DOM**

#### **1. Métodos básicos de selección:**
- `document.getElementById("id")`: Selecciona un elemento por su `id`.
- `document.getElementsByClassName("class")`: Selecciona todos los elementos con una clase específica.
- `document.getElementsByTagName("tag")`: Selecciona todos los elementos con un nombre de etiqueta.
- `document.querySelector("selector")`: Selecciona el primer elemento que coincida con un selector CSS.
- `document.querySelectorAll("selector")`: Selecciona todos los elementos que coincidan con un selector CSS.

#### **Ejemplo:**
HTML:  
```html
<div id="miDiv" class="clase1">¡Hola!</div>
<p class="clase1">Párrafo 1</p>
<p class="clase1">Párrafo 2</p>
```

JavaScript:  
```javascript
let div = document.getElementById("miDiv");
let parrafos = document.getElementsByClassName("clase1");
let primerParrafo = document.querySelector(".clase1");
let todosParrafos = document.querySelectorAll(".clase1");
```

---

### **7.3 Modificar elementos**

#### **1. Cambiar contenido de texto:**
- `element.textContent`: Modifica el texto de un elemento.
- `element.innerHTML`: Modifica el contenido HTML de un elemento.

#### **Ejemplo:**
```javascript
let div = document.getElementById("miDiv");
div.textContent = "¡Nuevo contenido!";
div.innerHTML = "<strong>Contenido con HTML</strong>";
```

#### **2. Cambiar atributos:**
- `element.setAttribute("atributo", "valor")`: Cambia el valor de un atributo.
- `element.getAttribute("atributo")`: Obtiene el valor de un atributo.

#### **Ejemplo:**
```javascript
let enlace = document.querySelector("a");
enlace.setAttribute("href", "https://google.com");
```

#### **3. Cambiar estilos:**
- `element.style.propiedad`: Cambia una propiedad CSS directamente.

#### **Ejemplo:**
```javascript
let parrafo = document.querySelector("p");
parrafo.style.color = "red";
parrafo.style.fontSize = "20px";
```

---

### **7.4 Crear y eliminar elementos**

#### **1. Crear elementos:**
- `document.createElement("etiqueta")`: Crea un nuevo elemento HTML.
- `element.appendChild(nuevoElemento)`: Añade un elemento como hijo.

#### **Ejemplo:**
```javascript
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo nuevo";
document.body.appendChild(nuevoParrafo);
```

#### **2. Eliminar elementos:**
- `element.remove()`: Elimina un elemento del DOM.
- `element.removeChild(hijo)`: Elimina un elemento hijo.

#### **Ejemplo:**
```javascript
let parrafo = document.querySelector("p");
parrafo.remove();
```

---

### **7.5 Eventos**

Los eventos permiten responder a interacciones del usuario, como clics, movimientos del ratón o teclados.

#### **1. Escuchar eventos:**
- `element.addEventListener("evento", función)`: Vincula un evento con una función.

#### **Ejemplo:**
```javascript
let boton = document.querySelector("button");
boton.addEventListener("click", function () {
  alert("¡Hiciste clic!");
});
```

#### **2. Tipos de eventos comunes:**
- `click`: Cuando se hace clic en un elemento.
- `mouseover`: Cuando el ratón pasa sobre un elemento.
- `keyup`: Cuando se suelta una tecla.
- `submit`: Cuando se envía un formulario.

---

### **7.6 Ejemplos avanzados**

#### **1. Contador de clics:**
HTML:  
```html
<button id="contador">Haz clic</button>
<p id="resultado">Clics: 0</p>
```

JavaScript:  
```javascript
let contador = 0;
let boton = document.getElementById("contador");
let resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  contador++;
  resultado.textContent = `Clics: ${contador}`;
});
```

#### **2. Cambiar tema con un botón:**
HTML:  
```html
<button id="tema">Cambiar tema</button>
<div id="contenido">¡Hola, mundo!</div>
```

JavaScript:  
```javascript
let boton = document.getElementById("tema");
let contenido = document.getElementById("contenido");

boton.addEventListener("click", function () {
  if (contenido.style.backgroundColor === "black") {
    contenido.style.backgroundColor = "white";
    contenido.style.color = "black";
  } else {
    contenido.style.backgroundColor = "black";
    contenido.style.color = "white";
  }
});
```

---

### **Resumen del capítulo:**
1. Introducción al DOM como representación de la página web.
2. Métodos para seleccionar elementos.
3. Modificar contenido, estilos y atributos.
4. Crear y eliminar elementos dinámicamente.
5. Vincular eventos para interactuar con el usuario.

