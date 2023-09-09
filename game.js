
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



function getPlayerSelection () {
   
}


function round (player, choice) {
    if (player == choice) return "draw";
    else if (computer == rock) {
        if (player == paper) {
        p++ }
        else c++;
    } else if (computer == paper) {
        if (player == rock) {
            c++
        } else p++
    } else if (computer == scissors) {
        if (player == rock) {
        p++ } else c++;
    }
}


