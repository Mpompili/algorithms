/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
//    You are given an array A of strings.

// Two strings S and T are special-equivalent if after any number of moves, S == T.

// A move consists of choosing two indices i and j with i % 2 == j % 2, and swapping S[i] with S[j].

// Now, a group of special-equivalent strings from A is a non-empty subset S of A such that any string not in S is not special-equivalent with any string in S.

// Return the number of groups of special-equivalent strings from A.

 

// Example 1:

// Input: ["a","b","c","a","c","c"]
// Output: 3
// Explanation: 3 groups ["a","a"], ["b"], ["c","c","c"]
// Example 2:

// Input: ["aa","bb","ab","ba"]
// Output: 4
// Explanation: 4 groups ["aa"], ["bb"], ["ab"], ["ba"]
// Example 3:

// Input: ["abc","acb","bac","bca","cab","cba"]
// Output: 3
// Explanation: 3 groups ["abc","cba"], ["acb","bca"], ["bac","cab"]
// Example 4:

// Input: ["abcd","cdab","adcb","cbad"]
// Output: 1
// Explanation: 1 group ["abcd","cdab","adcb","cbad"]
    
    /*
        STRATEGY 
    get even characters and odd characters 
    sort them 
    set them as keys in a obj
    number of unique keys is answer 
    */
    
    const hash = {};
    let count = 0; 
    A.forEach(word => {
        let res = genKey(word);
        if (!hash[res]) {
            count += 1;
            hash[res] = true; 
        }
    });
    return count;  
    
};

var genKey = function(str) {
    let even = [];
    let odd = []; 
    for (let i in str) {
        i % 2 === 0 ? even.push(str[i]) : odd.push(str[i]); 
    }
    
    let even2 = sortletters(even); 
    let odd2 = sortletters(odd); 
    
    return even2.toString() + "-" + odd2.toString(); 
}

var sortletters = function(arr) {
    let res = arr.sort((a,b) => {
        let ch1 = a.toLowerCase();
        let ch2 = b.toLowerCase(); 
        if (ch1 < ch2) return -1;
        if (ch1 === ch2) return 0;
        if (ch1 > ch2) return 1; 
    });
    return res; 
}
