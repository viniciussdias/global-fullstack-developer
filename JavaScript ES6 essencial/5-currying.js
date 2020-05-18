// Currying - é a técnica de transformar uma função com n parâmetros, em apenas uma função com apenas um parâmetro, e para cada parâmetro retorna uma nova função.

/* 
// Função normal
function soma(a, b) {
    return a + b;
}
// sempre repetindo o 1º parâmetro, função currying resolve isso...
console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));
*/

// Função com currying
function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));