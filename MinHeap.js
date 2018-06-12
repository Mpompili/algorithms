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
        return (index * 2) + 1;
    }

    rightChild(index) {
        return (index * 2) + 2;
    }

    parentOf(index) {
        return Math.floor((index - 1) / 2); 
    }

    add(value) {
        this.array.push(value); 
        this.heapifyUp(); 
    }

    minPeek() {
        return this.array[0]; 
    }

    heapifyUp() {
        
        let idx = this.array.length - 1; 
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
        console.log('this is before extract: ', this.array); 
        let min = this.array.shift(); 
        // puts last node at the front; 
        this.array.unshift(this.array.pop()); 
        this.heapifyDown(); 
        console.warn('after extract: ', this.array); 
        return min; 
    }

    heapifyDown() {
        let smallestIdx; 
        console.log('this in heapifyDown: ', this); 
        let nodeIdx = 0; 
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
        return this; 
    }
}