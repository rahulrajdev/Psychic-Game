// Declare all variables as global variables

// Win starts at 0
var wins = 0; 

// Losses start at 0
var losses = 0; 

// Guesses start at 9
var numGuesses = 9; 

// Computer will be able to choose from any letter 
var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

// ensures that when the page loads, it displays that the number of guesses remaining are equal to 9
window.onload = function (event) {
    document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + numGuesses); 
}

// starts main function of page when user presses a key
document.onkeypress = function(event) { 

    // computer generates a random letter from array computerLetters
    var computerGen = computerLetters[Math.floor(Math.random() * computerLetters.length)]; 

    // user guesses a letter through typing a key and program stores guess inside a variable
    var userGuess = event.key;

    // if-else statement comparing user input to random computer generated letter

    if (userGuess === computerGen) { 
        
        /* congratulates user and user can click to play again(does not reset page, 
            explained at bottom of page. alert is simply used to make sure user is aware that they 
            have guessed the letter correctly) */
        alert("Wow....you beat me....I challenge you again!");
        
        // if user guesses correctly, increments by 1
        wins++;
        
        // displays new value of wins to user
        document.getElementById("wins").innerHTML = ("Wins: " + wins);

        // resets number of guesses to 9
        numGuesses = 9;

        // displays new value of guesses to user
        document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + numGuesses);

        // resetting letters guessed 
        document.getElementById("lettersGuessed").innerHTML = ("Your Guesses So Far: ");
        
    }
    else {

        // if user guesses incorrectly, decrements guess by 1
        numGuesses--;

        // displays new value of wins to user
        document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + numGuesses);

        // appending html to show which letters user has guesses, creating text to append to the html
        var addLetter = document.createTextNode(userGuess + " ");
        
        // appending that html
        document.getElementById("lettersGuessed").appendChild(addLetter);
    }
    
    // if statement to run code when user runs out of guesses
    if (numGuesses === 0) {

        /* alerts user that they were not able to guess correctly 
        and allows them to play again(as before, this does not reset the page) */
    
        alert("Sorry....Game over... You're no match for me! Try again.....IF YOU DARE!");
        // decrement losses by 1
        losses++;

        // displays new value losses to user
        document.getElementById("losses").innerHTML = ("Losses: " + losses);
        
        // resets number of guesses to 9 so user can play again
        numGuesses = 9;

        // displays reset value of guesses to user
        document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + numGuesses);

        // resetting letters guessed 
        document.getElementById("lettersGuessed").innerHTML = ("Your Guesses So Far: ");
     }
};

/* JavaScript is dynamic so once the number of guesses has been reset, 
the user can simply click ok on the alert and enter another key to keep playing the game */
