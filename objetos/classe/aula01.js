class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

const leo = new Pessoa()
leo.nome = 'Leo'
leo.idade = 19

const melissa = new Pessoa()
melissa.nome = 'Melissa'
melissa.idade = 21

leo.descrever()
melissa.descrever()