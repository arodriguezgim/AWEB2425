## **5. Fondos y Bordes en CSS**

CSS nos ofrece una gran variedad de propiedades para controlar el diseño de **fondos** y **bordes** de los elementos en la página. Esto incluye propiedades para cambiar el color de fondo, imágenes, patrones, sombras, y para personalizar los bordes, incluyendo su tamaño, estilo, color y forma.

### **5.1. Fondos en CSS**

Las propiedades de fondo se aplican al área interna de un elemento y pueden incluir colores sólidos o imágenes de fondo.

#### **5.1.1. `background-color`**

Establece un color sólido de fondo para el elemento.

**Sintaxis**:
```css
elemento {
  background-color: color;
}
```

**Ejemplo**:
```css
div {
  background-color: lightblue;
}
```
Este código aplica un fondo color azul claro al elemento `div`.

#### **5.1.2. `background-image`**

Permite establecer una imagen como fondo de un elemento. La imagen se repite de forma predeterminada para llenar el área del elemento.

**Sintaxis**:
```css
elemento {
  background-image: url('ruta-de-la-imagen.jpg');
}
```

**Ejemplo**:
```css
body {
  background-image: url('fondo.jpg');
}
```
Esto coloca una imagen llamada `fondo.jpg` como fondo de la página.

#### **5.1.3. `background-repeat`**

Controla la repetición de la imagen de fondo. Puede ser útil para evitar que una imagen se repita o para crear patrones.

**Valores comunes**:
- `repeat` (por defecto): Repite la imagen en ambas direcciones.
- `repeat-x`: Repite la imagen solo horizontalmente.
- `repeat-y`: Repite la imagen solo verticalmente.
- `no-repeat`: No repite la imagen.

**Ejemplo**:
```css
div {
  background-image: url('patron.png');
  background-repeat: repeat-x;
}
```
Este código repetirá la imagen `patron.png` solo de forma horizontal en el fondo del `div`.

#### **5.1.4. `background-position`**

Establece la posición inicial de la imagen de fondo. 

**Valores comunes**:
- `left top`, `center`, `right bottom`, etc.: Coloca la imagen en posiciones específicas.
- Valores en píxeles o porcentaje: Ejemplo `50% 50%` coloca la imagen en el centro.

**Ejemplo**:
```css
div {
  background-image: url('logo.png');
  background-repeat: no-repeat;
  background-position: right top;
}
```
Este ejemplo coloca la imagen `logo.png` en la esquina superior derecha del `div`, sin repetirla.

#### **5.1.5. `background-size`**

Define el tamaño de la imagen de fondo. Es útil para ajustar la imagen de fondo para cubrir o contener un área específica.

**Valores comunes**:
- `cover`: Escala la imagen para cubrir todo el fondo, puede recortar la imagen.
- `contain`: Escala la imagen para que se ajuste dentro del fondo, sin recortar.
- Valores en píxeles o porcentaje: Ejemplo `100px 200px`.

**Ejemplo**:
```css
header {
  background-image: url('banner.jpg');
  background-size: cover;
}
```
Este código ajusta la imagen `banner.jpg` para cubrir todo el fondo del `header`.

#### **5.1.6. `background-attachment`**

Determina si la imagen de fondo se desplaza con el contenido o permanece fija.

**Valores comunes**:
- `scroll` (por defecto): La imagen se desplaza con el contenido.
- `fixed`: La imagen se queda fija mientras el contenido se desplaza.
- `local`: La imagen se desplaza solo dentro del elemento si tiene barra de desplazamiento.

**Ejemplo**:
```css
section {
  background-image: url('montaña.jpg');
  background-attachment: fixed;
}
```
Este código hace que la imagen `montaña.jpg` permanezca fija mientras se desplaza el contenido en el `section`.

---

### **5.2. Bordes en CSS**

Los bordes en CSS rodean los elementos y se pueden personalizar en cuanto a color, grosor, estilo y forma de las esquinas.

#### **5.2.1. `border`**

La propiedad `border` es una abreviatura que permite definir el ancho, estilo y color del borde en una sola línea.

**Sintaxis**:
```css
elemento {
  border: grosor estilo color;
}
```

**Ejemplo**:
```css
div {
  border: 2px solid black;
}
```
Este código aplica un borde de 2 píxeles, sólido y de color negro al elemento `div`.

#### **5.2.2. `border-width`**

Controla el grosor del borde en cada lado. También se pueden especificar valores individuales para cada lado (top, right, bottom, left).

**Ejemplo**:
```css
p {
  border-width: 5px 2px 5px 2px;
  border-style: solid;
}
```
Este código establece el grosor de 5px en la parte superior e inferior y 2px a los lados del párrafo `p`.

#### **5.2.3. `border-style`**

Define el estilo del borde. Algunos valores comunes son:
- `solid`: Borde sólido.
- `dashed`: Borde de líneas discontinuas.
- `dotted`: Borde de puntos.
- `double`: Borde doble.

**Ejemplo**:
```css
div {
  border-style: dashed;
}
```
Este código aplicará un borde de líneas discontinuas al `div`.

#### **5.2.4. `border-color`**

Especifica el color del borde. Se pueden asignar colores diferentes a cada lado si se desea.

**Ejemplo**:
```css
div {
  border-color: red green blue yellow;
}
```
Este código establece un borde de color rojo en la parte superior, verde a la derecha, azul en la parte inferior y amarillo a la izquierda.

#### **5.2.5. `border-radius`**

Controla el radio de las esquinas de un elemento, permitiendo hacer bordes redondeados.

**Sintaxis**:
```css
elemento {
  border-radius: valor;
}
```

**Ejemplo**:
```css
button {
  border-radius: 10px;
}
```
Este código aplica un borde redondeado de 10px al botón. Se puede crear un círculo perfecto si se usa un valor alto (por ejemplo, `50%`) en elementos cuadrados.

#### **5.2.6. Bordes en cada lado individual**

CSS permite aplicar bordes específicos a cada lado utilizando propiedades como `border-top`, `border-right`, `border-bottom`, y `border-left`.

**Ejemplo**:
```css
div {
  border-top: 3px solid red;
  border-right: 3px dashed blue;
  border-bottom: 3px dotted green;
  border-left: 3px double orange;
}
```
Este código aplica diferentes estilos de borde a cada lado del `div`.

---

### **5.3. Ejemplo completo integrando fondos y bordes**

A continuación, un ejemplo completo que ilustra el uso de múltiples propiedades de fondo y borde en un diseño de tarjeta:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de Fondos y Bordes</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="card">
    <h2>Bienvenido a CSS</h2>
    <p>Explora las propiedades de fondo y borde para crear diseños atractivos.</p>
  </div>
</body>
</html>
```

**CSS**:
```css
body {
  background-color: #f0f0f0;
}

.card {
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  background-image: url('pattern.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #333;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin: 50px auto;
  text-align: center;
}
.card h2 {
  margin-top: 0;
  color: #333;
}

.card p {
  color: #666;
}
```

**Descripción del ejemplo**:
- El `body` tiene un color de fondo gris claro.
- La `card` es una caja blanca con un patrón de fondo, bordes redondeados y una sombra para darle profundidad.
- Se usa `background-size: cover` para que el patrón de fondo llene toda la tarjeta.
- `border-radius` redondea las esquinas, y `box-shadow` agrega una sombra sutil.

