/*
    Given many words, words[i] has weight i.
    Design a class WordFilter that supports one
    function, WordFilter.f(String prefix, String suffix).
    It will return the word with given prefix and 
    suffix with maximum weight.
    If no word exists,return -1.
 */

 /*
  - Strategy 
  - send list of words to buildPrefix helper function
  - buildPrefix(words)
    - instantiate initial trie with single attribute of suffix: {} 
    - loop over words
    - let word = words[i]
*** - send same word to addSuffix (suffixTrie builder: building trie with word but backwards)
        - addSuffix(trie, word, weight(index position within initial input word list)) 
            - set val to trie passed in to weight (ie: trie.val = weight); 
            - loop from word.length down to zero 
            - see if trie[character] exists ~probably shouldn't~ 
            - if not, (usually the case), set trie[char] = {}
            - set val of trie[character] to weight
            - trie = trie[char], as it loops through the characters, we are going deeper into the suffix trie. 
    - set current variable to equal trie 
    - loop over characters in word
    - if (!current[character]) current[character] = { suffix: {} }
    - addSuffix(current[character].suffix, word, i) 
    - set current = current[character] to go deeper into prefix trie while simultaneously handling the building of the suffix trie.

- once done going through the input of words and building out the prefix and suffix helper functions
- Wordfitler.prototype.f(prefix,suffix) 
- let current = this.trie (from constructor) 
- loop over prefix word:::: for (let i = 0; i < prefix.length; i++) 
    - let character = prefix[i]
    - if !current[character] return false 
    - else current = current[character] 
- once done looping through prefix, we need to loop over suffix 
- loop over suffix word from the end::: for (let i = suffix.length - 1; i >= 0; i--) 
    - let character = suffix[i]
    -- if !curent[character] return -1 
    - else current = current[character]
- if we make it through the entire loop we can simply return
- current.val as we have stored the "weighted" value at each given pairing. 3

 */
var WordFilter = function (words) {
    this.trie = buildPrefix(words);
};

WordFilter.prototype.f = function (prefix, suffix) {
    let current = this.trie;
    for (let i = 0; i < prefix.length; i++) {
        let pref = prefix[i];
        if (current[pref]) {
            current = current[pref];
        } else {
            return -1;
        }
    }

    current = current.suffix;

    for (let i = suffix.length - 1; i >= 0; i--) {
        let suff = suffix[i];
        if (current[suff]) {
            current = current[suff];
        } else {
            return -1;
        }
    }
    return current.val;
};

function addSuffix(trie, word, weight) {
    trie.val = weight;
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (!trie[char]) {
            trie[char] = {};
        }
        trie[char].val = weight;
        trie = trie[char];
    }
}

function buildPrefix(words) {
    let trie = {
        suffix: {}
    };

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        addSuffix(trie.suffix, word, i);
        let current = trie;
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (!current[char]) {
                current[char] = {
                    suffix: {}
                };
            }
            addSuffix(current[char].suffix, word, i);
            current = current[char];
        }
    }
    return trie;
}

