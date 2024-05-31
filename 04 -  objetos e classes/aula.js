
class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {

        this.nome = 'Márcio Cavalcanti';
        this.idade = 33;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minhda idade é ${this.idade}!`);
    }

}

const marcio = new Pessoa('Márcio Cavalcanti', 33);


console.log(marcio);

