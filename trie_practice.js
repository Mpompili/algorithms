//V1 from online 
class Trie {
    constructor(){
        this.head = {
            key: "",
            children: {}
        };
    }
}

Trie.prototype.add = function(key) {
    let curNode = this.head; 
    let curChar = key.slice(0,1);
    key = key.slice(1); 

    // if the next node has curren character as child, just move on. 
    while (curNode.children[curChar] !== 'undefined' && curChar.length > 0) {
        curNode = curNode.children[curChar]; 
        curChar = key.slice(0,1); 
        key = key.slice(1); 
    }

    while (curChar.length > 0) {
        let newNode = { 
            key: curChar,
            value: key.length === 0 ? null : undefined,
            children: {}
        };
        curNode.children[curChar] = newNode; 
        curNode = newNode; 
        curChar = key.slice(0,1);
        key = key.slice(1); 
    }
};


//V2 my version 
class Trie2 {
    constructor() {
        this.trie = {};
    }
}

Trie2.prototype.add = function(word) {
    let current = this.trie;
    let char = word.slice(0, 1);
    word = word.slice(1);
    let count = 0;
    while (char.length > 0) {
        if (current[char] === undefined) current[char] = {};
        current = current[char];
        char = word.slice(0, 1);
        word = word.slice(1);
        count += 1;
    }
    current['end'] = count;
    return current;
};

Trie2.prototype.search = function(word) {
    let current = this.trie;
    let char = word.slice(0, 1);
    word = word.slice(1);
    while (char.length > 0) {
        if (current[char] === undefined) return false;
        current = current[char];
        char = word.slice(0, 1);
        word = word.slice(1);
    }
    return current.end || 'contained';
};

Trie2.prototype.remove = function(word) {
    if (!this.search(word)) return 'no';
    let current = this.trie;
    let char = word.slice(0, 1);
    word = word.slice(1);
    while (char.length > 0) {
        if (Object.keys(current[char]).length > 1) {
            current = current[char];
            char = word.slice(0, 1);
            word = word.slice(1);
        } else {
            delete current[char];
            return this.trie;
        }
    }
};



let test = new Trie();
test.add('hello');
test.add('help');
test.add('homo');
test.remove('homo');
// test.trie
// test.remove('homo');
























// function createTrie(word, trie = {}) {
//   let char = word.slice(0,1);
//   word = word.slice(1); 
//   let current = trie; 
//   while (char.length > 0) {
//     if (current[char] === undefined) {
//       current[char] = {};
//     } 
//     current = current[char]; 
//     char = word.slice(0,1); 
//     word = word.slice(1); 
//   }
//   current['end'] = true;
//   // console.log('current: ', current, ' char: ', char); 
//   return trie; 
// }

// let ret = createTrie('hello');
// ret = createTrie('help', ret);

// function s


