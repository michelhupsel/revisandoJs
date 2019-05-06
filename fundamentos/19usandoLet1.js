var numero = 1
{
    let numero = 2
    console.log('dentro =',numero)
    {
        let numero = 3
        console.log('inside again =',numero)
        {
            let numero = 4
            console.log('inception =', numero)
        }
    }
}
console.log('fora =',numero)
