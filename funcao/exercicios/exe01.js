function verificarIdade(idade){
    if (idade >= 18){
        return "sou maior de idade"
    } else {
        return "sou menor de idade"
    }
}

function main(nome, idade){
    console.log(`Meu nome é ${nome} e ${verificarIdade(idade)}!`)
}

main("Leo", 22)
main("Rafael", 11)