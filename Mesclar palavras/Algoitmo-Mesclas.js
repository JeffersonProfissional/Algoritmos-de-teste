var mergeAlternately = function(word1, word2) {
    let splitedWord1 = word1.split('');
    let splitedWord2 = word2.split('');

    let mergeString = "";

    while(splitedWord1.length >= 1 || splitedWord2.length >= 1) {
        mergeString += splitedWord1.length >= 1 ? splitedWord1[0] : "";
        mergeString += splitedWord2.length >= 1 ? splitedWord2[0] : "";

        splitedWord1.shift(); 
        splitedWord2.shift();
    }

    return mergeString;
};