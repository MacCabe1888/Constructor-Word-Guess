# Constructor-Word-Guess
A command-line interface word guess game. Built with constructor functions.

### Overview

This CLI game challenges you to correctly guess all the letters in a word, one word at a time. Upon completing a word, you will be given a new word to guess, with your allowance of incorrect guesses replenished. You play till you lose – i.e., until you reach five incorrect guesses on any given word.

The code makes use of constructors, which – by establishing a predetermined set of rules that all words must follow in order to operate within the game's logic – allow you to easily build on the list of words that can appear in the game by simply adding a "new Word" to the wordArrays.js file (see "Adding Words" below for details).

### Technical Approach

The use of constructors facilitated a modular approach to writing the game's code, which is separated into four distinct JavaScript files:
1. "Letter.js" contains the constructor used to build a Letter object for each letter of the alphabet. This is essential to the purpose of hiding each letter until the precise moment when it is correctly guessed by the user.
2. "Word.js" contains the constructor used to build a Word object for each word (or potentially phrase) added to the game. A Word object consists of an array of characters, including letters (which behave according to the Letter object rules established by the Letter constructor) and, optionally (as in the case of, e.g., the hyphen in "hurdy-gurdy"), non-letter characters which are revealed by default and which need not be guessed by the user (because, unlike the letters in the character array, they are not variables representing Letter objects, but merely inert strings).
3. "index.js" contains the rules governing win and loss conditions (and consequences – getting a new word if you win or, if you lose, getting a "GAME OVER" message and having to restart the program to continue playing) as well as the process for navigating through the user interface, which makes use of the inquirer npm package in order to handle both the user's word category selection and the user's letter inputs when the user is trying to guess a word.
4. "wordArrays.js" contains two big arrays: one containing a description for each category, and another containing the word categories, which are themselves simply arrays of Word objects. Each Word object, in turn, contains a character array.

### User Interface Walkthrough

1. In your CLI, navigate to the directory containing "index.js."
2. Execute the command "node index.js."
3. Answer the inquirer prompt by choosing which category of words you would like to be asked to guess. "ALL OF THE ABOVE" pools the words from all categories together. "SURPRISE ME" gives you a single category chosen at random.
4. You'll be given your first word. To guess a letter, simply type it (uppercase or lowercase) in the CLI and then press "enter"/"return." The only valid input is a single letter; you cannot guess multiple letters at once.
5. Fail to guess even one word before guessing five wrong letters, and it's game over. Survive as long as you can!

### Adding Words

* To add a new word to an existing category, simply add a new element of the form "new Word(characters = [s,p,e,l,l," ",w,o,r,d," ",o,r," ",p,h,r,a,s,e," ",h,e,r,e])" to the array of the form "wordArr[index]" which corresponds to the desired category.
  - Remember to add a comma at the end of the preceding Word object (if there is not one already) to indicate a new array element.
  - Remember to add a comma at the end of the Word object you are adding if it is not the last element in the array.
  - Remember to separate the new Word object's characters with commas, as they must be separate array elements.
  - Remember to enclose any non-letter characters (including spaces) in quotation marks. This ensures that they will be interpreted as inert strings rather than as undefined variables.
* To add a new word category entirely, scroll down to the last array of Word objects and check its index number. Then, preferably directly beneath said array (for the sake of clear organization), add a new element to wordArrDescriptions, followed by a new wordArr element, as follows:
  - wordArrDescriptions[1 + index number of last array/category] = "Name or Description of New Category Goes Here";
  - wordArr[1 + index number of last array/category] = []; (<-- list your Word objects separated by commas inside these brackets to add to the new Word array)

### Demo

A video demonstration of the game is located in the "demo" folder.

<video width="824" height="494" controls>
  <source src="demo/Demo.webm" type="video/webm">
</video>
