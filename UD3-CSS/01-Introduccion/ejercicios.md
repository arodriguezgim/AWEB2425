### **Ejercicio 1: Incluir CSS en HTML**
Crea una página web sencilla con un archivo CSS externo, un estilo en línea y un estilo embebido en el documento.

1. **Instrucciones**:
   - Crea una página HTML con tres párrafos.
   - El primer párrafo debe tener el color azul, utilizando **estilos en línea**.
   - El segundo párrafo debe tener un tamaño de fuente de 20px, utilizando **estilos en el `<head>` del documento**.
   - El tercer párrafo debe tener un fondo amarillo, utilizando **un archivo CSS externo**.

2. **Pistas**:
   - Para incluir el CSS en el `<head>`, utiliza la etiqueta `<style>`.
   - Para incluir el archivo CSS externo, usa la etiqueta `<link>` en el `<head>` del documento HTML.

---

### **Ejercicio 2: Selectores de tipo, clase e id**
Este ejercicio les ayudará a practicar el uso de selectores de elementos, clases e identificadores.

1. **Instrucciones**:
   - Crea una página HTML con:
     - Un encabezado `<h1>`.
     - Tres párrafos.
     - Una lista no ordenada con tres elementos.
   - Aplica los siguientes estilos:
     - El encabezado `<h1>` debe tener un color de texto rojo (utilizando un selector de tipo).
     - El primer y el tercer párrafo deben tener un color de texto azul (utilizando un selector de clase).
     - El segundo párrafo debe tener un tamaño de fuente de 18px (utilizando un selector de id).
     - Los elementos de la lista deben tener un color de fondo gris (utilizando un selector de tipo).

2. **Pistas**:
   - Usa el atributo `class` para seleccionar más de un elemento.
   - Usa el atributo `id` para seleccionar un elemento único.

---

### **Ejercicio 3: Práctica con propiedades básicas**
Los alumnos pondrán en práctica propiedades básicas como el color, el fondo y el tamaño de fuente.

1. **Instrucciones**:
   - Crea una página HTML con los siguientes elementos:
     - Un título `<h2>` que diga "Mi Blog".
     - Dos párrafos con texto ficticio (puedes usar Lorem Ipsum).
   - Aplica los siguientes estilos usando un archivo CSS externo:
     - El fondo de la página debe ser de color gris claro.
     - El título debe tener un color de texto verde y estar alineado al centro.
     - Los párrafos deben tener un color de texto negro y un tamaño de fuente de 16px.
     - Los enlaces dentro de los párrafos (si los hay) deben tener un color de texto azul y cambiar a rojo cuando se pasen con el ratón.

2. **Pistas**:
   - Usa `background-color` para aplicar el color de fondo.
   - Usa `color` y `text-align` para modificar el estilo del título y los párrafos.
   - Usa la pseudoclase `:hover` para cambiar el color de los enlaces al pasar el ratón sobre ellos.

---

### **Ejercicio 4: Usar múltiples maneras de agregar CSS**
En este ejercicio, se espera que los alumnos apliquen estilos utilizando los tres métodos de CSS: en línea, embebido y externo.

1. **Instrucciones**:
   - Crea una página HTML con:
     - Un encabezado `<h3>`.
     - Un párrafo con una cita.
     - Una imagen (puede ser cualquiera de Internet).
   - Aplica los siguientes estilos:
     - El encabezado debe tener un color azul y un fondo amarillo **usando estilos en línea**.
     - El párrafo debe tener un tamaño de fuente de 14px y un color de texto gris **usando estilos en el `<head>` del documento**.
     - La imagen debe tener un borde negro de 2px y un ancho del 100% de la pantalla **usando un archivo CSS externo**.

2. **Pistas**:
   - Usa la propiedad `width` para ajustar el tamaño de la imagen.
   - Usa `border` para darle un borde a la imagen.

---

### **Ejercicio 5: Selectores combinadores**
Este ejercicio les ayudará a trabajar con selectores descendientes y hermanos.

1. **Instrucciones**:
   - Crea una página HTML con:
     - Un `div` que contenga tres párrafos.
     - Fuera del `div`, agrega otro párrafo.
   - Aplica los siguientes estilos:
     - Todos los párrafos dentro del `div` deben tener un color de texto azul (selector descendiente).
     - El primer párrafo dentro del `div` debe tener un fondo amarillo (selector de primer hijo).
     - El párrafo fuera del `div` debe tener un color de texto rojo.

2. **Pistas**:
   - Usa el selector descendiente (`div p`) para seleccionar los párrafos dentro del `div`.
   - Usa el selector `:first-child` para aplicar un estilo especial al primer párrafo dentro del `div`.

---

### **Ejercicio 6: Exploración libre con el inspector de elementos**
Este ejercicio es más exploratorio, permitiendo que los alumnos interactúen directamente con la web.

1. **Instrucciones**:
   - Abre cualquier página web que prefieran (puede ser una popular como Wikipedia o Google).
   - Utiliza el **inspector de elementos** del navegador (botón derecho, "Inspeccionar") para:
     - Identificar los diferentes selectores que están siendo usados (clase, id, tipo).
     - Cambiar el color de fondo de un elemento.
     - Cambiar el tamaño de fuente de un texto.
     - Hacer que un enlace cambie de color cuando se pasa el ratón sobre él (pseudoclase `:hover`).

2. **Pistas**:
   - En el inspector, puedes ver el código CSS de cualquier elemento en la sección "Estilos".
   - Intenta modificar directamente el CSS en el inspector y ver los cambios en tiempo real.

---
