var mostCommonWord = function (paragraph, banned) {
    const banSet = genBanSet(banned);
    const wordArr = formatParagraph(paragraph);
    return countWords(wordArr, banSet);
};

const genBanSet = function (arr) {
    let obj = new Set();
    for (let i = 0; i < arr.length; i++) {
        obj.add(arr[i].toLowerCase());
    }
    return obj;
};

const formatParagraph = function (para) {
    return para.replace(/[!?',;.]/g, "").split(' ');
};

const countWords = function (arr, banSet, res = {}) {
    let max = null;
    for (let i in arr) {
        let word = arr[i].toLowerCase();
        if (!banSet.has(word)) {
            res[word] = res[word] + 1 || 1;
            if (max === null || res[word] > res[max]) max = word;
        }
    }
    return max;

};