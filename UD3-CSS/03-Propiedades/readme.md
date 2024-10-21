
---

## **3. Propiedades de Texto**

Las propiedades de texto en CSS permiten controlar cómo se muestra el texto en un documento web, incluyendo la tipografía, el color, el espaciado, la alineación y más. Estas propiedades son fundamentales para mejorar la legibilidad y el diseño de una página web.

### **3.1. `color`**
La propiedad `color` se utiliza para definir el color del texto. Puede especificarse usando nombres de colores, valores en hexadecimal, RGB, RGBA, HSL o HSLA.

#### **Ejemplos**:
```css
p {
  color: red; /* Usando un nombre de color */
}

h1 {
  color: #3498db; /* Usando un valor hexadecimal */
}

span {
  color: rgb(52, 152, 219); /* Usando un valor RGB */
}

strong {
  color: rgba(52, 152, 219, 0.8); /* Usando un valor RGBA (con opacidad) */
}
```

### **3.2. `font-family`**
La propiedad `font-family` se utiliza para definir la fuente (tipografía) que se aplicará al texto. Se pueden especificar varias fuentes como opciones, separadas por comas, para que el navegador elija la primera disponible en el sistema del usuario.

#### **Ejemplos**:
```css
body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-family: 'Georgia', serif;
}
```
En este ejemplo, si el navegador no puede encontrar la primera fuente (`Arial`), usará la siguiente disponible (`Helvetica`), y como último recurso, una fuente genérica `sans-serif`.

### **3.3. `font-size`**
La propiedad `font-size` se utiliza para definir el tamaño del texto. Se puede especificar en varias unidades como píxeles (`px`), em, rem, porcentaje (`%`), entre otras.

#### **Ejemplos**:
```css
p {
  font-size: 16px; /* Tamaño en píxeles */
}

h1 {
  font-size: 2em; /* Tamaño relativo al elemento padre */
}

h2 {
  font-size: 150%; /* Tamaño en porcentaje */
}
```
- **px**: Tamaño absoluto, recomendable para precisión.
- **em**: Relativo al tamaño de fuente del elemento padre.
- **rem**: Relativo al tamaño de fuente del elemento raíz (`<html>`).

### **3.4. `font-weight`**
La propiedad `font-weight` controla el grosor del texto. Los valores comunes son:
- `normal` (valor por defecto).
- `bold` (negrita).
- También se puede usar valores numéricos de 100 a 900 para mayor control.

#### **Ejemplos**:
```css
p {
  font-weight: normal; /* Texto normal */
}

strong {
  font-weight: bold; /* Texto en negrita */
}

h1 {
  font-weight: 700; /* Equivalente a 'bold' */
}

h2 {
  font-weight: 300; /* Texto más ligero */
}
```

### **3.5. `font-style`**
La propiedad `font-style` se utiliza para aplicar estilos al texto, como cursiva o normal.

Valores comunes:
- `normal`: Texto sin formato.
- `italic`: Texto en cursiva.
- `oblique`: Texto inclinado, similar a `italic` pero con una inclinación más pronunciada.

#### **Ejemplos**:
```css
p {
  font-style: normal; /* Texto normal */
}

em {
  font-style: italic; /* Texto en cursiva */
}
```

### **3.6. `text-align`**
La propiedad `text-align` se utiliza para alinear el texto dentro de su contenedor.

Valores más comunes:
- `left`: Alineación a la izquierda (valor por defecto en la mayoría de los textos).
- `right`: Alineación a la derecha.
- `center`: Alineación centrada.
- `justify`: Justifica el texto (distribuye el texto equitativamente en el ancho del contenedor).

#### **Ejemplos**:
```css
p {
  text-align: justify; /* Justificación del texto */
}

h1 {
  text-align: center; /* Título centrado */
}
```

### **3.7. `text-decoration`**
La propiedad `text-decoration` controla la decoración del texto, como subrayado, tachado o el estilo por defecto de los enlaces.

Valores comunes:
- `none`: Sin decoración.
- `underline`: Subraya el texto.
- `line-through`: Tachado.
- `overline`: Línea por encima del texto.

#### **Ejemplos**:
```css
a {
  text-decoration: none; /* Quitar subrayado de los enlaces */
}

p.important {
  text-decoration: underline; /* Subrayar el texto */
}

del {
  text-decoration: line-through; /* Texto tachado */
}
```

### **3.8. `text-transform`**
La propiedad `text-transform` permite controlar la capitalización de las letras.

Valores comunes:
- `uppercase`: Convierte todo el texto en mayúsculas.
- `lowercase`: Convierte todo el texto en minúsculas.
- `capitalize`: Convierte la primera letra de cada palabra en mayúscula.

#### **Ejemplos**:
```css
p {
  text-transform: capitalize; /* Capitalizar la primera letra de cada palabra */
}

h1 {
  text-transform: uppercase; /* Convertir todo el texto en mayúsculas */
}
```

### **3.9. `letter-spacing`**
La propiedad `letter-spacing` se utiliza para controlar el espacio entre las letras de un texto.

#### **Ejemplo**:
```css
p {
  letter-spacing: 2px; /* Aumenta el espacio entre las letras */
}

h1 {
  letter-spacing: -1px; /* Disminuye el espacio entre las letras */
}
```

### **3.10. `line-height`**
La propiedad `line-height` establece la altura de la línea (espaciado vertical entre líneas de texto). Puede ser un número, un porcentaje o una unidad relativa.

#### **Ejemplos**:
```css
p {
  line-height: 1.5; /* Altura de línea igual a 1.5 veces el tamaño de la fuente */
}

h1 {
  line-height: 120%; /* Altura de línea igual al 120% del tamaño de la fuente */
}
```

### **3.11. `text-indent`**
La propiedad `text-indent` define la cantidad de espacio de sangría que se aplicará a la primera línea de un bloque de texto.

#### **Ejemplo**:
```css
p {
  text-indent: 50px; /* Sangría de 50px en la primera línea */
}
```

### **3.12. `white-space`**
La propiedad `white-space` controla cómo se maneja el espacio en blanco dentro del texto.

Valores comunes:
- `normal`: El comportamiento por defecto (el espacio en blanco se colapsa).
- `nowrap`: El texto no se ajusta a la siguiente línea.
- `pre`: Se conserva el espacio en blanco tal como se escribe (como en un elemento `<pre>`).
- `pre-wrap`: Se conserva el espacio en blanco y el texto se ajusta a la siguiente línea si es necesario.

#### **Ejemplos**:
```css
p {
  white-space: nowrap; /* Evitar el salto de línea */
}

pre {
  white-space: pre; /* Conservar el espacio en blanco tal como está */
}
```

### **3.13. `word-spacing`**
La propiedad `word-spacing` controla el espacio entre las palabras.

#### **Ejemplo**:
```css
p {
  word-spacing: 5px; /* Aumenta el espacio entre palabras */
}
```

---

### **Resumen**

Las propiedades de texto en CSS permiten un control detallado sobre la presentación y el comportamiento del texto. Estas propiedades son esenciales para mejorar la legibilidad y la estética de una página web. Los desarrolladores pueden combinar estas propiedades para crear estilos de texto atractivos y funcionales.

---
