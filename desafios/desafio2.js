

function winningBalance(victory, defeat) {
    return victory - defeat
    
}

function rankedDefinition(ranked) {

    if(ranked < 10) {
        return "Iron"
    }
    else if (ranked >= 11 && ranked <= 20) {
        return "Bronze"
    }
    else if (ranked >= 21 && ranked <= 50) {
        return "Silver"
    }
    else if (ranked >= 51 && ranked <= 80) {
        return "Gold"
    }
    else if (ranked >= 81 && ranked <= 90) {
        return "Diamond"
    } 
    else if (ranked >= 91 && ranked <= 100) {
        return "Legendary"
    }
    else {
        return "Immortal"
    }   
}


let ranked = winningBalance(100, 25) // criei a variável para ele receebr o retorno de V - D e entrar no IF e ELSE.
let result = winningBalance(100, 25)

console.log(`The Hero has a balance of ${result} and is at the level of ${rankedDefinition(ranked)}!`)
 
