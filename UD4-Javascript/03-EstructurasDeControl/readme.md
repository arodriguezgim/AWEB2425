## **Capítulo 3: Estructuras de Control (3h)**

### **Objetivo:**
Dominar las estructuras condicionales y de bucle para controlar el flujo del programa. Aprender a tomar decisiones y ejecutar acciones repetitivas.

---

### **3.1 Introducción a las estructuras de control**
- Las estructuras de control permiten:
  1. Tomar decisiones (condicionales).
  2. Repetir acciones (bucles).
- **Tipos principales:**
  - Condicionales:
    - `if`, `else if`, `else`
    - Operador ternario
  - Bucles:
    - `for`
    - `while`
    - `do...while`

---

### **3.2 Condicionales: `if`, `else if`, `else`**

#### **Explicación:**
- Usamos condicionales para ejecutar código solo si se cumple una condición.
- **Sintaxis básica:**
  ```javascript
  if (condición) {
    // Código a ejecutar si la condición es verdadera
  } else if (otraCondición) {
    // Código a ejecutar si otraCondición es verdadera
  } else {
    // Código a ejecutar si ninguna condición es verdadera
  }
  ```

#### **Ejemplo 1:**
Verificar si una persona es mayor de edad:
```javascript
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

#### **Ejemplo 2:**
Clasificar una nota:
```javascript
let nota = 7;
if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 7) {
  console.log("Notable");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}
```

---

### **3.3 Operador Ternario**

#### **Explicación:**
- Una forma compacta de escribir condicionales simples.
- **Sintaxis:**
  ```javascript
  condición ? expresión_si_verdadero : expresión_si_falso;
  ```

#### **Ejemplo:**
```javascript
let edad = 20;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);
```

---

### **3.4 Bucles**

#### **3.4.1 `for`**

- Repetimos un bloque de código un número fijo de veces.
- **Sintaxis básica:**
  ```javascript
  for (inicialización; condición; incremento) {
    // Código a ejecutar en cada iteración
  }
  ```

#### **Ejemplo 1:**
Imprimir los números del 1 al 5:
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

#### **Ejemplo 2:**
Calcular la suma de los números del 1 al 10:
```javascript
let suma = 0;
for (let i = 1; i <= 10; i++) {
  suma += i;
}
console.log("La suma es:", suma);
```

---

#### **3.4.2 `while`**

- Repite un bloque de código mientras la condición sea verdadera.
- **Sintaxis básica:**
  ```javascript
  while (condición) {
    // Código a ejecutar
  }
  ```

#### **Ejemplo:**
Contar hacia atrás desde 5 hasta 1:
```javascript
let contador = 5;
while (contador > 0) {
  console.log(contador);
  contador--;
}
```

---

#### **3.4.3 `do...while`**

- Similar a `while`, pero asegura que el bloque de código se ejecute al menos una vez.
- **Sintaxis básica:**
  ```javascript
  do {
    // Código a ejecutar
  } while (condición);
  ```

#### **Ejemplo:**
Pedir un número hasta que el usuario introduzca un valor mayor que 10:
```javascript
let numero;
do {
  numero = prompt("Introduce un número mayor que 10:");
} while (numero <= 10);
console.log("Número válido:", numero);
```

---

### **3.5 Uso combinado de condicionales y bucles**

#### **Ejemplo 1: Tablas de multiplicar**
Generar la tabla de multiplicar del 5:
```javascript
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
```

#### **Ejemplo 2: Números pares del 1 al 20**
```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

---

### **3.6 Errores comunes al usar estructuras de control**

1. **Condiciones incorrectas:**
   - Escribir `=` en lugar de `==` o `===`.
   - **Error:**
     ```javascript
     if (x = 5) {  // Esto asigna 5 a x
       console.log("Error lógico");
     }
     ```
   - **Corrección:**
     ```javascript
     if (x === 5) {  // Compara el valor y el tipo
       console.log("Correcto");
     }
     ```

2. **Bucles infinitos:**
   - Ocurren cuando la condición del bucle nunca es falsa.
   - **Error:**
     ```javascript
     let i = 1;
     while (i > 0) {  // Condición siempre verdadera
       console.log(i);
     }
     ```

---

### [**Ejercicios del Capítulo 3**](./ejercicios.md)

### [**Practica Javascript: 50 Ejercicios**](./practica.md)



