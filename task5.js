module.exports = (arr, value) => {
    let currIndex = arr.findIndex(item => item === value);

    if (currIndex === -1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > value) return i;
        }

        return arr.length;
    }

    return currIndex;
}