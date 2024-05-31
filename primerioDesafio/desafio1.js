
let nome = "Aragorn"
let quantidadeExperiencia = 5500
let nivelHeroi;

switch (true) { //usar o true quando for avaliar expressões lógicas no case;

    case (quantidadeExperiencia <= 1000):
        nivelHeroi = "Ferro";
        break;
    case (quantidadeExperiencia >= 1001 && quantidadeExperiencia <= 2000):
        nivelHeroi = "Bronze";
        break;
    case (quantidadeExperiencia >= 2001 && quantidadeExperiencia <= 5000):
        nivelHeroi = "Prata";
        break;
    case (quantidadeExperiencia >= 5001 && quantidadeExperiencia <= 7000):
        nivelHeroi = "Ouro";
        break
    case (quantidadeExperiencia >= 7001 && quantidadeExperiencia <= 8000):
        nivelHeroi = "Platina";
        break;
    case (quantidadeExperiencia >= 8001 && quantidadeExperiencia <= 9000):
        nivelHeroi = "Ascendente";
        break;
    case (quantidadeExperiencia >= 9001 && quantidadeExperiencia <= 10000):
        nivelHeroi = "Imortal";
        break;
    default:
        nivelHeroi = "Radiante";
}
console.log("O Herói de nome " + nome + " está no nível de " + nivelHeroi + "!!")

