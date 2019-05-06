//armazenando uma funcao em uma variavel
const imprimirSoma = function (a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

//armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))
console.log(subtracao(3,2))

//retorno implicito com um parametro
const imprimir2 = a => console.log(a+10)

imprimir2(8)

//meu teste de arrow function
const subtracao2 = (a,b) => console.log(a-b)
subtracao2(10,5)