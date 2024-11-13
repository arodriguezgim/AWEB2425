## **Ejercicios de Grid Layout**

---

#### **Ejercicio 1: Creación de un Contenedor Grid Básico**

1. Crea un contenedor `div` con `display: grid` y coloca 4 elementos (`div`).
2. Define el contenedor con `grid-template-columns` para crear una cuadrícula de **dos columnas** de igual tamaño.
3. Agrega un **espacio (`gap`) de 20px** entre los elementos.

**Objetivo**:
- Practicar `display: grid`, `grid-template-columns` y `gap`.

---

#### **Ejercicio 2: Diseño de Cuadrícula con `grid-template-rows`**

1. Crea un contenedor `grid` con seis elementos (`div`).
2. Usa `grid-template-rows` para crear una cuadrícula de **tres filas**; la primera debe medir `100px`, la segunda `200px`, y la tercera debe ajustarse al contenido (`auto`).
3. Define tres columnas de igual tamaño (`1fr` cada una).

**Objetivo**:
- Usar `grid-template-rows` y `grid-template-columns` para ajustar filas y columnas.

---

#### **Ejercicio 3: `repeat()` para Automatizar el Layout**

1. Crea un contenedor `grid` con **ocho elementos**.
2. Usa `repeat()` en `grid-template-columns` para crear **cuatro columnas iguales** de `1fr` cada una.
3. Establece `grid-template-rows` usando `repeat()` para crear **dos filas** de `150px` cada una.

**Objetivo**:
- Familiarizarse con la función `repeat()` y su utilidad para simplificar layouts.

---

#### **Ejercicio 4: Espaciado y Distribución con `auto-fit` y `minmax()`**

1. Crea un contenedor `grid` con varios elementos, entre 6 y 10.
2. Usa `grid-template-columns` con `repeat(auto-fit, minmax(100px, 1fr))` para crear columnas que se ajusten automáticamente al ancho del contenedor, con un mínimo de `100px`.
3. Establece un espacio (`gap`) de `15px` entre las columnas y filas.

**Objetivo**:
- Practicar `auto-fit` y `minmax()` para crear una cuadrícula adaptable y flexible.

---

#### **Ejercicio 5: Posicionamiento de Elementos con `grid-column` y `grid-row`**

1. Crea un contenedor `grid` con seis elementos.
2. Define una cuadrícula de **tres columnas** y **tres filas** de igual tamaño.
3. Usa `grid-column` y `grid-row` para que el primer ítem ocupe **dos columnas** y **una fila**; el segundo ítem debe ocupar **una columna** y **dos filas**.

**Objetivo**:
- Aprender a posicionar y expandir elementos en filas y columnas usando `grid-column` y `grid-row`.

---

#### **Ejercicio 6: Creación de Áreas con `grid-template-areas`**

1. Crea un contenedor `grid` con cinco elementos.
2. Define `grid-template-areas` para establecer un layout en el que los elementos formen una estructura similar a:
   - Encabezado (`header`) que ocupe toda la primera fila.
   - Una barra lateral (`sidebar`) en la segunda fila y primera columna.
   - El contenido (`main`) en la segunda fila y segunda columna.
   - Un pie de página (`footer`) que ocupe toda la tercera fila.
3. Usa `grid-area` en los elementos para colocarlos en las áreas definidas.

**Objetivo**:
- Usar `grid-template-areas` para crear un layout estructurado y asignar áreas a cada elemento.

---

#### **Ejercicio 7: Layout Complejo con `auto-fill`, `minmax()`, y `align-items`**

1. Crea un contenedor `grid` con diez elementos.
2. Usa `grid-template-columns` con `repeat(auto-fill, minmax(150px, 1fr))` para crear una cuadrícula que ajuste las columnas al ancho del contenedor, con un tamaño mínimo de `150px`.
3. Establece `align-items: center` y `justify-items: center` para centrar cada ítem dentro de su celda.
4. Agrega un `gap` de `20px` entre filas y columnas.

**Objetivo**:
- Dominar `auto-fill`, `minmax()`, y las propiedades de alineación `align-items` y `justify-items` para crear un layout adaptable y estéticamente centrado.

---
