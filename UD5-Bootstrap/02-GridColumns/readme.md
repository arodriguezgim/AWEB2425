### **Sección 2: Sistema de la GRID en Bootstrap**

Bootstrap utiliza un sistema de diseño basado en una cuadrícula flexible y responsiva que permite organizar el contenido en filas y columnas.

---

### **1. Conceptos Básicos de la GRID**

- **Filas (`row`)**: Agrupan las columnas y aseguran la alineación adecuada.  
- **Columnas (`col-*`)**: Dividen el espacio en 12 partes.  
- **Breakpoints**: Permiten diseños adaptativos según el tamaño del dispositivo. Los principales breakpoints son:
  - `sm` (pequeño), `md` (mediano), `lg` (grande), `xl` (extra grande), `xxl` (ultra grande).

---

### **2. Ejemplo Práctico: Tres Columnas Iguales**

#### **Código:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap GRID - Ejemplo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container my-4">
    <h1 class="text-center">Tres Columnas Iguales</h1>
    <div class="row">
      <div class="col bg-light text-center border p-3">Columna 1</div>
      <div class="col bg-secondary text-center text-white border p-3">Columna 2</div>
      <div class="col bg-light text-center border p-3">Columna 3</div>
    </div>
  </div>
</body>
</html>
```

#### **Explicación:**
- Cada columna utiliza la clase `col`, lo que distribuye el ancho disponible en partes iguales.

---

### **3. Ejemplo: Dos Columnas Desiguales**

#### **Código:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap GRID - Dos Columnas</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container my-4">
    <h1 class="text-center">Dos Columnas Desiguales</h1>
    <div class="row">
      <div class="col-8 bg-light text-center border p-3">70% del Ancho</div>
      <div class="col-4 bg-secondary text-center text-white border p-3">30% del Ancho</div>
    </div>
  </div>
</body>
</html>
```

#### **Explicación:**
- La primera columna usa `col-8` (70% del ancho disponible).
- La segunda columna usa `col-4` (30%).

---

### **4. Ejemplo: Columnas Responsivas**

#### **Código:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap GRID - Responsivo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container my-4">
    <h1 class="text-center">Columnas Responsivas</h1>
    <div class="row">
      <div class="col-12 col-md-6 bg-light text-center border p-3">Columna 1</div>
      <div class="col-12 col-md-6 bg-secondary text-center text-white border p-3">Columna 2</div>
    </div>
  </div>
</body>
</html>
```

#### **Explicación:**
- En dispositivos pequeños, ambas columnas ocupan el 100% (`col-12`).
- En dispositivos medianos y grandes, ocupan el 50% (`col-md-6`).

---

### **Imagen de Ejemplo: Diseño del Sistema GRID**

Arriba puedes ver cómo se distribuyen las columnas según el código presentado.  

