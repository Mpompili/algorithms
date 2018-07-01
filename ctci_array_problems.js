// Array 
//1.1
// checks if unique without any additional datastructure 
function is_unique(str) {
    for (let i = 0; i < str.length; i ++) {
        for (let j = i + 1; j < str.length; j ++) {
            if (str[i].toLowerCase() == str[j].toLowerCase()) {
                return false;
            }
        }
    }
return true; 
}

// checks if unique using additional datastructure 
function is_unique_2(str) { 
    let counter = {}; 
    for (let i = 0; i < str.length; i ++) {
        if (counter[str[i].toLowerCase()]){
            return false; 
        } else {
            counter[str[i].toLowerCase()] = 1; 
        }
    }
    return true; 
}


//1.2