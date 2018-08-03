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
