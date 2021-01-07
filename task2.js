module.exports = number => {
    if (!Number.isInteger(number)) {
        throw new Error('Input value is not int');
    }

    return number.toString() === number.toString().split("").reverse().join("")
};
