module.exports = str => {
    const arr = [];

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '[':
            case '{':
            case '(':
                arr.push(str[i]);
                break;
            case ')':
                if (arr.pop() !== '(') return false;
                break;
            case '}':
                if (arr.pop() !== '{') return false;
                break;
            case ']':
                if (arr.pop() !== '[') return false;
                break;
        }
    }

    return true;
}