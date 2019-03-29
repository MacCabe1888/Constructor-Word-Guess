const Letter = require("./Letter");

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// This loop creates a new Letter object for each letter of the alphabet and assigns it to a newly declared eponymous variable.
// Looping this general form through the alphabet array is more concise than declaring all 26 letter variables explicitly.
for (index = 0; index < alphabet.length; index++) {
  // This code is written as a string in order to yield the appropriate syntax for each variable declaration.
  let str = `${alphabet[index].toLowerCase()} = new Letter(id="${alphabet[index]}")`;
  // The eval function evaluates and executes the code in the string "str."
  eval(str);
}

class Word {
  constructor(characters = [], lettersGuessed = [], wrongGuessesRemaining = 5, wordGuessed = false) {

    this.characters = characters;
    this.lettersGuessed = lettersGuessed;
    this.wrongGuessesRemaining = wrongGuessesRemaining;
    this.wordGuessed = wordGuessed;

    this.letters = [];
    // Iff a character has a defined "id" property (i.e., iff it is a Letter object), then it will be treated as a letter to be guessed.
    for (let i = 0; i < this.characters.length; i++) {
      if (characters[i].id !== undefined) {
        this.letters.push(characters[i]);
      }
    }

    this.lettersRemaining = this.letters.length;

    this.display = function() {
      let wordString = "";
      for (let i = 0; i < this.characters.length; i++) {
        // No need to invoke the letter display function here,
        let thisChar = this.characters[i];
        // as JavaScript will call it automatically on concatenation because it is named "toString."
        wordString = wordString.concat(thisChar, " ");
      }
      return wordString;
    };

    this.check = function(char) {
      if (!this.lettersGuessed.includes(char)) {
        this.lettersGuessed.push(char);
        let correctGuess = false;
        for (let i = 0; i < this.letters.length; i++) {
          this.letters[i].check(char);
          if (char === this.letters[i].id) {
            correctGuess = true;
            this.lettersRemaining--;
          }
        }
        if (correctGuess === true) {
          console.log("\nCorrect!");
        } else {
          this.wrongGuessesRemaining--;
          if (this.wrongGuessesRemaining === 1) {
            console.log(`\nIncorrect! ... Only one wrong guess remaining!!!`);
          } else {
            console.log(`\nIncorrect! ${this.wrongGuessesRemaining} wrong guesses remaining!`);
          }
        }
        if (this.lettersRemaining === 0) {
          this.wordGuessed = true;
        }
      }
    };

  }
}

module.exports = Word;
module.exports.alphabet = alphabet;
