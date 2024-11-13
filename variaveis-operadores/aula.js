/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
1- Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem

*/

const precoGasolina = 5.79;
const litroPorKm = 12;
let distanciaKm = 100;

const litrosConsumidos = distanciaKm / litroPorKm
const valorGasto = litrosConsumidos * precoGasolina

console.log("R$" + valorGasto.toFixed(2))