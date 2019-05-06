const escola = "Cod3r"

//busca o indice da string
console.log(escola.charAt(4))
console.log(escola.charAt(5))

//valor do indice na tabela asc
console.log(escola.charCodeAt(3))

//buscar valor especifico na string
console.log(escola.indexOf('3'))

//substring passando apenas inicio
console.log(escola.substring(1))

//substring passando inicio e fim
console.log(escola.substring(0,3))

//concatenacao
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

//alterar um caracter na string
console.log(escola.replace(3, 'e'))

//passando uma string para array
console.log('Ana,Maria,Pedro'.split(',')) 


