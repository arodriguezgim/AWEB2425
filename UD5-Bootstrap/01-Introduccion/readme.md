## **Sección 1: Instalación por CDN y Contenedores**

### **1. ¿Qué es Bootstrap?**
Bootstrap es un framework CSS desarrollado por Twitter que permite crear páginas web modernas, responsivas y con un diseño profesional de manera rápida. Incluye estilos predefinidos para botones, formularios, tablas, y un sistema de grid para crear diseños flexibles.

---

### **2. Instalación por CDN**

Bootstrap 5 se puede incluir fácilmente en un proyecto usando un enlace CDN. Esto significa que no necesitas descargar archivos; simplemente añades los enlaces en el archivo HTML.

#### **Ejemplo de código:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap 5 - Ejemplo</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-center text-primary">¡Hola, Bootstrap 5!</h1>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

#### **Resultado esperado:**
- El título "¡Hola, Bootstrap 5!" aparecerá centrado y con el color azul predeterminado de `text-primary`.

---

### **3. Contenedores**

En Bootstrap, los **contenedores** son elementos principales que limitan el ancho del contenido en la página y lo alinean de forma responsiva.

#### **Tipos de contenedores:**
1. **`container`**: Tiene un ancho fijo y cambia dependiendo del tamaño de la pantalla.
2. **`container-fluid`**: Ocupa el 100% del ancho disponible.
3. **`container-{breakpoint}`**: Ancho fijo que cambia a fluido en pantallas más grandes (por ejemplo, `container-md`).

#### **Ejemplo de código: Contenedores básicos**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contenedores en Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- Contenedor normal -->
  <div class="container bg-light p-3">
    <p>Este es un contenedor con ancho fijo.</p>
  </div>

  <!-- Contenedor fluido -->
  <div class="container-fluid bg-info text-white p-3 mt-3">
    <p>Este es un contenedor fluido que ocupa el 100% del ancho.</p>
  </div>

  <!-- Contenedor específico para pantallas medianas -->
  <div class="container-md bg-success text-white p-3 mt-3">
    <p>Este contenedor es fijo en pantallas pequeñas y fluido en pantallas medianas o más grandes.</p>
  </div>
</body>
</html>
```

#### **Resultado esperado:**
- El contenedor normal tendrá un ancho limitado.
- El contenedor fluido se extenderá a todo el ancho de la pantalla.
- El contenedor `container-md` será fijo en pantallas pequeñas y se extenderá en pantallas más grandes.

---

### **4. Ejercicio práctico: Página básica con contenedores**

#### **Enunciado:**
Crea una página que tenga:
- Un contenedor normal con un título y un párrafo.
- Un contenedor fluido con una lista de enlaces.
- Personaliza los contenedores con colores de fondo y márgenes.

#### **Ejemplo de código para el ejercicio:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio de Contenedores</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- Contenedor normal -->
  <div class="container bg-light p-4 my-4">
    <h1 class="text-center text-primary">Contenedor Normal</h1>
    <p class="text-center">Este contenedor tiene un ancho fijo dependiendo del tamaño de la pantalla.</p>
  </div>

  <!-- Contenedor fluido -->
  <div class="container-fluid bg-dark text-white p-4">
    <h2 class="text-center">Contenedor Fluido</h2>
    <ul class="text-center">
      <li><a href="#" class="text-warning">Enlace 1</a></li>
      <li><a href="#" class="text-warning">Enlace 2</a></li>
      <li><a href="#" class="text-warning">Enlace 3</a></li>
    </ul>
  </div>
</body>
</html>
```

#### **Resultado esperado:**
1. Un contenedor con un fondo claro, un título azul centrado y un párrafo explicativo.
2. Un contenedor fluido con un fondo oscuro, texto blanco y enlaces amarillos centrados.

---

### **Imágenes de ejemplo:**

#### 1. **Estructura de contenedores**
Visualización del diseño con los tres tipos de contenedores:  
- Contenedor normal.
- Contenedor fluido.
- Contenedor específico (`container-md`).

#### 2. **Resultado del ejercicio práctico**
Un diseño simple con los dos contenedores básicos personalizables.

---

