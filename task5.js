module.exports = (arr, value) => {
    let currIndex = arr.findIndex(item => item === value);

    if (currIndex !== -1) return currIndex;

    return findNewIndex(arr, value);
}


function findNewIndex(arr, value) {
    const currIndex = arr.findIndex(item => item > value);

    if (currIndex !== -1) return currIndex;
    return arr.length;
}
