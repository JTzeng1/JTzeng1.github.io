document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

// alert("running external JS Code!")
let myLuckyNumber = 7;
//let randomNumber (the let method)cant be within a function
let randomNumber;
let attempts = 0;

//change the color of the heading
//document.querySelector can modify htmls(heading, p, div) or class, and id
// document.querySelector("h1").style.color= "red";

initializeGame();

function initializeGame(){
    randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";
  
   //adding focus to textbox
   document.querySelector("#playerGuess").focus();

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus();
   playerGuess.value = "";

   let feedback = document.querySelector("#feedback");
   feedback.textContent = "";

   document.querySelector("#guesses").textContent ="";
}


let winCount = 0;
let loseCount = 0

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value
    console.log("Player guess:" + guess);
    if(guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("Attempts:" + attempts);
    feedback.style.color = "orange";
    if(guess == randomNumber) {
        feedback.textContent = "You guessed it! You Won🥳";
        feedback.style.color = "darkgreen";
        winCount++;
        scorecount();
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if(attempts === 7) {
        feedback.textContent = "Sorry, you lost! 👎🏽";
        feedback.style.color = "red";
        loseCount++;
        scorecount();
        document.getElementById("displayRandomNumber").textContent = "The number I was looking for was " + randomNumber;
        
        gameOver();
        } else if(guess > randomNumber){
            feedback.textContent = "Guess was high";
        } else {    
            feedback.textContent = "Guess was low";
        }
    }


}
function gameOver(){
        let guessBtn = document.querySelector("#guessBtn");
        let resetBtn = document.querySelector("#resetBtn"); 
        guessBtn.style.display = "none"; //hides Guess button
        resetBtn.style.display = "inline"; //displays Reset button
}

document.querySelector("#resetBtn").addEventListener("click", function()  {
    document.querySelector("#guessBtn").style.display = "inline";
    document.querySelector("#resetBtn").style.display = "none"; 
    initializeGame();

});

function scorecount(){
    document.getElementById("scoreboard").textContent  = "Wins: " + winCount + " lost: " + loseCount;
    

}















