function aplicarDesconto(valor, desconto) {
    return valor - (valor * desconto);
}

function aplicarJuros(valor, juros) {
    return valor + (valor * juros)
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 0.1));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 0.15));
} else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
} else if (4) {
    console.log(aplicarJuros(precoEtiqueta, 0.1));
} 