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

//1.3 
//long way 
function urlify(str) {
    let arr = str.split(' ');
    let new_answer = "";
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            new_answer += arr[i];
        } else {
            new_answer += ("%20" + arr[i]);
        }
    }
    return new_answer;

}
//using regex; 
function urlify2(str) {
    return str.replace(/ /g, '%20');
}

urlify2('Mr John Smith');

//1.4 

function is_string_permpal(str) {
    let counter = {};
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        counter[ch] = !counter[ch];
    };
    if (str.length % 2 == 0) {
        return !Object.values(counter).includes(true);
    } else {
        return Object.values(counter).filter(bool => bool === true).length == 1;
    }
}

is_string_permpal('tacocat');