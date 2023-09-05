let p = 0
let c = 0


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
        console.log("Draw!")
        return "Draw!"
    } else if ((player == "rock") && (computer == "paper")) {
        c++
        console.log("You Lose! Paper beats Rock")
        return "You Lose! Paper beats Rock"
    } else if ((player == "paper") && (computer == "rock")) {
        p++
        console.log("You Win! Paper beats Rock")
        return "You Win! Paper beats Rock"
    } else if ((player == "rock") && (computer == "scissors")) {
        p++
        console.log("You Win! Rock beats Scissors")
        return "You Win! Rock beats Scissors"
    } else if ((player == "scissors") && (computer == "rock")) {
        c++
        console.log("You Lose! Rock beats Scissors")
        return "You Lose! Rock beats Scissors"
    } else if ((player == "scissors") && (computer == "paper")) {
        p++
        console.log("You Win! Scissors beats paper")
        return "You Win! Scissors beats paper"
    } else if ((player == "paper") && (computer == "scissors")) {
        c++
        console.log("You Lose! Scissors beats paper")
        return "You Lose! Scissors beats paper"
    }
}

function game () {
    playRound(getPlayerSelection(), getComputerChoice())
    playRound(getPlayerSelection(), getComputerChoice())
    playRound(getPlayerSelection(), getComputerChoice())
    playRound(getPlayerSelection(), getComputerChoice())
    playRound(getPlayerSelection(), getComputerChoice())
    if (p > c) {
        console.log("You Won!")
    } else if (c > p) {
        console.log("You Lost!")
    } else if (c == p) {
        console.log("You Drew with the Computer!")
    }


}

game()
