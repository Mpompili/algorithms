// tree represented through an array 
// each child has at most 2 children
//relationship is defined by index position, arr[(i - 1)/2] parent, arr[(i * 2) + 1] left, arr[(i * 2) + 2] right
//top node will always be the smallest 
// whenever we want to add, we simply add to the next available node, then heapifyUp
// whenever we want to extract the root, we must heapify down. 


/* 
*
            GOTA FIND WHAT THIS IS IN HEAPIFY
*
*/ 

Array.prototype.swap = function(x, y) {
    var a = this[x]; 
    this[x] = this[y]; 
    this[y] = a; 
    return this; 
};

// i will have to test what happens at an index point that doesnt exist

export default class MinHeap {
    constructor(){
        this.array = []; 
    }

    // returns the index positions 

    leftChild(index) {
        let idx = (index * 2) + 1;
        return idx >= 0 ? idx : null;
    }

    rightChild(index) {
        let idx = (index * 2) + 2;
        return idx >= 0 ? idx : null;
    }

    parentOf(index) {
        let idx = Math.floor((index - 1) / 2); 
        return idx >= 0 ? idx : null;
    }

    add(value) {
        this.array.push(value); 
        this.heapifyUp(); 
        return this; //return the MinHeap
    }

    minPeek() {
        return this.array[0]; 
    }

    heapifyUp(customIdx) {
        
        let idx = customIdx || this.array.length - 1; 
        console.log('before heapifyUp: ', this.array); 
        while (this.array[this.parentOf(idx)] > this.array[idx] ){
            this.array.swap(this.parentOf(idx), idx); 
            idx = this.parentOf(idx); 
            console.warn('swapped: ', this.array); 
        }
        console.log('completed heapifyUP: ', this.array);
    }

    extract() {
        //always extracts root
        let extracted = this.array[0];
        console.log('this is before extract: ', this.array); 
        this.array[0] = this.array.pop(); 
        this.heapifyDown(); 
        console.warn('after extract: ', this.array); 
        return extracted; 
    }

    heapifyDown(customIdx) {
        let smallestIdx; 
        console.log('this in heapifyDown: ', this); 
        let nodeIdx = customIdx || 0; 
        while (this.array[nodeIdx] > this.array[this.leftChild(nodeIdx)]) {
            smallestIdx = this.leftChild(nodeIdx); 
            if (this.array[smallestIdx] > this.array[this.rightChild(0)]){
                smallestIdx = this.rightChild(nodeIdx); 
            }
            //if ^ true, sIDx = 2, 
            this.array.swap(nodeIdx, smallestIdx); 
            // after swap top would be what was at 2, and 2 would be what is at 
            nodeIdx = smallestIdx; 
        }
        //no need to return anything just changing the array 
    }

    find(item) {
        let foundItems = []; 

        for (let idx = 0; idx < this.array.length; idx++) {
            if (this.array[idx] === item) {
                foundItems.push(idx); 
            }
        }
        return foundItems; 
    }

    remove(item) {
        const itemsToRemove = this.find(item); 
        const numToRemove = itemsToRemove.length; 
        for (let i = 0; i < numToRemove; i++) {
            let indexToRemove = itemsToRemove.pop(); 
        
            // if index to remove is at the end just pop it
            if (indexToRemove === (this.array.length - 1)) {
                this.array.pop(); 
            } else {
                //otherwise
                //if the indexToRemove has a left child and its parents are nonexistent or smaller than itself, heapifyDown; 
                let parentIdx = this.parentOf(indexToRemove); 
                let leftChild = this.leftChild(indexToRemove); 
                if (leftChild && (!parentIdx || this.array[parentIdx] < this.array[indexToRemove])){
                    this.heapifyDown(indexToRemove); 
                }else{
                    //otherwise heapifyUp; 
                    this.heapifyUp(indexToRemove); 
                }

            }
        }
    return this; 
    }

}