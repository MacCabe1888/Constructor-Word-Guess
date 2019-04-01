const Word = require("./Word");
const categories = require("./wordArrays");

const inquirer = require("inquirer");

let wordArr = [];

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "CHOOSE A CATEGORY:",
        choices: categories.descriptions.concat("ALL OF THE ABOVE", "SURPRISE ME"),
        default: categories.descriptions[Math.floor(Math.random() * categories.descriptions.length)]
      }
    ]).then(function(inquirerResponse) {
      let wordArrDescription = inquirerResponse.choice;
      for (let index = 0; index < categories.descriptions.length; index++) {
        if (categories.descriptions[index] === wordArrDescription) {
          wordArr = categories[index];
        }
      }
      if (wordArrDescription === "ALL OF THE ABOVE") {
        for (let index = 0; index < categories.descriptions.length; index++) {
          for (let j = 0; j < categories[index].length; j++) {
            wordArr.push(categories[index][j]);
          }
        }
      }
      if (wordArrDescription === "SURPRISE ME") {
        wordArr = categories[Math.floor(Math.random() * categories.length)];
      }
      game(wordArr[Math.floor(Math.random() * wordArr.length)]);
    });
}

function game(wordToGuess) {
  if (wordToGuess.lettersGuessed.length > 0) {
    console.log(`\nLetters guessed: ${wordToGuess.lettersGuessed.join(" ")}`);
  }
  console.log(`\n${wordToGuess.display()}\n`);
  inquirer
    .prompt([
      {
        type: "input",
        name: "response",
        message: "Guess a letter!"
      }
    ]).then(function(inquirerResponse) {
      let guess = inquirerResponse.response.toUpperCase();
      if (wordToGuess.lettersGuessed.includes(guess)) {
        console.log(`\nInvalid! You have already guessed "${guess}"!`);
        game(wordToGuess);
      } else if (Word.alphabet.includes(guess)) {
        wordToGuess.check(guess);
        if (wordToGuess.wrongGuessesRemaining === 0) {
          console.log(`\nLetters guessed: ${wordToGuess.lettersGuessed.join(" ")}`);
          console.log(`\n${wordToGuess.display()}\n`);
          for (index = 0; index < Word.alphabet.length; index++) {
            let str = `${Word.alphabet[index].toLowerCase()}.guessed = false`;
            eval(str);
          }
          wordToGuess.lettersGuessed = [];
          wordToGuess.wrongGuessesRemaining = 5;
          wordToGuess.wordGuessed = false;
          wordToGuess.lettersRemaining = wordToGuess.letters.length;
          return console.log("GAME OVER");
        }
        if (wordToGuess.wordGuessed === true) {
          console.log(`\nLetters guessed: ${wordToGuess.lettersGuessed.join(" ")}`);
          console.log(`\n${wordToGuess.display()}\n`);
          for (index = 0; index < Word.alphabet.length; index++) {
            let str = `${Word.alphabet[index].toLowerCase()}.guessed = false`;
            eval(str);
          }
          wordToGuess.lettersGuessed = [];
          wordToGuess.wrongGuessesRemaining = 5;
          wordToGuess.wordGuessed = false;
          wordToGuess.lettersRemaining = wordToGuess.letters.length;
          console.log("You got it right! Next word:");
          game(wordArr[Math.floor(Math.random() * wordArr.length)]);
        } else {
          game(wordToGuess);
        }
      } else {
        console.log("\nInvalid! Please enter *individual letters* only!")
        game(wordToGuess);
      }
    });
}

start();
