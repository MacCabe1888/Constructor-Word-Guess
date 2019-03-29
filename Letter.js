class Letter {
  constructor(id = "", guessed = false) {

    this.id = id;
    this.guessed = guessed;

    // This function processes the Letter object and yields a return/output that is appropriate given whether or not it has been guessed by the user.
    // The function is named "toString" so that JavaScript will automatically call it when the Letter object is concatenated to wordString in "Word.js."
    this.toString = function() {
      if (this.guessed === true) {
        return this.id;
      } else {
        return "_";
      }
    };

    this.check = function(char) {
      if (char === this.id) {
        this.guessed = true;
      }
      this.toString();
    };

  }
}

module.exports = Letter;
