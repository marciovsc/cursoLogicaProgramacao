let userName = getFirstName("Márcio Cavalcanti") //o split cortou os espaços e criou o vetor [Márcio, Cavalcanti].
                                                                                            // 0    ,      1  -- posições.
console.log("Seja bem vindo " + userName)



function getFirstName(name) {
    let firstName = name.split(" ")[0] //a função split vai cortar os espaços e vai nos dar a posição zero.
    return firstName
} //ver a função do split.char