// Linked Lists 

// singly linked lists, you need nodes that point from one to another 
// there is a head and a tail to make things easy 
// adding and deleting nodes (targeted towards beginning or end) is very quick an easy  (O(1)) 
// searching is stupid slow (O(n)) 
// You need a LinkedList and LinkedListNode 


class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null; 
    }

    addNode(value) {
        //adding to tail 
        const node = new LinkedListNode(value);

        if (!this.head){
            this.head = node;
            this.tail = node; 
            return this; 
        }

        this.tail.next = node; 
        this.tail = node; 

        return this; 
    }

    deleteNode(value) { 
        if (!this.head) return null; 

        let currentNode = this.head; 
        let toBeDeleted; 
        /*
        handles head case
        */ 
        if (currentNode === this.head && currentNode.value === value) {
            toBeDeleted = this.head; 
            this.head = this.head.next;
            toBeDeleted.next = null; 

            return toBeDeleted; 
        }


        while (currentNode.next) {
            if (currentNode.next.value === value) {
                //if next variable is the one we want to delete 
                //current node to piont to node after next 
                // we next next node to point to nothing
                toBeDeleted = currentNode.next; 
                currentNode.next = toBeDeleted.next; 
                toBeDeleted.next = null; 
                break; 
            } else {
                currentNode = currentNode.next; 
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode; 
        }
            
        return toBeDeleted; 
    }

    findNode(value) {
        if (!this.head) return null; 
        let currentNode = this.head; 
        while (currentNode) {
            if (currentNode.value === value){
                return currentNode; 
            }
            currentNode = currentNode.next; 
        }
        return null; 
    }

    findNodeByCallBack(callback) {
        // must be true or false callback 
        if (!this.head) return null;

        let currentNode = this.head;
        while (currentNode) {
            if (callback(currentNode.value)) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    toArray() {
        let nodes = []; 
        if (!this.head) return nodes; 
        let currentNode = this.head; 
        while (currentNode) {
            nodes.push(currentNode); 
            currentNode = currentNode.next;
        }
        return nodes; 
    }
}