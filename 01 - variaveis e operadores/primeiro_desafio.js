
const preco_comb = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const valorTotal = preco_comb / kmPorLitros * distanciaEmKm;

console.log(valorTotal.toFixed(2));

/*toFixed serve para converter o valor para um texto e o numero como parametro 
será a quantidade de numeros após a casa decimal.*/