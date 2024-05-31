
class Pessoa {

    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minhda idade é ${this.idade}!`);
    }

}

const marcio = new Pessoa('Márcio', 33);

marcio.nome = 'Márcio Cavalcanti'
marcio.idade = 33

marcio.descrever();
