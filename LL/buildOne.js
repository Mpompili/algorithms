class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    toStr() {
        return this.val.toString();
    }
}

class LinkedList {
    constructor(val) {
        this.head = new Node(val);
    }

    add(val) {
        let current = this.head;
        while (current.next !== null) current = current.next;
        current.next = new Node(val);
    }

    remove(val) {
        let current = this.head;
        while (current.val !== val) current = current.next; 
        current.val = current.next ? current.next.val : null; 
        current.next = current.next ? current.next.val : null; 
    }

    update(val, to) {
        let current = this.head; 
        while (current.val !== val) current = current.next;
        current.val = to; 
    }

    
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    toStr() {
        return this.val.toString();
    }
}


var LinkedList = (function() {
    let head = new Node('head');
    
    function add(val) {
        let current = findTail(); 
        current.next = new Node(val);
    }

    function remove(val) {
        let current = seek(val); 
        current.val = current.next ? current.next.val : null;
        current.next = current.next ? current.next.val : null;
    }

    function seek(val) {
        let current = head; 
        while (current.val !== val) current = current.next; 
        return current; 
    }

    function findTail() {
        let current = head;
        while (current.next !== null) current = current.next;
        return current; 
    }

    function printList() {
        let str = '';
        let current = head; 
        while (current.next !== null) {
            str += `${current.val}->`;
            current = current.next; 
        }
        console.log(str); 
    }

    return {
        add: add, 
        remove: remove, 
        toS: printList
    };

})(); 
