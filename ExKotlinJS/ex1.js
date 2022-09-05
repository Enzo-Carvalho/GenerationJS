const prompt = require('prompt-sync')()

let base = Number(prompt("Digite o valor da base: "))
let altura = Number(prompt("Digite o valor da altura: "))

    if (base>0 && altura>0)
    {
        var area = (base * altura)/2
        console.log(`Área: ${area}`)
    }
    else
    {
        console.log("Impossível calcular a área")
    }