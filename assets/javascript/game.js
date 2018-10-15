
var wins = 0;
var guessesLeft = 10;
var lettersUsed = [];
var userAnswer = [];


//linking variables to the ID's in HTML 
var winsText = document.getElementById("wins-text");
var lettersUsedText = document.getElementById("lettersUsed-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var answerText = document.getElementById("answer-text");


var currentWord = ["software", "engineer", "coding", "hypertext", "css", "javascript", "bootcamp", "learn", "game", "portfolio", "website", "frontend", "backend", "server", "error", "language", "career"];


// tells the computer to randomly select an item out of the currentWord array
var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];

// this takes the computers random guess and returns each individual character into a string
var singleLetter = computerGuess.split("");

// takes the individual letter array and replaces it with an underscore for a hidden effect
var compHidden = singleLetter.map(function (x) {
    return "_";
});

console.log(computerGuess)
console.log(singleLetter)
console.log(compHidden)

function newGame() {
    guessesLeft = 11;
    lettersUsed = [];
    userAnswer = [];
    computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
    singleLetter = computerGuess.split("");
    compHidden = singleLetter.map(function (x) {
        return "_";
    });
}

//invokes function once user releases a key
document.onkeyup = function (event) {

    // saves the users key input and makes it lowercase
    var userInput = event.key.toLowerCase();

    if (lettersUsed.indexOf(userInput) === -1) {

        if(guessesLeft === 0){
            console.log("You are out of guesses!");
            newGame();
            return;
        }

        lettersUsed.push(userInput);

        if(computerGuess.indexOf(userInput) !== -1){
            for (var i = 0; i < computerGuess.length; i++) {
    
                if (userInput === singleLetter[i]) {
                    compHidden[i] = userInput;
                    userAnswer[i] = userInput;
    
                } else if (userInput === singleLetter[0]) {
                    compHidden[0] = userInput.toUpperCase();
                    compHidden[0].toUpperCase();
                }
    
            };
        }else {
            guessesLeft--;
        }


        if (guessesLeft < 2) {
            newGame();
        }

        if (JSON.stringify(userAnswer) === JSON.stringify(singleLetter)) {
            wins++;
            newGame();
            guessesLeft--;
        };

        // Taking the variables that are linked to the HTML and replacing with text content 
        winsText.textContent = "Wins: " + wins;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        lettersUsedText.textContent = "Letters Used: " + lettersUsed;
        answerText.textContent = compHidden.join(" ");
    }
};
