/*
    
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura
    As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / (altura * altura))
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2)
    }

    classificarIMC() {
        const imc = this.calcularIMC()
        if (imc < 18.5) {
            console.log(`${this.nome} está abaixo do peso`)
        } else if (imc > 18.5 && imc < 25) {
            console.log(`${this.nome} está com peso normal`)
        } else if (imc > 25 && imc < 30) {
            console.log(`${this.nome} está acima do peso`)
        } else if (imc > 30 && imc < 40) {
            console.log(`${this.nome} está obeso`)
        } else {
            console.log(`${this.nome} está com obesidade grave`)
        }
    }

    dizerIMC() {
        const imc = this.calcularIMC()
        console.log(`${this.nome}: Meu IMC é de ${imc}`)
    }
}

const jose = new Pessoa('José', 70, 1.75)
const maria = new Pessoa('Maria', 40, 1.75)
const rose = new Pessoa('Rose', 100, 1.75)
const rodrigo = new Pessoa('Rodrigo', 170, 1.75)

jose.dizerIMC()
jose.classificarIMC()

maria.dizerIMC()
maria.classificarIMC()

rose.dizerIMC()
rose.classificarIMC()

rodrigo.dizerIMC()
rodrigo.classificarIMC()