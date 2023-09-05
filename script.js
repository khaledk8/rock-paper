


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


function playRound (player, computer) {
    if (player == computer) {
        return "Draw!"
    } else if ((player == "rock") && (computer == "paper")) {
        return "You Lose! Paper beats Rock"
    } else if ((player == "paper") && (computer == "rock")) {
        return "You Win! Paper beats Rock"
    } else if ((player == "rock") && (computer == "scissors")) {
        return "You Win! Rock beats Scissors"
    } else if ((player == "scissors") && (computer == "rock")) {
        return "You Lose! Rock beats Scissors"
    } else if ((player == "scissors") && (computer == "paper")) {
        return "You Win! Scissors beats paper"
    } else if ((player == "paper") && (computer == "scissors")) {
        return "You Lose! Scissors beats paper"
    }
}

