
### **Ejercicio 1: Diseñando una Página de Perfil**
1. Crea una página de perfil de usuario que incluya:
   - Un encabezado principal (`<h1>`) con el nombre del usuario, usando la clase `text-primary`.
   - Un subtítulo (`<h3>`) con la descripción del perfil, centrado (`text-center`) y en cursiva (`fst-italic`).
   - Una foto del usuario en forma de círculo (`.rounded-circle`) con un ancho del 50% (`w-50`).
   - Un párrafo alineado a la derecha (`text-end`) con la biografía del usuario.

**Resultado esperado:**
Un diseño atractivo y ordenado que combine tipografías e imágenes.

---

### **Ejercicio 2: Tabla de Productos**
1. Diseña una tabla que muestre los siguientes datos de productos:
   - Nombre del producto, categoría, precio y disponibilidad.
   - Aplica las siguientes características:
     - Alternar colores de fila con `.table-striped`.
     - Resaltar la fila de los productos "No disponibles" con `.table-danger`.
     - Agregar bordes a la tabla con `.table-bordered`.

**Ejemplo de datos:**
| Producto     | Categoría   | Precio  | Disponibilidad |
|--------------|-------------|---------|----------------|
| Camiseta     | Ropa       | $10.00  | Disponible     |
| Smartphone   | Electrónica| $200.00 | No disponible  |
| Libro        | Educación  | $15.00  | Disponible     |

---

### **Ejercicio 3: Galería de Imágenes Responsiva**
1. Diseña una galería de imágenes con las siguientes características:
   - Cuatro imágenes distribuidas en una cuadrícula responsiva:
     - En pantallas grandes: 2 filas de 2 imágenes.
     - En pantallas medianas: 1 fila de 4 imágenes.
     - En pantallas pequeñas: imágenes apiladas una debajo de otra.
   - La primera imagen tendrá bordes redondeados (`.rounded`).
   - La segunda será circular (`.rounded-circle`).
   - La tercera será una miniatura (`.img-thumbnail`).
   - La cuarta será una imagen responsiva (`.img-fluid`).

**Pista:**
Usa las clases de GRID de Bootstrap como `.row` y `.col`.

---

### **Ejercicio 4: Tabla de Resultados de un Examen**
1. Crea una tabla para mostrar los resultados de un examen:
   - Columnas: ID del estudiante, nombre, apellido, nota y estado.
   - Alterna colores de fila con `.table-striped`.
   - Usa colores para indicar el estado de las notas:
     - `table-success` para notas mayores a 7.
     - `table-warning` para notas entre 5 y 7.
     - `table-danger` para notas menores a 5.
   - Agrega un sombreado al pasar el cursor por la fila usando `.table-hover`.

---

### **Ejercicio 5: Combinando Tipografías e Imágenes**
1. Diseña una página que muestre información de un evento:
   - Un encabezado (`<h1>`) con el título del evento, en azul (`text-primary`) y centrado (`text-center`).
   - Un subtítulo (`<h3>`) con la fecha y hora, con texto gris claro (`text-muted`).
   - Una foto del evento (`.img-fluid`) centrada y con bordes redondeados.
   - Una lista de descripción del evento con diferentes colores:
     - Texto verde para "Disponible".
     - Texto naranja para "Limitado".
     - Texto rojo para "Agotado".

**Resultado esperado:**
Una página estructurada, con textos bien estilizados e imágenes atractivas.

---

### **Ejercicio 6: Diseño de un Dashboard**
1. Diseña un dashboard que incluya:
   - Una tabla de datos de usuarios:
     - Columnas: ID, nombre, email, rol, estado.
     - Usa `.table-striped` y `.table-hover`.
   - Una fila superior con dos imágenes:
     - La primera con formato circular (`.rounded-circle`).
     - La segunda como una miniatura (`.img-thumbnail`).
   - Un encabezado superior (`<h2>`) con el texto "Panel de Administración", en negrita (`fw-bold`) y alineado a la izquierda (`text-start`).

---

### **Ejercicio 7: Tabla de Inventario con Respuesta Responsiva**
1. Diseña una tabla de inventario que se ajuste automáticamente en pantallas pequeñas:
   - Usa las clases de tabla responsiva (`.table-responsive`).
   - Columnas: Producto, cantidad, precio y proveedor.
   - Agrega bordes (`.table-bordered`) y alterna colores de fila (`.table-striped`).
   - Destaca productos con baja cantidad (`Cantidad < 5`) usando `.table-warning`.

**Pista:**
Envuelve la tabla en un contenedor con la clase `.table-responsive` para que sea scrollable en dispositivos pequeños.

---

### **Ejercicio 8: Página de Contactos**
1. Diseña una página que incluya:
   - Un título principal (`<h1>`) centrado y en color azul.
   - Una tabla de contactos con las siguientes columnas:
     - Nombre, teléfono, email, dirección.
   - Agrega una imagen de perfil (`.rounded-circle`) a la izquierda de cada contacto.
   - Usa `.table-hover` y `.table-striped`.

---
