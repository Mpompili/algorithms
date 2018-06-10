import LinkedList from './LinkedListJS'; 


export default class Queue {
    constructor(){
        this.linkedList = new LinkedList(); 
    }

    isEmpty(){
        return !this.linkedList.head; 
    }

    
}