## **6. Posicionamiento y Display en CSS**

CSS ofrece una variedad de propiedades para organizar y manipular la disposición y el posicionamiento de los elementos en la página. Estas propiedades son fundamentales para crear diseños responsivos y visualmente atractivos.

---

### **6.1. Propiedad `display`**

La propiedad `display` especifica cómo se muestra un elemento en el flujo del documento. Los valores de `display` definen si el elemento se muestra como un bloque, en línea, como un contenedor flexible (flex) o como una cuadrícula (grid), entre otros.

#### **6.1.1. `display: block`**

Los elementos de bloque ocupan todo el ancho disponible y siempre empiezan en una nueva línea. Ejemplos de elementos de bloque son `<div>`, `<p>`, y `<h1>`.

**Ejemplo**:

```css
div {
  display: block;
}
```

Este código asegura que el `div` ocupe todo el ancho de su contenedor y se muestre en una nueva línea.

#### **6.1.2. `display: inline`**

Los elementos en línea solo ocupan el ancho necesario y no comienzan en una nueva línea. Ejemplos de elementos en línea son `<span>`, `<a>`, y `<strong>`.

**Ejemplo**:

```css
span {
  display: inline;
}
```

El `span` se mostrará en la misma línea que otros elementos vecinos y ocupará solo el ancho necesario.

#### **6.1.3. `display: inline-block`**

`inline-block` permite que el elemento se comporte como un elemento en línea (no empieza en una nueva línea) mientras que conserva propiedades de bloque, como `width` y `height`.

**Ejemplo**:

```css
button {
  display: inline-block;
  width: 100px;
  height: 40px;
}
```

Este código muestra el `button` como un elemento en línea, pero con dimensiones definidas.

#### **6.1.4. `display: flex`**

Con `display: flex`, los elementos hijos de un contenedor se alinean de manera flexible, lo que permite manipular su distribución, alineación y orden. Esto es útil para crear diseños responsivos y distribuciones complejas.

**Ejemplo básico de flex**:

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

Este ejemplo distribuye los elementos dentro de `.container` con espacios iguales entre ellos.

#### **6.1.5. `display: grid`**

La propiedad `display: grid` permite organizar elementos en filas y columnas, formando una cuadrícula. Se utiliza para diseños complejos de varios elementos alineados tanto en filas como en columnas.

**Ejemplo básico de grid**:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
}
```

Este código crea una cuadrícula en `.container` con dos columnas, donde la primera ocupa una fracción (`1fr`) y la segunda el doble (`2fr`).

#### **6.1.6. Otros valores de `display`**

- **`none`**: Oculta el elemento por completo, quitándolo del flujo del documento.
- **`table`, `table-row`, `table-cell`**: Estilos de visualización que permiten crear estructuras similares a las de una tabla.

**Ejemplo de `display: none`**:

```css
.elemento-oculto {
  display: none;
}
```

El código oculta el elemento con clase `.elemento-oculto` sin afectar el diseño de los elementos adyacentes.

---

### **6.2. Propiedad `position`**

La propiedad `position` permite especificar cómo y dónde debe colocarse un elemento en la página. Los valores de `position` también afectan el contexto de apilamiento de los elementos.

#### **6.2.1. `position: static`**

Es el valor predeterminado. Los elementos se posicionan según el flujo normal del documento, y las propiedades de posición (`top`, `right`, `bottom`, `left`) no tienen efecto.

**Ejemplo**:

```css
div {
  position: static;
}
```

#### **6.2.2. `position: relative`**

Con `relative`, el elemento se posiciona en relación con su posición original en el flujo del documento. Esto permite moverlo mediante las propiedades `top`, `right`, `bottom`, y `left`.

**Ejemplo**:

```css
div {
  position: relative;
  top: 10px;
  left: 20px;
}
```

Este código mueve el `div` 10 píxeles hacia abajo y 20 píxeles hacia la derecha, respecto a su posición original.

#### **6.2.3. `position: absolute`**

Un elemento con `position: absolute` se posiciona en relación con el primer elemento ancestro que tenga una posición distinta a `static`. Si no hay un ancestro posicionado, se coloca en relación con el viewport.

**Ejemplo**:

```css
.box {
  position: absolute;
  top: 0;
  right: 0;
}
```

Este código coloca `.box` en la esquina superior derecha de su contenedor posicionado.

#### **6.2.4. `position: fixed`**

Con `fixed`, el elemento se posiciona en relación con el viewport, lo que significa que permanece en su lugar aunque la página se desplace.

**Ejemplo**:

```css
.fixed-banner {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
}
```

Este código crea un banner en la parte inferior de la página que permanece fijo mientras se desplaza el contenido.

#### **6.2.5. `position: sticky`**

`sticky` mezcla las propiedades de `relative` y `fixed`: el elemento actúa de manera relativa hasta que alcanza una posición específica dentro del viewport, momento en el que se convierte en fijo.

**Ejemplo**:

```css
.menu {
  position: sticky;
  top: 0;
}
```

Este código hace que el menú se quede en la parte superior del viewport cuando se llega a él mientras se desplaza.

---

### **6.3. Propiedad `z-index`**

`z-index` controla el apilamiento de los elementos en el eje z (es decir, qué elementos aparecen delante o detrás de otros). Solo afecta a los elementos posicionados (`relative`, `absolute`, `fixed`, o `sticky`).

**Ejemplo**:

```css
.elemento1 {
  position: absolute;
  z-index: 10;
}

.elemento2 {
  position: absolute;
  z-index: 5;
}
```

En este ejemplo, `.elemento1` aparecerá delante de `.elemento2` porque su `z-index` es mayor.

---

### **6.4. Ejemplo completo combinando `display` y `position`**

Aquí tienes un ejemplo que muestra cómo combinar `display` y `position` para crear una tarjeta informativa con elementos posicionados de forma flexible y con una disposición de estilo de tarjeta.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo de Posicionamiento y Display</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="tarjeta">
      <img class="tarjeta-imagen" src="perfil.jpg" alt="Foto de perfil" />
      <div class="tarjeta-texto">
        <h2>Nombre de Usuario</h2>
        <p>
          Descripción breve del usuario. Este es un ejemplo de cómo posicionar
          elementos y manipular su display en CSS.
        </p>
      </div>
    </div>
  </body>
</html>
```

**CSS**:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f3f3;
  margin: 0;
}

.tarjeta {
  display: flex;
  position: relative;
  width: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.tarjeta-imagen {
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: absolute;
  top: -20px;
  left: -20px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  z-index: 1;
}

.tarjeta-texto {
  padding: 20px;
  padding-left: 130px;
}

.tarjeta-texto h2 {
  margin: 0;
  font-size: 1.5em;
  color: #333;
}

.tarjeta-texto p {
  color: #666;
}
```

**Explicación del ejemplo**:

- La `tarjeta` es un contenedor `flex` con un ancho

fijo y una sombra.

- La imagen de perfil está posicionada con `position: absolute` para solaparse con el contenedor, y tiene un `z-index` para aparecer delante.
- El `display: flex` y `justify-content` del cuerpo centran la tarjeta en la pantalla.
