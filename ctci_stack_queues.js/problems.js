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
