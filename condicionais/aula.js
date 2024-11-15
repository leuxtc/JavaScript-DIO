const precoEtanol = 5.79
const precoGasolina = 6.66
const litroPorKm = 10
const distanciaKm = 100
const tipoCombustivel = "Gasolina"

const litroConsumido = distanciaKm / litroPorKm

if (tipoCombustivel == "Gasolina") {
    let gastoTotal = litroConsumido * precoGasolina
    console.log("R$" + gastoTotal.toFixed(2))
} else if (tipoCombustivel == "Etanol") {
    let gastoTotal = litroConsumido * precoEtanol
    console.log("R$" + gastoTotal.toFixed(2))
} else {
    console.log("Insira um valor valido")
} 