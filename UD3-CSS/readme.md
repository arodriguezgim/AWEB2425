# UD 3 - CSS

Este es el resumen de lo que vamos a tratar en nuestras clases:

### 1. [**Introducción a CSS**](01-Introduccion/readme.md)

- **¿Qué es CSS?**: Explicación básica de qué es CSS y cómo se relaciona con HTML (separación de contenido y presentación).
- **Sintaxis básica**: Selectores, propiedades y valores.
- **Cómo incluir CSS**:
  - En línea (`style=""` dentro del HTML)
  - En el encabezado de la página (`<style>`)
  - Uso de archivos externos (`<link rel="stylesheet">`).

**Ejemplo**:

```html
<style>
  p {
    color: blue;
    font-size: 16px;
  }
</style>
```

### 2. [**Selectores básicos y combinadores**](02-Selectores/readme.md)

- **Selectores elementales**: `p`, `h1`, `div`.
- **Selectores de clase e id**: `.clase`, `#id`.
- **Selectores combinadores**:
  - Descendiente (`div p`)
  - Hijo (`div > p`)
  - Hermano adyacente (`h1 + p`).
- **Pseudo-clases**: `:hover`, `:focus`, `:nth-child()`.

**Ejemplo**:

```css
.button:hover {
  background-color: red;
}
```

### 3. [**Propiedades de Texto**](03-PropiedadesCSS/readme.md)

- **Color** (`color`)
- **Tipografía**:
  - `font-family`
  - `font-size`
  - `font-weight`
  - `font-style`
  - `text-align`
- **Decoraciones y transformaciones de texto**:
  - `text-decoration`
  - `text-transform`

**Ejemplo**:

```css
h1 {
  text-align: center;
  font-family: "Arial", sans-serif;
}
```

[**Ejercicios de la unidad**](./03-PropiedadesCSS/ejecicios1.md)

### 4. [**Modelo de Caja (Box Model)**](./04-ModeloDeCajas/readme.md)

- **Concepto del modelo de caja**: Margen, borde, relleno, contenido.
- **Propiedades clave**:
  - `width`, `height`
  - `padding`, `margin`
  - `border`
- **Box-sizing**: `box-sizing: border-box;`

**Ejemplo**:

```css
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
```

[**Ejercicios de la unidad**](./04-ModeloDeCajas/ejercicios.md)

### 5. [**Fondos y Bordes**](./05-FondosyBordes/readme.md)

- **Fondos**:
  - `background-color`
  - `background-image`
  - `background-position`, `background-size`
- **Bordes**:
  - `border-radius`
  - `border-style`, `border-width`, `border-color`

**Ejemplo**:

```css
.circle {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  border-radius: 50%;
}
```

[**Ejercicios de la unidad**](./05-FondosyBordes/ejercicios.md)

### 6. [**Posicionamiento y Display**](./06-PosicionamientoYDisplay/readme.md)

- **Tipos de display**: `block`, `inline`, `inline-block`, `none`.
- **Propiedades de posicionamiento**:
  - `position`: `static`, `relative`, `absolute`, `fixed`, `sticky`.
  - Uso de `top`, `left`, `bottom`, `right`.
- **Flotado y limpieza**: `float`, `clear`.

**Ejemplo**:

```css
.container {
  position: relative;
}

.element {
  position: absolute;
  top: 50px;
  left: 20px;
}
```

[**Ejercicios de la unidad**](./06-PosicionamientoYDisplay/ejercicios.md)

### 7. **Flexbox**

- **Concepto de Flexbox**: Contenedor flexible y elementos flexibles.
- **Propiedades clave del contenedor**:
  - `display: flex`
  - `flex-direction`, `flex-wrap`
  - `justify-content`, `align-items`, `align-content`
- **Propiedades de los elementos flexibles**:
  - `flex-grow`, `flex-shrink`, `flex-basis`
  - `align-self`

**Ejemplo**:

```css
.flex-container {
  display: flex;
  justify-content: space-between;
}

.flex-item {
  flex-grow: 1;
  padding: 10px;
}
```

### 8. **Grid Layout**

- **Concepto de CSS Grid**: Creación de cuadrículas en 2 dimensiones.
- **Propiedades del contenedor**:
  - `display: grid`
  - `grid-template-columns`, `grid-template-rows`
  - `grid-gap`
- **Posicionamiento de los elementos**:
  - `grid-column`, `grid-row`

**Ejemplo**:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
}

.grid-item {
  background-color: lightgray;
}
```

### 9. **Medios y Queries Responsivos**

- **Medias queries**: Hacer que la web sea adaptable.
- Sintaxis básica de media queries: `@media`.
- Ajustes de diseño para diferentes tamaños de pantalla.

**Ejemplo**:

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

### 10. **Animaciones y Transiciones**

- **Transiciones**: `transition-property`, `transition-duration`, `transition-timing-function`.
- **Animaciones**: `@keyframes`, `animation-name`, `animation-duration`.

**Ejemplo**:

```css
.box {
  transition: background-color 0.5s ease;
}

.box:hover {
  background-color: yellow;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.slider {
  animation: slide 2s infinite;
}
```
