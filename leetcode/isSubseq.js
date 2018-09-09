
Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.


    // STRATEGY 
    the worst case scenario should ultimately run in a time complexity of O(N) 
    we will iteratively use indexOf to see if the subsequence exists without having to go backwards
    - indexOf(s[0]) -> if its true with more of t to explore 
    - indexOf(s[1], idx of above) -> start the search from this point - if we ever return -1 the sequence does not exist 
    
*/
var isSubsequence = function(s, t) {
    let i = 0;
    let prev = 0; 
    while (i < s.length) {
        let idx = t.indexOf(s[i], prev)
        if (idx === -1) return false;
        prev = idx + 1;
        i++; 
    }
    return true; 
};
