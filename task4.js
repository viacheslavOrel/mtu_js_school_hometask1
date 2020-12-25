module.exports = (arr1, arr2) => {
    arr1.sort((a, b) => {
        const indexA = arr2.findIndex(item => item === a);
        const indexB = arr2.findIndex(item => item === b);

        if (indexA === -1  && indexB === -1) return a - b;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;

        return indexA - indexB;
    });

    return arr1;
}