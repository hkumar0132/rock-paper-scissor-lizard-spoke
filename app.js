var userScore = document.getElementById("user-score");
var computerScore = document.getElementById("computer-score");

//querySelector selects first class with mentioned name
var resultMessage = document.querySelector(".result > p");
const rockSelected = document.getElementById("r");
const paperSelected = document.getElementById("p");
const scissorSelected = document.getElementById("s");
const lizardSelected = document.getElementById("l");
const spockSelected = document.getElementById("(sp)");

/*
*Returns computer choice based on random number generated from [0, 1, 2]
*r - rock
 p - paper
 s - scissor
 l - lizard
 sp - spock
*/

function getComputerChoice() {
    var choices = ["r", "p", "s", "l", "(sp)"];
    var randomIndex = Math.floor(Math.random() * 5);
    var computerChoice = choices[randomIndex];

    return computerChoice;
}

function getCorrespondingWord(letter) {

    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    if(letter == "s") return "Scissor";
    if(letter == "l") return "Lizard";

    return "Spock";
    
}

function win(userChoice, computerChoice) {

    var mySound = new Audio("./sounds/win.mp3");
    mySound.play();

    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);

    userScore.innerText++;
    const userChoiceTemp = getCorrespondingWord(userChoice);
    const computerChoiceTemp = getCorrespondingWord(computerChoice);
    resultMessage.innerText = `${userChoiceTemp} beats ${computerChoiceTemp}. You win!`;

}

function lose(userChoice, computerChoice) {

    var mySound = new Audio("./sounds/lose.mp3");
    mySound.play();

    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);

    computerScore.innerText++;
    const userChoiceTemp = getCorrespondingWord(userChoice);
    const computerChoiceTemp = getCorrespondingWord(computerChoice);
    resultMessage.innerText = `${computerChoiceTemp} beats ${userChoiceTemp}. You lose!`;

}

function draw(userChoice, computerChoice) {

    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300);

    userChoiceTemp = getCorrespondingWord(userChoice);
    computerChoiceTemp = getCorrespondingWord(computerChoice);
    resultMessage.innerText = `${userChoiceTemp} is equal to ${computerChoiceTemp}. It's a draw!`;

}

//Calls function corresponding to win, lose or draw

function game(userChoice) {

    var computerChoice = getComputerChoice();
    switch(userChoice+computerChoice) {
        case "rs":
        case "rl":
        case "pr":
        case "p(sp)":
        case "sp":
        case "sl":
        case "lp":
        case "l(sp)":
        case "(sp)s":
        case "(sp)r":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "lr":
        case "rp":
        case "(sp)p":
        case "ps":
        case "ls":
        case "pl":
        case "(sp)l":
        case "s(sp)":
        case "r(sp)":
            lose(userChoice, computerChoice);
            break;
        //Covers equal cases - ss, pp, ll, rr, (sp)(sp)
        default:
            draw(userChoice, computerChoice);
    }

}

function main() {

    rockSelected.addEventListener("click", () => game("r"));
    paperSelected.addEventListener("click", () => game("p"));
    scissorSelected.addEventListener("click", () => game("s"));
    lizardSelected.addEventListener("click", () => game("l"));
    spockSelected.addEventListener("click", () => game("(sp)"));
   
}

main();