// Short-circuit


// falso
// false
// 0
// ""
// null
// undefined
// NaN

let nombre = "Sebas";
let username = nombre || "anonimo";
console.log(username);

function fn1(){
    console.log("soy funcion 1");
    return true;
}

function fn2(){
    console.log("soy funcion 2");
    return false;
}

console.log(fn1() && fn2())