function calcularDesconto(preco, pagamento, desconto) {
    if (pagamento == 1 || pagamento == 2)
        return preco - (preco * (desconto / 100))
    else if (pagamento == 4)
        return preco + (preco * (desconto / 100))
}

function aplicarDesconto(valorPagamento, valorEtiqueta) {
    const tipoPagamento = valorPagamento
    const precoEtiqueta = valorEtiqueta

    if (tipoPagamento == 1) {
        console.log(`Sua compra ficou no valor de R$${calcularDesconto(precoEtiqueta, tipoPagamento, 10)}`)
    } else if (tipoPagamento == 2) {
        console.log(`Sua compra ficou no valor de R$${calcularDesconto(precoEtiqueta, tipoPagamento, 15)}`)
    } else if (tipoPagamento == 3) {
        console.log(`Sua compra ficou no valor de R$${precoEtiqueta}`)
    } else if (tipoPagamento == 4) {
        console.log(`Sua compra ficou no valor de R$${calcularDesconto(precoEtiqueta, tipoPagamento, 10)}`)
    }
}

function main(tipo, etiqueta) {
    aplicarDesconto(tipo, etiqueta)
}

main(1, 100)
main(2, 100)
main(3, 100)
main(4, 100)