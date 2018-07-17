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

