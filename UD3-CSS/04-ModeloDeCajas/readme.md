
---

## **4. Modelo de Cajas**

El **modelo de cajas** en CSS describe cómo se distribuye el espacio alrededor de los elementos HTML. Cada elemento de una página web se representa como una "caja" rectangular. Entender cómo funciona esta caja es esencial para controlar el diseño y el espaciado de los elementos en la página.

### **4.1. Estructura del Modelo de Cajas**

Cada elemento en una página web tiene las siguientes partes en el modelo de cajas:

1. **Contenido**: Es el área donde se muestra el contenido del elemento (texto, imágenes, etc.).
2. **Padding (Relleno)**: Es el espacio entre el contenido y el borde del elemento. El `padding` añade espacio dentro del borde, alrededor del contenido.
3. **Borde (Border)**: Es el contorno que rodea tanto el contenido como el `padding`.
4. **Margin (Margen)**: Es el espacio fuera del borde. El `margin` añade espacio entre el borde del elemento y los elementos circundantes.

![Modelo de cajas](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)

En resumen, el tamaño total de una caja se calcula sumando el **contenido**, el **padding**, el **borde** y el **margen**.

### **4.2. Propiedades del Modelo de Cajas**

Vamos a explorar cada una de estas propiedades:

#### **4.2.1. `width` y `height` (Ancho y alto)**

Las propiedades `width` y `height` controlan el tamaño del área de contenido del elemento. No incluyen el `padding`, el `border`, ni el `margin`. 

#### **Ejemplo**:
```css
div {
  width: 200px;
  height: 100px;
}
```
En este ejemplo, el ancho del contenido del `div` será de 200 píxeles y su altura de 100 píxeles.

#### **4.2.2. `padding` (Relleno)**

La propiedad `padding` define el espacio entre el contenido y el borde del elemento. Puede aplicarse de manera individual para cada lado o de forma global para todos los lados a la vez.

##### **Ejemplos**:

1. **Padding global**:
   ```css
   div {
     padding: 20px; /* Aplica 20px de relleno a todos los lados */
   }
   ```

2. **Padding individual**:
   ```css
   div {
     padding-top: 10px;
     padding-right: 20px;
     padding-bottom: 30px;
     padding-left: 40px;
   }
   ```

3. **Padding abreviado**:
   ```css
   div {
     padding: 10px 20px 30px 40px; /* Arriba, derecha, abajo, izquierda */
   }
   ```

#### **4.2.3. `border` (Borde)**

La propiedad `border` define el borde alrededor del elemento. Se puede personalizar el grosor, estilo y color del borde.

##### **Ejemplo**:
```css
div {
  border: 2px solid black; /* Borde negro de 2px de grosor */
}
```

Puedes personalizar cada parte del borde por separado:

- **`border-width`**: Define el grosor del borde.
- **`border-style`**: Define el estilo del borde (solid, dotted, dashed, etc.).
- **`border-color`**: Define el color del borde.

##### **Ejemplo**:
```css
div {
  border-top: 4px dashed red;
  border-right: 2px solid blue;
  border-bottom: 1px dotted green;
  border-left: 3px double black;
}
```

#### **4.2.4. `margin` (Margen)**

La propiedad `margin` define el espacio fuera del borde del elemento, separándolo de otros elementos. Igual que el `padding`, puede aplicarse de manera global o específica para cada lado.

##### **Ejemplos**:

1. **Margen global**:
   ```css
   div {
     margin: 20px; /* Aplica 20px de margen a todos los lados */
   }
   ```

2. **Margen individual**:
   ```css
   div {
     margin-top: 10px;
     margin-right: 20px;
     margin-bottom: 30px;
     margin-left: 40px;
   }
   ```

3. **Margen abreviado**:
   ```css
   div {
     margin: 10px 20px 30px 40px; /* Arriba, derecha, abajo, izquierda */
   }
   ```

#### **4.2.5. `box-sizing`**

La propiedad `box-sizing` cambia cómo se calcula el tamaño total de la caja (ancho y alto) de un elemento. Existen dos valores principales:

- **`content-box`** (por defecto): El `width` y `height` solo se aplican al contenido del elemento. El `padding` y el `border` se añaden al tamaño total.
- **`border-box`**: El `width` y `height` incluyen el `padding` y el `border`, por lo que no aumentan el tamaño total del elemento.

##### **Ejemplo**:

```css
div {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box; /* El tamaño total del elemento será de 200px de ancho y 100px de alto */
}
```
Con `box-sizing: border-box;`, el ancho y la altura incluyen el `padding` y el `border`, evitando que el tamaño total del elemento sea mayor de lo que se especificó.

### **4.3. Ejemplo práctico del modelo de cajas**

#### HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo del modelo de cajas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="box">Caja 1</div>
  <div class="box">Caja 2</div>
</body>
</html>
```

#### CSS:
```css
/* Aplicamos un diseño con el modelo de cajas */
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  background-color: lightblue;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: space-around;
}
```

En este ejemplo:

- Cada `div` con la clase `box` tiene un ancho de 200px y un alto de 100px.
- Tiene un `padding` de 20px, un `border` de 5px, y un `margin` de 10px.
- El valor `box-sizing: border-box;` asegura que el `padding` y el `border` están incluidos en el tamaño total del ancho y alto.

### **4.4. Consideraciones importantes**

#### **4.4.1. Colapso de márgenes**

En algunos casos, los márgenes de los elementos contiguos pueden colapsar, es decir, el margen más grande se utiliza en lugar de sumar ambos márgenes. Esto ocurre normalmente entre elementos en bloque (por ejemplo, dos párrafos `<p>` uno debajo del otro).

#### **4.4.2. `auto` en márgenes**

El valor `auto` para los márgenes puede utilizarse para centrar elementos horizontalmente cuando se define un ancho fijo.

##### **Ejemplo**:
```css
div {
  width: 300px;
  margin: 0 auto; /* Centra el div horizontalmente */
}
```

---

### **Resumen**

El modelo de cajas es un concepto central en CSS que define cómo se comportan y se distribuyen los elementos en una página web. Conocer cómo manejar el contenido, el `padding`, los `margins` y el `border`, y cómo ajustar el tamaño total de la caja con `box-sizing`, es esencial para crear diseños web efectivos y atractivos.

---

## [Ejemplos en casos de uso reales](./ejemplos.md)