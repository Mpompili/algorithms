

var titleToNumber = function(s) {   
    return s.split('').reduce((total, ch) => {
        return total * 26 + (ch.charCodeAt(0) - "A".charCodeAt(0) + 1); 
    }, 0);
};