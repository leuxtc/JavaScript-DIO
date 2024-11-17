const pessoa = {
    nome: 'Leo',
    idade: 19,
    genero: 'Masculino',
    cep: 0,

    descrever: function () {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou do gênero ${this.genero}`)
    }
}

pessoa.altura = 1.77
delete pessoa.cep
console.log(pessoa)

pessoa.descrever()

const atributo = 'nome'
console.log(pessoa[atributo])