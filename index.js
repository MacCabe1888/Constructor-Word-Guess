const Word = require("./Word");

const inquirer = require("inquirer");

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

wordArr = [
new Word(characters = [j,a,v,a,s,c,r,i,p,t]),
new Word(characters = [n,o,d,e,".",j,s]),
new Word(characters = [c,l,a,s,s]),
new Word(characters = [l,e,t,t,e,r]),
new Word(characters = [c,o,n,s,t,r,u,c,t,o,r]),
new Word(characters = [f,u,n,c,t,i,o,n]),
new Word(characters = [r,e,t,u,r,n]),
new Word(characters = [m,o,d,u,l,e,".",e,x,p,o,r,t,s]),
new Word(characters = [c,o,n,s,t,a,n,t]),
new Word(characters = [r,e,q,u,i,r,e]),
new Word(characters = [a,l,p,h,a,b,e,t]),
new Word(characters = [a,r,r,a,y]),
new Word(characters = [i,n,d,e,x]),
new Word(characters = [l,e,n,g,t,h]),
new Word(characters = [l,o,w,e,r,c,a,s,e]),
new Word(characters = [e,v,a,l,u,a,t,e]),
new Word(characters = [c,h,a,r,a,c,t,e,r,s]),
new Word(characters = [u,n,d,e,f,i,n,e,d]),
new Word(characters = [c,o,n,c,a,t,e,n,a,t,i,o,n]),
new Word(characters = [s,t,r,i,n,g]),
new Word(characters = [i,n,c,l,u,d,e,s]),
new Word(characters = [c,o,n,s,o,l,e,".",l,o,g]),
new Word(characters = [i,n,q,u,i,r,e,r]),
new Word(characters = [j,o,i,n]),
new Word(characters = [p,r,o,m,p,t]),
new Word(characters = [m,a,t,h,".",f,l,o,o,r]),
new Word(characters = [m,a,t,h,".",r,a,n,d,o,m])
];

game(wordArr[Math.floor(Math.random() * wordArr.length)]);
