



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
 
/*
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
*/
let results = document.querySelector('#results');

alert("Welcome to the classic game of Rock, Paper, Scissors!")
/* write a prompt to get input from the user */
let userPlay =  "nothing yet";

let buttons = document.querySelectorAll('.playerMove');
buttons.forEach(button => button.addEventListener('click', getBtnAndCallGame));

function getBtnAndCallGame(e) {
    userPlay = e.target.id;

    game();
}

let playerScore = 0
let computerScore = 0




function game () {

    


    /* assigning the player's move and the computer's move */
    let playerSelection = userPlay.toLowerCase();

    let computerSelection = computerPlay();




    function playRound (playerSelection, computerSelection) {

    
    
        //console.log(`It's ${playerSelection} versus ${computerSelection}!`);

        let moves = document.createElement('p');
        moves.textContent = `It's ${playerSelection} versus ${computerSelection}!`;
        results.appendChild(moves); 

    
     if (playerSelection === computerSelection) {
            return "Wow, It's a tie!";
     } else if (
       (playerSelection + computerSelection === "rockscissors") ||
       (playerSelection + computerSelection === "scissorspaper") || 
       (playerSelection + computerSelection === "paperrock")
       ) { 
            ++playerScore; //add the score for this round 
            return "Nice, You won!";
     } else if (
        (playerSelection + computerSelection === "scissorsrock") ||
        (playerSelection + computerSelection === "paperscissors") || 
        (playerSelection + computerSelection === "rockpaper")
        ) { 
            ++computerScore;
            return "Damn, you lost!";
        } else {
            return "Please make sure you enter one of these moves: Rock, Paper, or Scissors";
        }
    

    } 


 //console.log(playRound(playerSelection, computerSelection));

 let roundResult = document.createElement('h3');
 roundResult.textContent = `${playRound(playerSelection, computerSelection)}`;
 results.appendChild(roundResult);

 //console.log(`You now have ${playerScore} point(s) against the computer's ${computerScore}`);

 let pointTally = document.createElement('p');
 pointTally.textContent = `You now have ${playerScore} point(s) against the computer's ${computerScore}`;
 results.appendChild(pointTally);

 
 
 /* END OF ROUND 1 */
 
 


let endGame = document.createElement('h1');


 if (playerScore === 5) {
     endGame.textContent = "Wooohoooo, You won the Championship!!!";
 } else if (computerScore === 5) {
     endGame.textContent = "Oh no! The computer totally wrecked you :(";
 } else if (playerScore === computerScore) {
     return "Wow that was a close call, play again to find out if you can beat the computer!";
 }

 results.appendChild(endGame);

}



/* call the function */
//console.log(game());





/*
let userPlay = "nothing yet";

let buttons = document.querySelectorAll('.playerMove');
buttons.forEach(button => button.addEventListener('click', getBtnAndCallplayRound));

function getBtnAndCallplayRound(e) {
    userPlay = e.target.id;
    console.log(userPlay);
    console.log(playRound(playerSelection, computerSelection));
} 
*/