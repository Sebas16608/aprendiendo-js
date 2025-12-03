function suma(a, b){
    console.log(arguments)
    return a + b;
}

let resultado = suma(5, 6, 7, 8, 9);
console.log(resultado);
console.log(typeof suma);