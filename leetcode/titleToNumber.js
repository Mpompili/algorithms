// change excel sheet to valid number
/*
"A" => 1
"Z" => 26
"AA" => 27
"ZY" => 701 
*/

var titleToNumber = function(s) {   
    return s.split('').reduce((total, ch) => {
        return total * 26 + (ch.charCodeAt(0) - "A".charCodeAt(0) + 1); 
    }, 0);
};