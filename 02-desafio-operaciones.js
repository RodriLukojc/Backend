const suma = (numero1, numero2) => numero1 + numero2;

const operacion = (numero1, numero2, op) => {
    return op(numero1, numero2)
}
console.log(operacion(4, 2, suma));
/**console.log('esto es un texto');**/