// Ejercicios 

// 1. Suma de dos números

console.log("1. Suma de dos números")
let a = 5
console.log("a", a)
let b = 7
console.log("b", b)

function sumar(a, b) {
    console.log(a + b)
    return a + b
}
sumar(a, b)

// 2. Número par o impar
console.log("2. Número par o impar")
let n1 = 10

function esPar(n) {
    if (n % 2 === 0) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

esPar(n1)
