Aquí tienes algunos ejercicios prácticos para reforzar el aprendizaje del sistema GRID de Bootstrap:

---

## **Ejercicio 1: Diseño de 3 Columnas Responsivas**

### **Enunciado:**
Crea una página web que muestre tres columnas:
- En dispositivos pequeños, las columnas deben apilarse (100% del ancho cada una).
- En dispositivos medianos y grandes, deben dividirse en partes iguales (33% del ancho cada una).
  
#### **Pistas:**
- Usa clases como `col-12` y `col-md-4`.
- Añade colores de fondo para distinguir las columnas.

#### **Código Base:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio 1: Tres Columnas Responsivas</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container my-4">
    <div class="row">
      <div class="col-12 col-md-4 bg-primary text-white text-center p-3">Columna 1</div>
      <div class="col-12 col-md-4 bg-secondary text-white text-center p-3">Columna 2</div>
      <div class="col-12 col-md-4 bg-success text-white text-center p-3">Columna 3</div>
    </div>
  </div>
</body>
</html>
```

---

## **Ejercicio 2: Diseña una Cabecera con 2 Columnas**

### **Enunciado:**
Crea una cabecera con dos columnas:
- En dispositivos grandes, la primera columna debe ocupar el 8/12 del ancho y la segunda el 4/12.
- En dispositivos pequeños, las columnas deben apilarse.

#### **Pistas:**
- Usa clases como `col-12`, `col-lg-8` y `col-lg-4`.
- Personaliza con estilos, como imágenes o texto.

#### **Código Base:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio 2: Cabecera</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container my-4">
    <div class="row">
      <div class="col-12 col-lg-8 bg-light text-center p-3">
        <h1>Cabecera Principal</h1>
        <p>Texto o imagen aquí</p>
      </div>
      <div class="col-12 col-lg-4 bg-dark text-white text-center p-3">
        <h2>Información Adicional</h2>
        <p>Texto secundario aquí</p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## **Ejercicio 3: Tarjetas en Filas y Columnas**

### **Enunciado:**
Diseña un sistema de tarjetas (cards) organizadas en un layout responsivo:
- En pantallas grandes, muestra 4 tarjetas por fila.
- En pantallas medianas, muestra 2 tarjetas por fila.
- En pantallas pequeñas, las tarjetas deben apilarse.

#### **Pistas:**
- Usa las clases `col-12`, `col-md-6` y `col-lg-3`.
- Crea un diseño con colores o imágenes.

#### **Código Base:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio 3: Tarjetas</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container my-4">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 p-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Tarjeta 1</h5>
            <p class="card-text">Contenido de la tarjeta 1.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 p-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Tarjeta 2</h5>
            <p class="card-text">Contenido de la tarjeta 2.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 p-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Tarjeta 3</h5>
            <p class="card-text">Contenido de la tarjeta 3.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 p-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Tarjeta 4</h5>
            <p class="card-text">Contenido de la tarjeta 4.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### **Resultados Esperados**

1. **Ejercicio 1**: Tres columnas iguales en pantallas grandes que se apilan en dispositivos pequeños.  
2. **Ejercicio 2**: Cabecera con dos secciones que cambian de layout según el tamaño de la pantalla.  
3. **Ejercicio 3**: Una galería de tarjetas completamente responsiva.

