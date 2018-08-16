function alphaSort(a, b) {
    let A = a.toLowerCase();
    let B = b.toLowerCase();
    if (A < B) {
        return -1;
    } else if (A > B) {
        return 1;
    } else {
        return 0;
    }
}

function sortString(word) {
    let warr = word.split('');
    let res = warr.sort(alphaSort);
    return res.join(''); 
}

sortString('rates');