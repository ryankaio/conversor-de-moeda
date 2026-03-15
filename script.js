let dolar = 5.3

//recebendo os valores 
let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () =>{
    usdInput.value = formatCurrency(usdInput.value)
})
brlInput.addEventListener("blur", () =>{
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "100,00"
convert("usd-to-brl")

//funçôes

function formatCurrency(value) {
    //ajustar o valor
    let fixedValue = fixValue(value)
    //ultilizar funçâo de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2 
    }
    //retornar o valor formatado
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)

    if (isNaN(floatValue)) {
        floatValue = 0
    }

    return floatValue
}


function convert(type) {
    if (type == "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value)
        let result = fixedValue * dolar
        result = result.toFixed(2) //tera apenas dois digitos apos a virgula
        brlInput.value = formatCurrency(result)
    }

    if (type=="brl-to-usd"){
        let fixedValue = fixValue(brlInput.value)
        let result = fixedValue / dolar
        result = result.toFixed(2)
        usdInput.value = formatCurrency(result)
    }
}