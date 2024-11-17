/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const tipoPagamento = 1
const precoEtiqueta = 100

if (tipoPagamento == 1){
    console.log(`Sua compra ficou no valor de R$${precoEtiqueta - (precoEtiqueta * 0.1)}`)
} else if (tipoPagamento == 2){
    console.log(`Sua compra ficou no valor de R$${precoEtiqueta - (precoEtiqueta * 0.15)}`)
} else if (tipoPagamento == 3){
    console.log(`Sua compra ficou no valor de R$${precoEtiqueta}`)
} else if (tipoPagamento == 4){
    console.log(`Sua compra ficou no valor de R$${precoEtiqueta + (precoEtiqueta * 0.1)}`)
}