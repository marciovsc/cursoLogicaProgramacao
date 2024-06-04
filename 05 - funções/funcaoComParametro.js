torrar("pão de forma", "felipe")
torrar("pão integral", "márcio")
//let nome = "felipe"
//var nome = "felipe"
//o var declara a váriavel de maneira global(n é muito recomendado)

function torrar(pao, nome) { //o valor de "pão de forma" vai ser guardado dentro do parâmetro pao.
    console.log("torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)

   //console.log(nome) //o programa n entende o valora da váriavel nome, porque ela não foi inicializada no escopo.
}   //dentro das chaves é o chamado escopo da função.

//interpolação de strings(strings com valores que vão ser substituídos por váriaveis), 
//deixar os valores entre crase `` e antes de colocar o parametro usar o ${parametro}.

//console.log(pao) //vai dar erro, "nome is not defined" pois o parametro/váriavel chamada dntro de uma função 
//só existe dentro das chaves.

//geralmente quando se passa parametros é quando se deseja que uma mesma função tenha resultados diferentes.
