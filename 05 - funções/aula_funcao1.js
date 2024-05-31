function escrevaNome(nome) {
    return 'Meu nome é ' + nome
}

function verificarIdade(idade) {

    if (idade >= 18) {
        console.log(escrevaNome('Márcio ') + 'Maioridade');
    } else {
        console.log(escrevaNome('Márcio ') + 'Menoridade');
    }

}

verificarIdade(15)

