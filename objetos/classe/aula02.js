class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) { 
        this.nome = nome
        this.idade = idade
        this.anoNascimento = 2024 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e nasci em ${this.anoNascimento}`)
    }
}

const leo = new Pessoa('Leo', 19)
leo.descrever()