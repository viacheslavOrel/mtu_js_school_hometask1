module.exports = romanNumber => {
    if (romanNumber.length === 0) {
        throw new Error('Input string is empty');
    }

    const helper = new RomanNumberHelper();

    return romanNumber.split('')
        .reduce((acc, val) => helper.convertChar(acc, val), 0) + helper.prevNum;
}

class RomanNumberHelper {
    constructor() {
        this.prevNum = 0;
    }

    romanDictionary = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    getCurrentNumber(char) {
        const result = this.romanDictionary.get(char.toUpperCase());

        if (result === undefined) {
            throw new Error(`Symbol ${char} is not correct`);
        }

        return result;
    }

    convertChar(result, currValue) {
        const currNum = this.getCurrentNumber(currValue);

        if (this.prevNum < currNum && currNum <= this.prevNum * 10) {
            result += currNum - this.prevNum;
            this.prevNum = 0;
        } else {
            result += this.prevNum;
            this.prevNum = currNum;
        }

        return result;
    }
}