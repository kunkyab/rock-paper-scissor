function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
function getComputerChoice(){
    const choices = ["Rock","paper","scissor"];
    const random_choices =   Math.floor(Math.random()*choices.length);
    console.log(random_choices);
}

  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));