import LinkedList from './LinkedListJS'; 


export default class Queue {
    constructor(){
        this.linkedList = new LinkedList(); 
    }

    isEmpty(){
        return !this.linkedList.head; 
    }

    peek(){
        const head = this.linkedList.head;
        return head ? head.value : null; 
    }

    enqueue(value) {
        this.linkedList.addNode(value); 
    }

    dequeue() {
        const node = this.linkedList.deletehead(); 
        return node ? node.value : null; 
    }

    toArray() {
        return this.linkedList.toArray().map(node => node.value); 
    }


}