let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
    
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win! &#x1F525`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('green-glow') }, 300);
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}. You lose... &#x1F4A9`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('red-glow') }, 300);
}

function draw(user, computer) {
    result_p.innerHTML = "Draw";
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('gray-glow') }, 300);
}

function game(userChoice) {
    computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        //Cases where user wins
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        //Cases where computer wins
        case "sr":
        case "rp":
        case "ps":
        //Cases where it's a draw
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);

    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}
main();
