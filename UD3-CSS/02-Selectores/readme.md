
# **2. Selectores básicos y combinadores en CSS**

CSS tiene una amplia gama de **selectores** que nos permiten aplicar estilos a diferentes elementos en un documento HTML. Estos selectores pueden ser simples, como seleccionar por etiquetas, clases o IDs, o pueden ser más complejos, como los **combinadores**, que permiten seleccionar elementos basados en su relación con otros elementos.

### **2.1. Selectores básicos**

Los **selectores básicos** en CSS son fundamentales para la personalización de los elementos. Se utilizan para aplicar estilos directamente a elementos HTML basándose en sus etiquetas, clases, IDs o atributos. Aquí te presento los principales selectores básicos con ejemplos.

#### **2.1.1. Selector de etiqueta o tipo (elemento)**

Selecciona todos los elementos de un tipo específico (como `p`, `div`, `h1`, etc.). Este es el selector más básico en CSS.

**Sintaxis**:
```css
elemento {
  propiedad: valor;
}
```

**Ejemplo**:
```css
p {
  color: blue;
}
```
Este código aplicará el color azul a todos los párrafos (`<p>`) del documento.

#### **2.1.2. Selector de clase**

Selecciona elementos que tienen una clase específica. Las clases se definen en el HTML con el atributo `class`. A diferencia de los IDs, varios elementos pueden compartir la misma clase, lo que permite aplicar un estilo común.

**Sintaxis**:
```css
.nombre-clase {
  propiedad: valor;
}
```

**Ejemplo**:
```css
.card {
  border: 1px solid black;
  padding: 20px;
}
```
Este código aplica un borde y un relleno a todos los elementos que tienen la clase `card`.

#### **2.1.3. Selector de ID**

Selecciona un elemento por su atributo `id`. A diferencia de las clases, los IDs son únicos y solo deben usarse una vez por página para un elemento específico.

**Sintaxis**:
```css
#id-elemento {
  propiedad: valor;
}
```

**Ejemplo**:
```css
#header {
  background-color: lightgray;
  padding: 10px;
}
```
Este código aplica un fondo gris claro y un `padding` al elemento con el ID `header`.

#### **2.1.4. Selector universal**

Selecciona todos los elementos del documento, sin importar el tipo de etiqueta o las clases. Es útil para aplicar estilos generales como márgenes, padding o la tipografía básica a todo el contenido.

**Sintaxis**:
```css
* {
  propiedad: valor;
}
```

**Ejemplo**:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
Este código elimina los márgenes y rellenos por defecto de todos los elementos y establece el `box-sizing` para todo el documento.

#### **2.1.5. Selector de atributo**

Este selector aplica estilos a los elementos HTML que contienen un atributo específico. Se puede utilizar solo con la presencia de un atributo, o con valores específicos.

**Sintaxis**:
```css
[elemento-atributo] {
  propiedad: valor;
}
```

**Ejemplo básico**:
```css
input[type="text"] {
  border: 2px solid green;
}
```
Este código aplica un borde verde a todos los elementos `input` de tipo `text`.

**Ejemplo avanzado**:
```css
a[target="_blank"] {
  color: red;
}
```
Este código cambia el color a rojo de todos los enlaces (`<a>`) que tienen `target="_blank"`.

### **2.2. Combinadores en CSS**

Los **combinadores** en CSS permiten seleccionar elementos basados en su relación con otros elementos. Esto es muy útil cuando queremos aplicar estilos solo en situaciones específicas en relación con la estructura del HTML.

#### **2.2.1. Combinador descendiente (espacio)**

Este combinador selecciona todos los elementos descendientes de un elemento especificado. Un "descendiente" puede ser un hijo directo o un hijo más profundo dentro de la jerarquía del documento.

**Sintaxis**:
```css
elemento1 elemento2 {
  propiedad: valor;
}
```

**Ejemplo**:
```css
div p {
  color: green;
}
```
Este código aplicará el color verde a todos los párrafos (`<p>`) que están dentro de un `div`, sin importar qué tan profundamente estén anidados.

#### **2.2.2. Combinador hijo (`>`)**

El combinador hijo selecciona solo los elementos que son hijos directos de otro elemento. Esto es útil para aplicar estilos solo a elementos que son hijos inmediatos.

**Sintaxis**:
```css
elemento1 > elemento2 {
  propiedad: valor;
}
```

**Ejemplo**:
```css
ul > li {
  list-style-type: none;
}
```
Este código elimina los puntos de lista (`list-style-type`) de todos los elementos `li` que son hijos directos de una lista `ul`.

#### **2.2.3. Combinador adyacente (`+`)**

El combinador adyacente selecciona el primer elemento que sigue inmediatamente después de otro elemento (hermano directo en el mismo nivel).

**Sintaxis**:
```css
elemento1 + elemento2 {
  propiedad: valor;
}
```

**Ejemplo**:
```css
h1 + p {
  font-size: 18px;
}
```
Este código aplica un tamaño de fuente de 18px a cualquier párrafo (`<p>`) que aparezca inmediatamente después de un encabezado `h1`.

#### **2.2.4. Combinador general de hermanos (`~`)**

Este combinador selecciona todos los elementos hermanos que siguen a un elemento especificado, sin importar si son adyacentes inmediatos o no.

**Sintaxis**:
```css
elemento1 ~ elemento2 {
  propiedad: valor;
}
```

**Ejemplo**:
```css
h2 ~ p {
  color: blue;
}
```
Este código cambia el color de todos los párrafos (`<p>`) que siguen a un encabezado `h2`, sin importar si son adyacentes o no.

### **2.3. Ejemplos prácticos de combinadores y selectores**

A continuación, algunos ejemplos que integran los conceptos de selectores y combinadores:

#### **Ejemplo 1: Lista de elementos con combinadores**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de ejemplos</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="menu">
    <h1>Menú principal</h1>
    <ul>
      <li>Inicio</li>
      <li>Sobre nosotros</li>
      <li>Contacto</li>
    </ul>
  </div>
  <div class="content">
    <h2>Título de contenido</h2>
    <p>Este es un párrafo justo después del título.</p>
    <p>Otro párrafo más abajo.</p>
  </div>
</body>
</html>
```

**CSS**:
```css
/* Selecciona todos los elementos <li> dentro de <ul> */
ul li {
  font-size: 18px;
}

/* Cambia el color solo del primer párrafo después del h2 */
h2 + p {
  font-weight: bold;
  color: darkblue;
}

/* Cambia el color de todos los párrafos después de h2 */
h2 ~ p {
  color: gray;
}

/* Elimina los puntos de las listas que son hijos directos de un <ul> */
ul > li {
  list-style: none;
}
```

#### **Ejemplo 2: Selectores y combinadores en formularios**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario de ejemplo</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <form>
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email">
    
    <button type="submit">Enviar</button>
  </form>
</body>
</html>
```

**CSS**:
```css
/* Selecciona todos los inputs de tipo texto */
input[type="text"] {
  border: 1px solid blue;
}

/* Selecciona todos los elementos después del <label> */
label + input {
  margin-left: 10px;
}

/* Selecciona todos los inputs de tipo email */
input[type="email"] {
  border: 1px solid green;
}

/* Selecciona el botón de envío */
button {
  background-color: orange;
  padding: 10px 20px;
  border: none;
  color: white;
  cursor

```

### **2.4 - Pseudoclases en CSS**

Una pseudoclase es una palabra clave que se añade a los selectores para especificar un estado especial de los elementos seleccionados. Se utilizan para aplicar estilos a un elemento no solo en función de su nombre o clases, sino también en función de su **estado** o **posición** dentro del documento.

#### **1. `:hover`**
La pseudoclase `:hover` se utiliza para aplicar estilos a un elemento cuando el usuario pasa el puntero del ratón sobre él.

- **Ejemplo de uso**:
   ```css
   a:hover {
      color: red;
   }
   ```
   En este ejemplo, cualquier enlace (`<a>`) cambiará su color a rojo cuando el usuario pase el ratón sobre él.

#### **2. `:focus`**
La pseudoclase `:focus` selecciona un elemento cuando tiene el foco, es decir, cuando se está interactuando con él (generalmente a través del teclado o de la interfaz del navegador).

- **Ejemplo de uso**:
   ```css
   input:focus {
      outline: 2px solid blue;
   }
   ```
   En este caso, cuando un campo de entrada (`<input>`) recibe el foco, se le aplica un contorno azul.

#### **3. `:active`**
La pseudoclase `:active` se activa cuando un elemento está siendo "presionado" por el usuario, como cuando se hace clic en un enlace o un botón, pero antes de que se libere el clic.

- **Ejemplo de uso**:
   ```css
   button:active {
      background-color: green;
   }
   ```
   Aquí, el botón cambiará a un fondo verde mientras está siendo clicado.

#### **4. `:nth-child()`**
Esta pseudoclase selecciona un elemento que es el n-ésimo hijo de su padre. Se puede usar con varios valores como `odd` (impares), `even` (pares), o números específicos.

- **Ejemplo de uso**:
   ```css
   li:nth-child(odd) {
      background-color: lightgray;
   }
   ```
   En este caso, todas las etiquetas `<li>` impares dentro de una lista tendrán un fondo gris claro.

- **Más ejemplos**:
   ```css
   li:nth-child(3) {
      color: blue;
   }
   ```
   Este estilo se aplicará solo al tercer elemento hijo `<li>`.

#### **5. `:nth-of-type()`**
A diferencia de `:nth-child()`, que cuenta todos los tipos de elementos hijos, `:nth-of-type()` se aplica solo a elementos específicos dentro de su tipo.

- **Ejemplo de uso**:
   ```css
   p:nth-of-type(2) {
      font-size: 20px;
   }
   ```
   En este ejemplo, el segundo párrafo (`<p>`) de su contenedor recibirá un tamaño de fuente mayor.

#### **6. `:first-child` y `:last-child`**
- **`:first-child`** selecciona el primer hijo de un elemento padre.
   - **Ejemplo**:
     ```css
     p:first-child {
        font-weight: bold;
     }
     ```
     Este estilo hará que el primer párrafo de un contenedor sea negrita.

- **`:last-child`** selecciona el último hijo de un elemento padre.
   - **Ejemplo**:
     ```css
     li:last-child {
        color: red;
     }
     ```
     El último elemento de una lista (`<li>`) se mostrará en rojo.

#### **7. `:nth-last-child()`**
Funciona igual que `:nth-child()`, pero empieza a contar desde el último hijo hacia atrás.

- **Ejemplo de uso**:
   ```css
   div:nth-last-child(2) {
      background-color: yellow;
   }
   ```
   Esto aplicará el fondo amarillo al penúltimo hijo de cualquier contenedor `<div>`.

#### **8. `:first-of-type` y `:last-of-type`**
- **`:first-of-type`** selecciona el primer elemento de un tipo dentro de su contenedor.
   - **Ejemplo**:
     ```css
     h2:first-of-type {
        color: blue;
     }
     ```
     Aquí, el primer título `<h2>` de cada contenedor tendrá color azul.

- **`:last-of-type`** selecciona el último elemento de un tipo dentro de su contenedor.
   - **Ejemplo**:
     ```css
     p:last-of-type {
        margin-bottom: 20px;
     }
     ```
     Esto agregará un margen inferior solo al último párrafo dentro de cada contenedor.

#### **9. `:not()`**
La pseudoclase `:not()` selecciona todos los elementos que no coinciden con el selector especificado dentro de los paréntesis.

- **Ejemplo de uso**:
   ```css
   p:not(.important) {
      color: gray;
   }
   ```
   Esto hará que todos los párrafos que **no** tengan la clase `.important` tengan el color gris.

#### **10. `:checked`**
Esta pseudoclase se aplica a los elementos que están seleccionados o marcados, como casillas de verificación (`checkbox`) o botones de radio (`radio`).

- **Ejemplo de uso**:
   ```css
   input:checked + label {
      color: green;
   }
   ```
   Si un input de tipo `checkbox` o `radio` está marcado, su etiqueta adyacente (`label`) se mostrará en color verde.

---

### **Uso Combinado de Pseudoclases**
Se pueden combinar varias pseudoclases para aplicar estilos en situaciones más específicas.

- **Ejemplo**:
   ```css
   a:hover:focus {
      text-decoration: underline;
      color: orange;
   }
   ```
   Este estilo solo se aplicará a los enlaces cuando estén tanto en estado `hover` como en estado `focus`, es decir, cuando se esté interactuando con ellos mediante el ratón o el teclado.

---

### **Resumen**
Las pseudoclases son una herramienta poderosa en CSS que permiten aplicar estilos de manera dinámica y reactiva, dependiendo de los estados de los elementos (como el enfoque o el clic), la posición en el árbol del documento o las interacciones del usuario.
