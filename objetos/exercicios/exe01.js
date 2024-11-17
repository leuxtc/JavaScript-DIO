/*
    1) Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometros rodado. Crie um método que dado a quantidade de quilometros e o preço do combustível nos de o valor gasto em reais para realizar este percurso

*/

class Carro {
    marca;
    cor;
    gastoPorKM;

    constructor(marca, cor, gastoPorKM){
        this.marca = marca
        this.cor = cor
        this.gastoPorKM = gastoPorKM
    }

    gastoPercurso(distanciaKM){
        const precoCombustivel = 5.79
        const litrosConsumidos = distanciaKM / this.gastoPorKM
        const valorGasto = (litrosConsumidos * precoCombustivel).toFixed(2)

        console.log(
        `   
        Carro: ${this.marca} ${this.cor} 
        Distância percorrida: ${distanciaKM}Km 
        Gasto total: R$${valorGasto}
        `
        )
    }
}

const ferrari = new Carro('Ferrari', 'Azul', 20)
const monza = new Carro('Monza', 'Vermelho', 12)
const uno = new Carro('Uno', 'Preto', 10)

ferrari.gastoPercurso(100)
monza.gastoPercurso(100)
uno.gastoPercurso(100)