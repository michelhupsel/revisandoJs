const funcs = []

for (let i = 0; i < 10; i++) {
    //console.log(i)
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
console.log(typeof funcs)
