module.exports = number => {
    const currNumber = String(number);
    return currNumber === currNumber.split("").reverse().join("")
};