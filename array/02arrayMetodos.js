const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no primeiro elemento do array
console.log(pilotos)

//splice

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

//slice
const algunsPilotos1 = pilotos.slice(2) //cria um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //nao retorna o indice 4
console.log(algunsPilotos2)

