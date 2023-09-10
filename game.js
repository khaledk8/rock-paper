
let c = 0;
let p = 0;

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

let rockChoice = document.querySelector("#rock")
let paperChoice = document.querySelector("#paper")
let scissorsChoice = document.querySelector("#scissors")

rockChoice.addEventListener('click', function () {
    game("rock")
})

paperChoice.addEventListener('click', function () {
    game("paper")
})

scissorsChoice.addEventListener('click', function () {
    game("scissors")
})



/* function getPlayerSelection (choice) {
    round (choice, getComputerChoice())
   
} */


function round (player, choice) {
    if (player == choice) return "draw";
    else if (choice == rock) {
        if (player == paper) {
        p++ }
        else c++;
    } else if (choice == paper) {
        if (player == rock) {
            c++
        } else p++
    } else if (choice == scissors) {
        if (player == rock) {
        p++ } else c++;
    }
}


function game (pchoice) {
   /*  if c p finish game and show popup */
   round(pchoice, getComputerChoice());
}


