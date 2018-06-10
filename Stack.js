import LinkedList from './LinkedListJS'; 

//stack is LIFO 

export default class Stack {
    constructor(){
        this.linkedList = new LinkedList(); 
    }

    isEmpty(){
        return !this.linkedList.tail; 
    }

    push(value){
        this.linkedList.addNode(value); 
    }

    pop(){
        const removedTail = this.linkedList.deleteTail(); 
        return removedTail ? removedTail.value : null; 
    }

    peek(){
        if (this.isEmpty()){
            return null;
        }else {
            return this.linkedList.tail.value;
        }
    }

    toArray(){
        return this.linkedList.toArray().map(node => node.value).reverse(); 
    }


}