module.exports = romanNumber => {
    const translateNumeral = number => {
        switch (number) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
        }
    }

    let result = 0;
    let prevNum = translateNumeral(romanNumber[0]);

    for (let i = 1; i < romanNumber.length; i++) {
        const currNum = translateNumeral(romanNumber[i]);

        if (prevNum < currNum && currNum <= prevNum * 10) {
            result += currNum - prevNum;
            prevNum = 0;
        } else {
            result += prevNum;
            prevNum = currNum;
        }
    }

    return result + prevNum;
}