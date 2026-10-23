
// Variables base (Caso 1: Con descuento por cantidad)
const producto1 = "Teclado Aula F75 Max";
const precio1 = 100000;
let cantidad1 = 3;
const hayStock1 = true;

// Variables base (Caso 2: Sin descuento por cantidad)
const producto2 = "Mouse Attack Shark X11";
const precio2 = 50000;
let cantidad2 = 1;
const hayStock2 = true;

// Función con variables de scope local
function calcularTotal(precio, cantidad) {
    const IVA = 0.19; // Scope de función (19% de IVA)
    let total = precio * cantidad; // Operador aritmético (*)

    // Condicional if con operador de comparación (>=)
    if (cantidad >= 3) {
        let descuento = total * 0.1; // Scope de bloque (10% de descuento)
        total = total - descuento;   // Operador aritmético (-)
    }

    return total * (1 + IVA); // Retorna el total con el IVA aplicado
}

// Función para procesar e imprimir en consola
function mostrarResumen(producto, precio, cantidad, hayStock) {
    // Operador lógico (&&) y de comparación (>)
    const esValido = hayStock && cantidad > 0;

    // Operador ternario (condición ? verdadero : falso) y concatenación (+)
    const resultado = esValido ? calcularTotal(precio, cantidad) : "Sin stock";
    console.log(producto + ": " + resultado);
}

// Ejecución de casos de prueba
console.log("--- CALCULADORA DE COMPRAS MUNDO GAMING ---");
mostrarResumen(producto1, precio1, cantidad1, hayStock1); // Imprime: Teclado Aula F75 Max: 160650
mostrarResumen(producto2, precio2, cantidad2, hayStock2); // Imprime: Mouse Attack Shark X11: 95200