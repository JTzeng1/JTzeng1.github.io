let slotBarries = ["🍊","🍍","🍓","🥭","🍍","🥝","🍒","🍊","🍍","🍓","🥭","🍍","🥝","🍒","🍊","🍍","🍓","🥭","🍍","🥝","🍒","🍊","🍍","🍓","🥭","🍍","🥝","🍒","🍊","🍍","🍓","🥭","🍍","🥝","🍒","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍","🍍",]; // having the same sybols will give a higher chance of winning
let totalMoney = 1000;


document.querySelector("#spin").addEventListener("click", slotterRush);
// to add words to the screen with a value use tidles `` and ${} the extra  $ is for the dollar sign
document.querySelector("#total").textContent = `Your Money: $${totalMoney}`;
document.querySelector("#cashIn").addEventListener("click", cashIn);

document.querySelector("#bet").value = "";


function slotterRush(){
    let s1 = slotBarries[Math.floor(Math.random() * slotBarries.length)];
    let s2 = slotBarries[Math.floor(Math.random() * slotBarries.length)];
    let s3 = slotBarries[Math.floor(Math.random() * slotBarries.length)];

    document.getElementById("slot1").textContent  = s1;
    document.getElementById("slot2").textContent  = s2;
    document.getElementById("slot3").textContent  = s3;

    let betInput = document.querySelector("#bet").value;
    // parseInt converts a string to a number which is useful since it allows us to do math with a string
    let bet = parseInt(betInput);
    let feedback = document.querySelector("#feedback");


    if (!betInput || bet < 5) {
        feedback.textContent = "Enter a valid bet (min $5). ";
        feedback.style.color = "red";
        return;

    }
    if (bet > totalMoney) {
        feedback.textContent = "Not enough money!";
        feedback.style.color = "red";    
        return;
    }
    if (s1 === s2 && s2 === s3) {
        let winnings =bet * 3; // im not sure if i should do bet * 3 or bet * 2
        totalMoney += winnings;
        feedback.textContent  = `You won $${winnings}`;
        feedback.style.color = "green";

    } else {
        let loss = bet *3;
        if (loss > totalMoney) {
            loss = totalMoney; // if they bet more than they have just take all their money
        }
        totalMoney -= loss;
        feedback.textContent = `You lost $${loss}.`;
        feedback.style.color = "red";


    }
    //show the total amount of money the player has in the sctreen
    document.querySelector("#total").textContent = `Your Money: $${totalMoney}`;

    if (totalMoney < 100) {
        feedback.textContent += " Game Over!";
        endGame();
    }

}

function cashIn() {
    //for any variable with a string use a tidle `` and ${} to add the variable not "" or '' it wont work
    feedback.textContent = `You cashed out with $${totalMoney}. Thanks for playing!`;
    feedback.style.color = "gold";
    endGame()
}
function endGame() {
    // display ="none" hides the Spin and Cash In buttons when the game ends
    document.querySelector("#spin").style.display = "none";
    document.querySelector("#cashIn").style.display = "none";

    // inline displays the Reset button when the game ends while it the other buttons are hide 
    document.querySelector("#reset").style.display = "inline";
}

document.querySelector("#reset").addEventListener("click", function() {
    // reloads the page to start a new game most easy way to reset everything
    location.reload();
});
