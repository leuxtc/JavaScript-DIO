/* 
    2) O IMC - Indice de Massa Corporal é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

    Condições:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

const peso = 200
const altura = 1.77

const imc = (peso / Math.pow(altura, 2)).toFixed(2)

if (imc < 18.5){
    console.log(`Você está abaixo do peso, seu IMC é de ${imc}`)
} else if (imc >= 18.5 && imc <= 25){
    console.log(`Você está com peso normal, seu IMC é de ${imc}`)
} else if (imc >= 25 && imc <= 30){
    console.log(`Você está acima do peso, seu IMC é de ${imc}`)
} else if (imc >= 30 && imc <= 40){
    console.log(`Você está obeso, seu IMC é de ${imc}`)
} else {
    console.log(`Você está com obesidade grave, seu IMC é de ${imc}`)
}