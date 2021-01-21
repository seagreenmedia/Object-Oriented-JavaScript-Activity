class Tweet {

    MAX_CHAR_COUNT = 140;

    constructor() {
        this.message = "";
    }

    getMessage() {
        return this.message;
    }

    addLetter(letter) {
        if (this.message.length < this.MAX_CHAR_COUNT) {
            this.message += letter;
        }
    }

    removeLetter() {
        this.message = this.message.slice(0, -1);
    }
}

let tweet = new Tweet();