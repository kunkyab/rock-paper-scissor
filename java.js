const options =['rock','paper','scissor'];

function getcomputerChoices() {

  const choice = options[Math.floor(Math.random()*options.length)]
 return choice;
}
function checkWinner(playerSelection,computerSelection) {
  if (playerSelection==computerSelection) {
    return "Tie";
  }
  else if(playerSelection=="rock" && computerSelection== 'scissor'||
  playerSelection =='paper' && computerSelection=='rock' ||
  playerSelection =='scissor'  && computerSelection=='paper'){
    return "Player";
  }
  else{
    return "Computer";
  }
}

function playRound(playerSelection,computerSelection) {
  const result = checkWinner(playerSelection,computerSelection);
   if (result=="Tie")
   {
    return "Its tie";
   }
   else if(result=="Player")
   {
    return `You win! ${playerSelection} beats ${computerSelection}`;

   }
   else{
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
   }

}


function getPlayerChoice() {
  
  let validatedInput = false;
  while(validatedInput==false){
    const choice = prompt("rock paper scissor");
    if (choice==null) {
      continue;
      
    }
    const choiceInLower = choice.toLowerCase();
   // console.log(choiceInLower);
  if (options.includes(choiceInLower)) {

    validatedInput =true;
     return choiceInLower;
    }
  }
}
function game() {

  let playerScore = 0;
  let computerScore = 0; 
  console.log("Welcome to the game");
  for (let i = 0; i <5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getcomputerChoices();
  console.log(playRound(playerSelection,computerSelection));
  console.log("----------------");
  if (checkWinner(playerSelection,computerSelection) =="Player") 
  {
     playerScore++;
  }
  else if(checkWinner(playerSelection,computerSelection) =="Computer")
   { computerScore++;
  }
}
console.log("Game Over");

if(playerScore>computerScore) {
  console.log("you won");
  console.log("player was the winner");
  
}
else if(playerScore<computerScore){
  console.log("You lose");
  
}
else{
  console.log("its a tie");
} 
  
}


game();




//console.log(computerSelection);
