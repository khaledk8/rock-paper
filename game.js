
let c = 0;
let p = 0;


let rockChoice = document.querySelector("#rock")
let paperChoice = document.querySelector("#paper")
let scissorsChoice = document.querySelector("#scissors")
let leftChoice = document.querySelector("#left")
let rightChoice = document.querySelector("#right")
let pScore = document.querySelector(".pscore")
let cScore = document.querySelector(".cscore")


function getComputerChoice () {
    let number = Math.random()
    number = Math.round(number * 100) / 100
    console.log(number)
    if (number <= 0.33) {
        rightChoice.textContent = "Rock"
        return "rock"
    } else if (number <= 0.66) {
        rightChoice.textContent = "Paper"
        return "paper"
    } else {
        rightChoice.textContent = "Scissors"
        return "scissors"
    }
}


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
    
    if (player == choice) { return } 
    else if (choice == "rock") {
        if (player == "paper") {
        p++ } else {c++;}
    } else if (choice == "paper") {
        if (player == "rock") {
            {c++}
        } else p++
    } else if (choice == "scissors") {
        if (player == "rock") {
        p++ } else {c++;}
    }
}
let result = document.querySelector(".result")
let overlay = document.querySelector("#overlay")
let popup = document.querySelector(".popup")
let start = document.querySelector(".start")

start.addEventListener('click', function () {
    overlay.classList.remove("active")
    popup.classList.remove("active")
    c = p = 0;
    pScore.textContent = p
    cScore.textContent = c
    rightChoice.textContent = "Choice"
    leftChoice.textContent = "Choice"

})

function game (pchoice) {
    
   leftChoice.textContent = pchoice[0].toUpperCase() + pchoice.slice(1);
   round(pchoice, getComputerChoice());
   pScore.textContent = p
   cScore.textContent = c

   if (c == 5 || p == 5) {
    if (c == 5) {
        result.textContent = "Computer wins!"
    } else {
    result.textContent = "You win!"
    }
    overlay.classList.add("active")
    popup.classList.add("active")
    
}

}


