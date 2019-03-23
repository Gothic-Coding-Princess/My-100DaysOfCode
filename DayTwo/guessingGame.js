// create secret number
var secretNumber = 4;

// ask user for guess
var guess = prompt("Choose a number between 1 and 10:");

// check guess
if (guess <= 0 || guess > 10) {
    alert("ERROR: Guess is out of bounds. ");
}
else if(guess < secretNumber) {
    alert("Your guess is too low.");
}
else if (guess > secretNumber) {
    alert("Your guess is too high.");
}
else {
    alert("Correct guess! The number was " + secretNumber);
}