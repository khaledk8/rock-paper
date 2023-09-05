


function getComputerChoice () {
    let number = Math.random()
    number = Math.round(number * 100) / 100
    console.log(number)
    if (number <= 0.33) {
        return "rock"
    } else if (number <= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}


function getPlayerSelection () {
    let choice = prompt()
    choice = choice.toLowerCase()
    return choice
}



console.log(getComputerChoice())
getPlayerSelection()