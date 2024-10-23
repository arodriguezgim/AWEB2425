A continuación te proporciono varios ejemplos prácticos adicionales que puedes usar para acompañar el **Punto 4: Modelo de Cajas** en CSS. Los ejemplos cubrirán situaciones comunes para practicar los conceptos de **padding**, **margen**, **border**, y **box-sizing**, así como el uso del **colapso de márgenes** y **centrado horizontal**.

---

### **Ejemplo 1: Efecto de `padding` en el tamaño de la caja**

#### HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Padding y tamaño de la caja</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="box">Caja con Padding</div>
</body>
</html>
```

#### CSS:
```css
/* Caja básica con padding */
.box {
  width: 200px;
  height: 100px;
  padding: 20px; /* Espacio adicional alrededor del contenido */
  background-color: lightcoral;
  border: 2px solid black;
}
```

**Descripción**:  
Este ejemplo muestra cómo el `padding` añade espacio alrededor del contenido del elemento sin afectar su tamaño (200x100 px en el área de contenido). El `padding` de 20px aumenta el espacio alrededor del contenido, pero el tamaño del borde sigue siendo el mismo.

---

### **Ejemplo 2: Efecto de `box-sizing` en el cálculo de tamaño**

#### HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box Sizing</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="box-content-box">Caja con `content-box`</div>
  <div class="box-border-box">Caja con `border-box`</div>
</body>
</html>
```

#### CSS:
```css
/* Caja con box-sizing por defecto: content-box */
.box-content-box {
  width: 200px;
  height: 100px;
  padding: 20px;
  background-color: lightblue;
  border: 5px solid black;
  box-sizing: content-box; /* Por defecto */
  margin-bottom: 20px;
}

/* Caja con box-sizing: border-box */
.box-border-box {
  width: 200px;
  height: 100px;
  padding: 20px;
  background-color: lightgreen;
  border: 5px solid black;
  box-sizing: border-box;
}
```

**Descripción**:  
- La primera caja tiene `box-sizing: content-box` (por defecto), lo que significa que el `padding` y el `border` se suman al ancho y alto especificado. Esto hace que el tamaño total de la caja sea mayor (ancho = 200px + 40px de `padding` + 10px de `border` = 250px).
- La segunda caja tiene `box-sizing: border-box`, lo que incluye el `padding` y el `border` dentro del ancho y alto especificado. El tamaño total de la caja sigue siendo de 200x100 px, sin importar el `padding` o el `border`.

---

### **Ejemplo 3: Colapso de márgenes**

#### HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colapso de márgenes</title>
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
/* Estilos para las cajas */
.box {
  width: 200px;
  height: 100px;
  margin: 30px 0; /* Márgenes arriba y abajo */
  background-color: lightcoral;
  border: 2px solid black;
}
```

**Descripción**:  
Este ejemplo muestra el **colapso de márgenes**. Ambos elementos `.box` tienen un `margin` de 30px en la parte superior e inferior. Sin embargo, entre ellos, solo se aplicará el margen más grande en lugar de sumarse. Por tanto, el espacio entre las dos cajas será de 30px, en lugar de 60px.

---

### **Ejemplo 4: Margen automático para centrar un elemento**

#### HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Centrado con margen auto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="centered-box">Caja centrada</div>
</body>
</html>
```

#### CSS:
```css
/* Caja centrada con margen auto */
.centered-box {
  width: 300px;
  height: 150px;
  margin: 0 auto; /* Centra la caja horizontalmente */
  background-color: lightblue;
  border: 2px solid black;
}
```

**Descripción**:  
Este ejemplo utiliza `margin: 0 auto;` para centrar la caja horizontalmente dentro de su contenedor. El `auto` ajusta automáticamente los márgenes izquierdo y derecho para equilibrar el espacio y centrar el elemento.

---

### **Ejemplo 5: Uso de `overflow` con el Modelo de Cajas**

#### HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Overflow en el Modelo de Cajas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="overflow-box">Este texto es muy largo y sobrepasa el tamaño de la caja.</div>
</body>
</html>
```

#### CSS:
```css
/* Caja con overflow oculto */
.overflow-box {
  width: 200px;
  height: 100px;
  padding: 10px;
  background-color: lightgreen;
  border: 2px solid black;
  overflow: hidden; /* El contenido desbordante será ocultado */
}
```

**Descripción**:  
En este ejemplo, la propiedad `overflow: hidden;` oculta cualquier contenido que desborde el área de la caja. Si el texto es más largo de lo que cabe en la caja de 200x100 px, el contenido desbordante no será visible. Esta propiedad es útil para controlar el comportamiento de los elementos cuando su contenido supera el tamaño de la caja.

---

### **Ejemplo 6: `display: inline-block` y el Modelo de Cajas**

#### HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inline-block en el Modelo de Cajas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="box inline-block">Caja 1</div>
  <div class="box inline-block">Caja 2</div>
  <div class="box inline-block">Caja 3</div>
</body>
</html>
```

#### CSS:
```css
/* Cajas con display inline-block */
.box {
  width: 100px;
  height: 100px;
  background-color: lightcoral;
  border: 2px solid black;
  padding: 10px;
  margin: 10px;
}

.inline-block {
  display: inline-block; /* Hace que las cajas se alineen en línea */
}
```

**Descripción**:  
Este ejemplo utiliza `display: inline-block;` para que las cajas aparezcan alineadas horizontalmente, respetando el modelo de cajas completo (incluyendo `padding`, `border`, y `margin`). A diferencia de los elementos en bloque, los elementos con `inline-block` no ocupan toda la anchura disponible y se alinean uno al lado del otro si hay suficiente espacio.

---

### **Ejemplo 7: Controlando el espaciado entre bloques con `margin` y `padding`**

#### HTML:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Espaciado entre bloques</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="box">Caja con margen</div>
  <div class="box no-margin">Caja sin margen</div>
</body>
</html>
```

#### CSS:
```css
/* Caja con margen y padding */
.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  margin: 20px; /* Aplica un margen de 20px alrededor */
  background-color: lightblue;
  border

: 2px solid black;
}

/* Caja sin margen, solo padding */
.no-margin {
  margin: 0; /* Sin márgenes */
}
```

**Descripción**:  
Este ejemplo contrasta una caja con márgenes y una sin márgenes, para ilustrar cómo los márgenes afectan el espaciado entre elementos. La primera caja tiene un `margin` de 20px, lo que crea espacio a su alrededor. La segunda caja no tiene márgenes, por lo que solo depende del `padding` interno para crear separación entre el contenido y el borde.

---
