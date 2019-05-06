console.log(soma(3,4))
//console.log(sub(3,4))

//function declaration - carrega no inicio da compilação do código
function soma(x, y) {
    return x + y
}

//function expression - não funciona como na function declaration
const sub = function (x, y) {
    return x - y
}

//named function expression - essa também não funciona 
const mult = function mult(x, y) {
    return x * y
}