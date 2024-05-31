
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minhda idade é ${this.idade}!`);
    }
}

function compararPessoas(p1, p2) {

    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} tem a mesma idade de ${p2.nome}`);
    }
}

const marcio = new Pessoa('Márcio Cavalcanti', 33);
const raissa = new Pessoa('Raíssa Pena', 33);

compararPessoas(marcio, raissa);