/* 
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

    Media = (nota 1 + nota 2 + nota 3) / 3

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre
*/

const n1 = 10
const n2 = 5.6
const n3 = 7

const media = ((n1 + n2 + n3) / 3).toFixed(2)

if (media < 5){
    console.log("Reprovado! Média: " + media)
} else if (media >= 5 && media <= 7){
    console.log("Recuperação! Média: " + media)
} else {
    console.log("Passou de ano! Média: " + media)
}
