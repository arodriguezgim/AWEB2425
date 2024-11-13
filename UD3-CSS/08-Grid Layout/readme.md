
## **Grid Layout**

El modelo **CSS Grid Layout** permite crear diseños de cuadrícula de dos dimensiones (filas y columnas) en CSS. A diferencia de Flexbox, que se orienta principalmente en una dimensión (filas o columnas), Grid facilita la creación de layouts complejos en ambas dimensiones.

### **1. Contenedor Grid (`display: grid`)**

Para comenzar a usar CSS Grid, el contenedor debe tener la propiedad `display: grid`. Esto convierte a los elementos hijos en **ítems de grid**.

```css
.contenedor {
  display: grid;
}
```

**Ejemplo HTML**:
```html
<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

---

### **2. Definir Columnas y Filas (`grid-template-columns` y `grid-template-rows`)**

Las propiedades **`grid-template-columns`** y **`grid-template-rows`** permiten definir el número y tamaño de columnas y filas. Cada valor representa el tamaño de una columna o fila en el contenedor.

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Tres columnas iguales */
  grid-template-rows: 100px 200px;    /* Dos filas de diferentes tamaños */
}
```

- **`fr`**: unidad para asignar proporciones de espacio en la cuadrícula. `1fr` significa que tomará una fracción del espacio disponible.
- **Ejemplo de valores**: `px`, `%`, `auto`, `minmax(min, max)`.

---

### **3. Controlar el Espaciado con `gap`**

La propiedad **`gap`** (antes llamada `grid-gap`) define el espacio entre filas y columnas. Se puede usar `column-gap` y `row-gap` para ajustar cada dimensión individualmente.

```css
.contenedor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
```

---

### **4. Colocación de Elementos Específicos (Inicio y Fin) (`grid-column` y `grid-row`)**

Se puede especificar en qué columna o fila debe iniciar y terminar cada elemento con las propiedades **`grid-column`** y **`grid-row`**:

- **`grid-column`**: define el inicio y el final de una celda en el eje de las columnas.
- **`grid-row`**: define el inicio y el final en el eje de las filas.

```css
.item1 {
  grid-column: 1 / 3; /* Ocupa desde la columna 1 hasta la 3 */
  grid-row: 1 / 2;    /* Ocupa solo la primera fila */
}
```

**Ejemplo Completo**:
```css
.item1 {
  grid-column: 1 / span 2; /* Ocupa 2 columnas desde la primera */
  grid-row: 1 / span 2;     /* Ocupa 2 filas desde la primera */
}
```

---

### **5. Simplificar el Diseño con `grid-template-areas`**

La propiedad **`grid-template-areas`** permite asignar nombres a áreas específicas del contenedor grid. Luego, se pueden posicionar elementos asignándoles un nombre en la cuadrícula.

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}
```

En este ejemplo, `header` ocupa toda la primera fila, `sidebar` y `content` ocupan la segunda fila, y `footer` ocupa toda la tercera fila.

---

### **6. Automatizar Columnas y Filas con `repeat()`**

La función **`repeat()`** permite crear filas o columnas repetidas en una cuadrícula. Es útil para evitar escribir el mismo valor varias veces.

```css
.contenedor {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Cuatro columnas iguales */
  grid-template-rows: repeat(3, 100px);  /* Tres filas de 100px cada una */
}
```

---

### **7. Función `minmax()` para Control Dinámico**

La función **`minmax(min, max)`** permite definir el tamaño mínimo y máximo de una columna o fila, adaptándose al espacio disponible.

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 1fr) 1fr; /* La columna central crece entre 200px y 1fr */
}
```

---

### **8. Distribución Automática con `auto-fill` y `auto-fit`**

- **`auto-fill`** llena las columnas o filas de la cuadrícula con tantos elementos como sea posible, ajustando el tamaño según el espacio disponible.
- **`auto-fit`** es similar a `auto-fill`, pero se ajusta para ocupar todo el espacio, incluso si hay celdas vacías.

```css
.contenedor {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

---

### **9. Alineación en Grid (`align-items`, `justify-items`, `align-content`, `justify-content`)**

Grid ofrece varias propiedades para alinear ítems y contenido:
- **`align-items`**: alinea los ítems en el eje vertical (por defecto, `stretch`).
- **`justify-items`**: alinea los ítems en el eje horizontal (por defecto, `stretch`).
- **`align-content`**: alinea el contenido total en el eje vertical.
- **`justify-content`**: alinea el contenido total en el eje horizontal.

**Ejemplo**:
```css
.contenedor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  justify-items: center;
  align-items: center;
}
```

---

### **10. Ejemplo Completo de Grid Layout**

**HTML**:
```html
<div class="grid-container">
  <div class="item header">Header</div>
  <div class="item sidebar">Sidebar</div>
  <div class="item main">Main Content</div>
  <div class="item footer">Footer</div>
</div>
```

**CSS**:
```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 10px;
  height: 100vh;
}

.header {
  grid-area: header;
  background-color: lightblue;
}

.sidebar {
  grid-area: sidebar;
  background-color: lightcoral;
}

.main {
  grid-area: main;
  background-color: lightgoldenrodyellow;
}

.footer {
  grid-area: footer;
  background-color: lightgreen;
}
```

Este diseño crea una disposición común de tres áreas (encabezado, barra lateral, contenido principal y pie de página) que es adaptable y visualmente atractiva gracias a CSS Grid.

---


## [**Ejercicios con Grid**](./Ejercicios/readme.md)
