var numberOfLines = function (widths, S) {
    let lines = 1;
    let units = 0;
    S.split('').forEach(letter => {
        //letter "a".charCodeAt() === 97; 97 - 97 = 0 or widths[0] which represents 'a'
        let temp = widths[letter.charCodeAt() - 97];
        units += temp;
        if (units > 100) {
            lines += 1;
            units = temp;
        }
    });
    return [lines, units];
};