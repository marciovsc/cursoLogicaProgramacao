
const nota1 = 8;
const nota2 = 8;
const nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3;

console.log('Sua média foi:', media.toFixed(2))

if (media < 5) {
    console.log('Reprovado')
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}