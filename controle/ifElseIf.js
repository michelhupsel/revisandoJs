Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imiprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if (nota.entre(7,8.99)){
        console.log('Aprovado!')
    }else if(nota.entre(4,6.99)){
        console.log('Recuperacao!')
    }else if(nota.entre(0,3.99)){
        console.log('Reprovado!')
    }else{
        console.log('Nota invalida!')
    }
}

imiprimirResultado(10)
imiprimirResultado(8.9)
imiprimirResultado(6.55)
imiprimirResultado(2.3)
imiprimirResultado(-1)
imiprimirResultado(11)