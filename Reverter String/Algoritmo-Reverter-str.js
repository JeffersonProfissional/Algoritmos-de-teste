var reverseWords = function(s) {
    let splitedString = s.split(' ');
    let nIndex = splitedString.length;
    let result = "";

    for(let index = nIndex - 1; index >= 0; index--) {
        if (splitedString[index] === "") continue;
        result += " " + splitedString[index];
    }

    return result.trim();
};

console.log(reverseWords("Hello  words a"));