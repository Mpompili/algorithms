// stack with push, pop, AND min (returns the minimum element) 
//  3.2 StackMin 
class MinStack { 
    constructor(){
        this.stack = [];
        this.minimum = Infinity; 
    }
    
    pop() {
        return this.stack.pop(); 
    }

    push(val) {
        this.stack.push(val); 
        if (val < this.minimum) this.minimum = val; 
        return val; 
    }

    min() {
        return this.minimum; 
    }
}


// 3.3 SetofStacks with popAt(idx) 

class SetOfStacks {
    constructor(limit = 3) {
        this.stack = [[]];
        this.limit = limit;
    }

    pop() {
        let { stack } = this;
        let stackIdx = stack.length - 1;
        let cStack = stack[stackIdx];
        let removed = cStack.pop();
        if (cStack.length === 0 && stack.length > 0) {
            stack.pop(); //removed highest level stack; 
        }
    }

    push(val) {
        let { stack } = this;
        let stackIdx = stack.length - 1;
        if (stack[stackIdx].length === this.limit) {
            stack.push([]); //adding stack array 
            stackIdx += 1; // incrementing idx number; 
        }
        let cStack = stack[stackIdx];
        cStack.push(val);
        return val;
    }

    lookAtStacks() {
        console.log(this.stack);
    }

    popAt(idx) {
        let { stack } = this;
        let maxStacks = stack.length - 1;

        if (idx > maxStacks) return -1; //not a valid input 
        if (idx === maxStacks) this.pop(); // regular pop 

        let dispensor = [];
        for (let i = maxStacks; i > idx; i--) {
            for (let j = stack[i].length - 1; j >= 0; j--) {
                dispensor.unshift(stack[i][j]);
            }
            stack.pop();
        }

        stack[idx].pop(); // for the one you actually wan to pop; 

        dispensor.forEach(num => {
            this.push(num);
        });
    }

}

// 3.4 using an additional array to hold 
class MyQueue {
    //we can use other data structures. 
    constructor() {
        this.deq = new QStack;
        this.enq = new QStack;
    }

    enqueue(val) {
        const { deq, enq } = this;

        deq.isEmpty()
            ? deq.push(val)
            : enq.push(val);
    }

    dequeue() {
        let { deq, enq } = this;
        if (deq.isEmpty() || (!deq.isEmpty() && enq.isEmpty())) console.log("there aint no numbers in here");

        let response = deq.pop();
        let temp = enq.unload();
        let newDeq = temp.pop();
        deq.push(newDeq);
        temp.forEach(num => enq.push(num));
        return response;
    }

}

class QStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);
    }

    pop(flag = false) {
        return this.stack.pop();
    }

    unload() {
        let times = this.stack.length;
        let load = [];
        for (let i = 0; i < times; i++) {
            let top = this.stack.pop();
            load.unshift(top);
        }
        return load;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

// let myQ = new MyQueue;
// myQ.dequeue();
// myQ.enqueue('first');
// myQ.enqueue(1);
// myQ.enqueue(2);
// myQ.enqueue(3);
// myQ.enqueue(4);
// myQ.enqueue('second');

// console.log(myQ);
// myQ.dequeue();
// console.log(myQ);
// myQ.dequeue();
// console.log(myQ);
// myQ.dequeue();
// console.log(myQ);
// myQ.dequeue();
// console.log(myQ);
// myQ.dequeue();
// console.log(myQ);
// myQ.dequeue();
// console.log(myQ);
// myQ.dequeue(); 


//3.5 Sort Stack: sort a stack using only two stacks

class Stack {
    constructor() {
        this.stack = []
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    pop() {
        return this.stack.pop();
    }

    push(val) {
        this.stack.push(val);
        return val;
    }

    isEmpty(depth = 0) {
        return this.stack.length === depth;
    }
}

function sortStack(stack) {
    let tempStack = new Stack;
    let depth = 0;
    let min = Infinity;
    let first = true;
    let trueDepth = 0;

    //initial step 
    // finding min and putting all elements into temp stack
    while (first || depth !== trueDepth - 1) {
        while (!stack.isEmpty(depth)) {
            let popped = stack.pop();
            if (first) trueDepth++;

            if (popped < min) {
                if (min !== Infinity) tempStack.push(min);
                min = popped;
            } else {
                tempStack.push(popped);
            }
        }
        //adding min && increase depth 
        stack.push(min);
        depth++;
        first = false;
        //resetting stack. 
        while (!tempStack.isEmpty()) {
            let popped = tempStack.pop();
            stack.push(popped);
        }

        min = Infinity;
    }

    while (!stack.isEmpty()) {
        tempStack.push(stack.pop());
    }

    return tempStack;
}

let stck = new Stack;
stck.push(5);
stck.push(6);
stck.push(3);
stck.push(8);
stck.push(1);
stck.push(9);
stck.push(11);

sortStack(stck);








3