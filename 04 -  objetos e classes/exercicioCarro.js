/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
    Crie um método que dado a quantidade de Km e o preço do combustível nos dê o valor gasto em reais para realizar
    este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGasto(distancia, precoCombustivel) {
        return precoCombustivel * this.gastoMedio * distancia;
    }
}


const mobi = new Carro('Fiat', 'Vermelho', 1 / 12);
mobi.calcularGasto(70, 5);
console.log(mobi.calcularGasto(70, 5).toFixed(2));
