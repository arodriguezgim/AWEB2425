### **Capítulo 3: Tipografías, Imágenes y tablas en Bootstrap 5**

Bootstrap proporciona herramientas y clases predefinidas para trabajar fácilmente con tipografías e imágenes en los diseños web. Este capítulo cubre cómo personalizar textos e integrar imágenes de forma efectiva.

---

### **Sección 1: Tipografías**

Bootstrap utiliza la tipografía de sistema por defecto, pero también permite personalizar el diseño con clases para estilos específicos. A continuación, se presentan los elementos básicos y avanzados:

#### **1.1 Clases de Texto Básicas**
- **Encabezados (`<h1>` a `<h6>`):**
  ```html
  <h1>Encabezado Nivel 1</h1>
  <h2>Encabezado Nivel 2</h2>
  <h3>Encabezado Nivel 3</h3>
  ```

- **Clases para Resaltar Texto:**
  ```html
  <p class="text-primary">Texto Azul</p>
  <p class="text-danger">Texto Rojo</p>
  <p class="text-success">Texto Verde</p>
  ```

- **Estilos de Fuente:**
  ```html
  <p class="fw-bold">Texto en Negrita</p>
  <p class="fw-light">Texto Ligero</p>
  <p class="fst-italic">Texto en Cursiva</p>
  ```

---

#### **1.2 Estilos Personalizados para Texto**
- **Alineación:**
  ```html
  <p class="text-start">Texto Alineado a la Izquierda</p>
  <p class="text-center">Texto Centrado</p>
  <p class="text-end">Texto Alineado a la Derecha</p>
  ```

- **Colores de Fondo:**
  ```html
  <p class="bg-warning text-dark p-3">Texto con Fondo Amarillo</p>
  <p class="bg-secondary text-white p-3">Texto con Fondo Gris</p>
  ```

---

#### **1.3 Ejemplo Completo de Tipografía**
```html
<div class="container my-4">
  <h1 class="text-primary text-center">Tipografías en Bootstrap</h1>
  <p class="text-muted">Bootstrap facilita la personalización del texto con estilos predefinidos.</p>
  <p class="fw-bold text-success">Texto en Negrita y Verde.</p>
  <p class="fst-italic text-danger">Texto en Cursiva y Rojo.</p>
  <p class="text-end bg-light p-3">Texto alineado a la derecha con fondo claro.</p>
</div>
```

---

### **Sección 2: Imágenes**

Las imágenes en Bootstrap son responsivas por defecto gracias a la clase `.img-fluid`, que las ajusta automáticamente al contenedor.

#### **2.1 Clases Básicas para Imágenes**
- **Imágenes Responsivas:**
  ```html
  <img src="https://via.placeholder.com/150" class="img-fluid" alt="Imagen responsiva">
  ```

- **Tamaños Personalizados:**
  ```html
  <img src="https://via.placeholder.com/150" class="w-50" alt="50% del ancho">
  <img src="https://via.placeholder.com/150" class="w-25" alt="25% del ancho">
  ```

---

#### **2.2 Clases Avanzadas para Imágenes**
- **Bordes y Formas:**
  ```html
  <img src="https://via.placeholder.com/150" class="rounded" alt="Bordes redondeados">
  <img src="https://via.placeholder.com/150" class="rounded-circle" alt="Círculo">
  <img src="https://via.placeholder.com/150" class="img-thumbnail" alt="Miniatura">
  ```

---

#### **2.3 Ejemplo Completo de Imágenes**
```html
<div class="container my-4">
  <h2 class="text-center">Ejemplo de Imágenes en Bootstrap</h2>
  <div class="row text-center">
    <div class="col-md-4">
      <img src="https://via.placeholder.com/150" class="img-fluid rounded" alt="Imagen 1">
      <p>Imagen con bordes redondeados.</p>
    </div>
    <div class="col-md-4">
      <img src="https://via.placeholder.com/150" class="img-fluid rounded-circle" alt="Imagen 2">
      <p>Imagen en forma de círculo.</p>
    </div>
    <div class="col-md-4">
      <img src="https://via.placeholder.com/150" class="img-thumbnail" alt="Imagen 3">
      <p>Imagen con estilo miniatura.</p>
    </div>
  </div>
</div>
```

---

### **Ejercicio 1: Personalizar Tipografías**

#### **Enunciado:**
Crea un diseño que incluya:
- Un título principal en azul (`text-primary`) con negrita (`fw-bold`).
- Un subtítulo centrado con fondo gris (`bg-secondary`) y texto blanco.
- Un párrafo con texto en cursiva y alineado a la derecha.

---

### **Ejercicio 2: Galería de Imágenes**

#### **Enunciado:**
Crea una galería con tres imágenes que tengan:
- La primera con bordes redondeados.
- La segunda en forma de círculo.
- La tercera con estilo miniatura.

---

¡Vamos a desarrollar la sección de **Tablas** en Bootstrap 5! Las tablas son una forma excelente de organizar y mostrar datos, y Bootstrap proporciona clases útiles para diseñarlas rápidamente.

---

### **Sección 3: Tablas en Bootstrap 5**

Bootstrap permite personalizar tablas con estilos predeterminados como bordes, colores, sombreados y más.

---

#### **3.1 Tablas Básicas**
La clase principal para crear tablas es `.table`. Aquí tienes un ejemplo básico:

```html
<div class="container my-4">
  <h2>Tabla Básica</h2>
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Juan</td>
        <td>Pérez</td>
        <td>juan.perez@example.com</td>
      </tr>
      <tr>
        <td>2</td>
        <td>María</td>
        <td>García</td>
        <td>maria.garcia@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

#### **3.2 Tablas con Bordes**
Para agregar bordes a las tablas y celdas, usa la clase `.table-bordered`:

```html
<div class="container my-4">
  <h2>Tabla con Bordes</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Manzanas</td>
        <td>$2.00</td>
        <td>10</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Naranjas</td>
        <td>$1.50</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

#### **3.3 Tablas Rayadas (Striped)**
Para mejorar la legibilidad, usa `.table-striped` para alternar colores de fila:

```html
<div class="container my-4">
  <h2>Tabla Rayada</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Posición</th>
        <th>Edad</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Ana</td>
        <td>Gerente</td>
        <td>35</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Luis</td>
        <td>Analista</td>
        <td>28</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

#### **3.4 Tablas Interactivas (Hoverable)**
Usa `.table-hover` para resaltar filas cuando pases el cursor sobre ellas:

```html
<div class="container my-4">
  <h2>Tabla Interactiva</h2>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Departamento</th>
        <th>Empleados</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Recursos Humanos</td>
        <td>15</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Tecnología</td>
        <td>25</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

#### **3.5 Tablas de Colores**
Puedes agregar colores a las filas o celdas con clases como `.table-primary`, `.table-danger`, etc.:

```html
<div class="container my-4">
  <h2>Tabla con Colores</h2>
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Producto</th>
        <th>Estado</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-success">
        <td>1</td>
        <td>Notebook</td>
        <td>Disponible</td>
        <td>$500</td>
      </tr>
      <tr class="table-warning">
        <td>2</td>
        <td>Tablet</td>
        <td>Pocas unidades</td>
        <td>$300</td>
      </tr>
      <tr class="table-danger">
        <td>3</td>
        <td>Smartphone</td>
        <td>Agotado</td>
        <td>$700</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### **Ejercicios Prácticos**

#### **Ejercicio 1: Crear una Tabla de Estudiantes**
1. Diseña una tabla con:
   - ID, nombre, apellido y nota.
   - Alterna colores de filas usando `.table-striped`.
   - Resalta la fila de estudiantes con nota superior a 8 con `.table-success`.

#### **Ejercicio 2: Inventario Interactivo**
1. Diseña una tabla de inventario con:
   - Producto, cantidad, estado y precio.
   - Usa bordes con `.table-bordered`.
   - Aplica `.table-hover` para resaltar filas al pasar el cursor.

#### **Ejercicio 3: Tabla de Estatus de Proyectos**
1. Crea una tabla que muestre:
   - Proyecto, responsable, estado y fecha de entrega.
   - Usa `.table-danger`, `.table-warning` y `.table-success` para mostrar los estados "retrasado", "en progreso" y "completado".

---

