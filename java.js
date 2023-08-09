 let playerScore = 0;
 let computerScore = 0;
 let roundWinner;




function playRound1(playerSelection, computerSelection) 
{
     if(playerSelection =="scissor" && computerSelection =="rock")
     {
        roundWinner= "You lose! rock beats scissor";
        computerScore++;
     } 
     else if (playerSelection =="rock" && computerSelection =="paper")
     {
        roundWinner= "You lose! paper beats rock";
     }
     else if(playerSelection=="paper" && computerSelection=="scissor")
     {
     roundWinner= "you lose! scissor cuts paper" ;
     computerScore++;
  }

  else if (playerSelection =="rock"&& computerSelection =="scissor")
  {
    roundWinner="You win! rock beats scissor";
     playerScore++;
  } 

  else if(playerSelection =="scissor" && computerSelection =="paper")
  {
   roundWinner="You win! scissor cuts paper";
    playerScore++;
  }
else if(playerSelection =="paper" && computerSelection=="rock") 
{
    roundWinner= "You win! paper beats rock";
    playerScore++;
}
else{
    roundWinner = "its tie";
}
return roundWinner;


}




function getComputerChoice(){
    const choices = ["rock","paper","scissor"];
    const random_choices =  choices[ Math.floor(Math.random()*choices.length)];
     console.log(random_choices);
    return random_choices;
}

function playRound() {
    const computerSelection = getComputerChoice();
    const  playerSelection = prompt(("enter your choices: ").toLowerCase());
    console.log(playerSelection);
   
    const winner = playRound1(playerSelection, computerSelection);
    console.log(winner);
    
    
}


function game()
 {
    for (let i = 1; i <=5; i++) {
        playRound();

        }

    if(computerScore > playerScore) {
        console.log(`computer won by ${computerScore}`);
    }
    else if (playerScore> computerScore)
    {
        console.log( `you win by ${playerScore}`);
    }
    else{
        console.log("its a tie");
    }
  
}


 

  //console.log(playerSelection);
 
 game();
//  const p = playRound(playerSelection,computerSelection);
// console.log(p);


 

  