# 1. Introducción a CSS

## 1.1 ¿Qué es CSS?

**CSS** (Cascading Style Sheets o Hojas de Estilo en Cascada) es un lenguaje de diseño que se utiliza para describir la presentación de un documento escrito en HTML o XML. CSS controla cómo se verá el contenido de una página web, incluyendo colores, fuentes, márgenes, bordes, espaciado, alineación de texto, imágenes de fondo, diseño y muchas otras características.

**HTML** define la estructura y el contenido de la página web, mientras que **CSS** define cómo debe verse ese contenido.

### Ejemplo básico de HTML y CSS:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera página con CSS</title>
  <style>
    /* Aquí va el CSS */
    body {
      background-color: lightgray;
      font-family: Arial, sans-serif;
    }

    h1 {
      color: blue;
    }

    p {
      color: green;
    }
  </style>
</head>
<body>
  <h1>Bienvenidos a mi página web</h1>
  <p>Este es un ejemplo básico de HTML con CSS incluido en el mismo documento.</p>
</body>
</html>
```

## 1.2. Sintaxis Básica de CSS

La sintaxis de CSS sigue una estructura simple que se compone de **selectores**, **propiedades** y **valores**.

1. **Selector**: Identifica qué elementos de HTML se van a estilizar.
2. **Propiedad**: Define qué aspecto del elemento se va a cambiar (color, tamaño, margen, etc.).
3. **Valor**: Especifica el valor de la propiedad.

### Ejemplo de sintaxis de CSS:

```css
h1 {
  color: blue; /* La propiedad es 'color' y el valor es 'blue' */
  font-size: 24px; /* La propiedad es 'font-size' y el valor es '24px' */
}
```

En este ejemplo:

- El **selector** es `h1`, que selecciona todos los encabezados de nivel 1.
- Las **propiedades** son `color` y `font-size`.
- Los **valores** son `blue` para el color del texto y `24px` para el tamaño de la fuente.

## 1.3. Cómo incluir CSS en HTML

Existen tres formas principales de incluir CSS en un documento HTML: **en línea**, **interno** y **externo**.

### 1.3.1. CSS en línea (inline CSS)

El **CSS en línea** se aplica directamente dentro de los elementos HTML utilizando el atributo `style`. Este método se utiliza cuando se necesita aplicar un estilo único a un solo elemento.

### Ejemplo:

```html
<p style="color: red; font-size: 16px;">Este párrafo es de color rojo y tiene un tamaño de fuente de 16px.</p>
```

### 1.3.2. CSS embebido o interno (internal CSS)

El **CSS embebido** se coloca dentro del archivo HTML, en la sección `<head>`, utilizando la etiqueta `<style>`. Este método es útil cuando quieres aplicar estilos a una sola página web.

### Ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página con CSS embebido</title>
  <style>
    body {
      background-color: lightblue;
    }

    h1 {
      color: darkblue;
    }

    p {
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1>Este es un título</h1>
  <p>Este es un párrafo con CSS embebido.</p>
</body>
</html>
```

### 1.3.3. CSS externo (external CSS)

El **CSS externo** se coloca en un archivo separado con extensión `.css` que se vincula al archivo HTML mediante la etiqueta `<link>`. Este es el método más recomendado, ya que permite separar el contenido (HTML) del diseño (CSS) y reutilizar el archivo CSS en múltiples páginas.

1. **Archivo CSS (styles.css)**:

```css
body {
  background-color: #f0f0f0;
}

h1 {
  color: blue;
}

p {
  font-size: 18px;
  color: green;
}
```

2. **Archivo HTML (index.html)**:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página con CSS externo</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Bienvenidos a mi sitio web</h1>
  <p>Este párrafo está estilizado usando un archivo CSS externo.</p>
</body>
</html>
```

## 1.4. Prioridad de los estilos CSS (Cascada)

Una de las características más importantes de CSS es la **cascada**, que define cómo se aplican los estilos cuando hay múltiples reglas que afectan al mismo elemento. Los estilos tienen diferentes niveles de prioridad basados en:

- **Especificidad**: Las reglas más específicas tienen mayor prioridad.
- **Orden**: Si dos reglas tienen la misma especificidad, la última definida se aplicará.

### Orden de especificidad (de menor a mayor prioridad):

1. Estilos de navegador por defecto.
2. CSS externo o embebido.
3. CSS en línea (inline).
4. Uso de la propiedad `!important` (sobrescribe cualquier otro estilo, pero debe usarse con cuidado).

### Ejemplo de prioridad:

```html
<head>
  <style>
    p {
      color: red; /* Regla 1 */
    }
  </style>
</head>
<body>
  <p style="color: blue;">Este texto será azul.</p> <!-- Regla 2 (mayor prioridad por ser en línea) -->
</body>
```

En este ejemplo, aunque el CSS embebido establece que los párrafos deben ser rojos, el estilo en línea define que este párrafo será azul, lo cual tendrá mayor prioridad.

## 1.5. Comentarios en CSS

Es importante usar comentarios en CSS para documentar el código y hacerlo más legible, especialmente en archivos grandes. Los comentarios en CSS se hacen así:

```css
/* Este es un comentario que no afecta el diseño */
p {
  color: black;
}
```

Los comentarios no afectan el comportamiento de las reglas CSS y son útiles para hacer anotaciones para ti o para otros desarrolladores.

---

