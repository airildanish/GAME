const  choices =["rock", "paper", "scissors"];
document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function(){
    const playerChoice = this.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice == computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lost!";
    }
    document.getElementById("result").textContent = `Computer chose ${computerChoice}. ${result}`;
    });
});


