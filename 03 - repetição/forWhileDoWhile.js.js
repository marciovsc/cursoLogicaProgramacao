//for: O laço for é utilizado para executar um bloco de código várias vezes, de acordo com uma condição específica.

const numeros = [1, 2, 3, 4, 5];

for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//while: O laço while é utilizado quando não sabemos quantas vezes precisamos executar uma ação.

let jogadas = 0;
let cara = false;

while(!cara) {
  jogadas++;
  cara = Math.random() < 0.5;
}

console.log(`A moeda caiu cara após ${jogadas} jogadas!`);

//do-while: O laço do-while é um tipo de laço while que sempre executa pelo menos uma vez o bloco de código dentro do loop.

let numero;

do {
  numero = prompt('Digite um número entre 1 e 10:');
} while(numero < 1 || numero > 10);

console.log(`Você digitou o número ${numero}.`);
