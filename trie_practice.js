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
    while (curNode.children[curChar] !== 'undefined' && key.length > 0) {
        curNode = curNode.children[curChar]; 
        curChar = key.slice(0,1); 
        key = key.slice(1); 
    }

    while (key.length > 0) {
        let newNode = new Node(curChar); 
        curNode.children[curChar] = newNode; 

    }
};
