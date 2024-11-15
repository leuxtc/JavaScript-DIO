function calcularIMC(peso, altura) {
    return (peso / Math.pow(altura, 2)).toFixed(2)
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return `Você está abaixo do peso, seu IMC é de ${imc}`
    } else if (imc >= 18.5 && imc <= 25) {
        return `Você está com peso normal, seu IMC é de ${imc}`
    } else if (imc >= 25 && imc <= 30) {
        return `Você está acima do peso, seu IMC é de ${imc}`
    } else if (imc >= 30 && imc <= 40) {
        return `Você está obeso, seu IMC é de ${imc}`
    } else {
        return `Você está com obesidade grave, seu IMC é de ${imc}`
    }
}

function main(valorPeso, valorAltura) {
    const peso = valorPeso
    const altura = valorAltura

    const imc = calcularIMC(peso, altura)
    console.log(classificarIMC(imc))
}

main(70, 1.77)
main(40, 1.77)
main(100, 1.77)
main(250, 1.77)