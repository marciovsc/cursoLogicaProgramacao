/* Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis. Sendo elas: 
1. Preço do etanol;
2. Preço da gasolina;
3. Tipo do combustível usado;
4. Gasto médio de combustível do carro por km;
5. Distância em km da viagem;
Imprima no console o valor que será gasto para realizar esta viagem. */
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';
const gastoCombustivel = 10;
const distanciaEmKm = 100;
const totalGastoEt = precoEtanol / gastoCombustivel * distanciaEmKm
const totalGastoGas = precoGasolina / gastoCombustivel * distanciaEmKm

if (tipoCombustivel === 'Etanol') {
    console.log('O gasto se o combustível for Etanol é: ', totalGastoEt.toFixed(2))
} else {
    console.log('O gasto se o combustível for Etanol é: ', totalGastoGas.toFixed(2))
}


