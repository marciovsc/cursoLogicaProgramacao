
const precoEtiqueta = 100;
const formaPagamento = 'Mais de 2x'

if (formaPagamento === 'Débito') {
    const valorTotal = precoEtiqueta * 0.1;
    console.log(precoEtiqueta - valorTotal )
} else if (formaPagamento === 'Dinheiro ou Pix') {
    const valorTotal = precoEtiqueta * 0.15;
    console.log(precoEtiqueta - valorTotal )
} else if (precoEtiqueta === 'Em 2x') {
    console.log(precoEtiqueta)
} else if ('Mais de 2x') {
    const valorTotal = precoEtiqueta * 0.1
    console.log(precoEtiqueta + valorTotal)
} 