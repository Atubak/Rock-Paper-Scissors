



/* 
Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/


/* write an array that has rock, paper and scissors as elements */
/* make it that one of the array elements will get printed randomly*/



/* let testArray = ["banana", "apple", "cherry", "pear", "orange", "durian"];

let randomArrayElement = testArray[Math.floor(Math.random() * testArray.length)];
*/

function computerPlay() {
    let rpsArray = ["rock", "paper", "scissors"];
    let computerMove = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerMove;
}

/*
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
*/
 

function playRound (playerSelection, computerSelection) {

    
    console.log(`It's ${playerSelection} versus ${computerSelection}!`);


    
   if (playerSelection === computerSelection) {
       return "Wow, It's a tie!";
   } else if (
       (playerSelection + computerSelection === "rockscissors") ||
       (playerSelection + computerSelection === "scissorspaper") || 
       (playerSelection + computerSelection === "paperrock")
       ) { 
        return "Nice, You won!";
   } else if (
        (playerSelection + computerSelection === "scissorsrock") ||
        (playerSelection + computerSelection === "paperscissors") || 
        (playerSelection + computerSelection === "rockpaper")
    ) { 
     return "Damn, you lost!";
    } else {
        return "Please make sure you enter one of these moves: Rock, Paper, or Scissors";
    }
    

} 

/* Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

if playRound() === "wow its a tie", then add a point to both the player and the computer

if playRound() === "nice you won", then add a point only to the player

if playRound() === "damn you lost", then add a point only to the computer
*/

function game () {

    let playerScore = 0
    let computerScore = 0

    console.log(`You now have ${playerScore} points against the computer's ${computerScore}`);

    /* assigning the player's move and the computer's move */
    const playerSelection = "rock";
    const computerSelection = computerPlay();




    function playRound (playerSelection, computerSelection) {

    
        console.log(`It's ${playerSelection} versus ${computerSelection}!`);


    
     if (playerSelection === computerSelection) {
            return "Wow, It's a tie!";
     } else if (
       (playerSelection + computerSelection === "rockscissors") ||
       (playerSelection + computerSelection === "scissorspaper") || 
       (playerSelection + computerSelection === "paperrock")
       ) { 
            return "Nice, You won!";
     } else if (
        (playerSelection + computerSelection === "scissorsrock") ||
        (playerSelection + computerSelection === "paperscissors") || 
        (playerSelection + computerSelection === "rockpaper")
        ) { 
            return "Damn, you lost!";
        } else {
            return "Please make sure you enter one of these moves: Rock, Paper, or Scissors";
        }
    

    } 


    console.log(playRound(playerSelection, computerSelection));
   
    
}


















/* call the function */
console.log(game());
