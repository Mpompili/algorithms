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

function is_perm_string(str1, str2) {
    if (str1.length !== str2.length || str1 === str2) return false;
    let counter = {};
    counter.default = 0;
    for (let i = 0; i < str1.length; i++) {
        counter[str1[i]] += 1;
    }
    for (let j = 0; j < str2.length; j++) {
        counter[str2[j]] -= 1;
        if (counter[str2[j]] < 0) {
            return false;
        }
    }
    return true;
}

