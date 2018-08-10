function quickSortIt(arr) {
    /*
        segment out left pivot right as usual, 
        push all parts into a stack (right, pivot, left) order 
        pop from stack, evaluate if popped arr has lenght > 1
            if so, use segmenting helper function on that part and push pieces in same order into stack .
    */ 
  let stack = [];
  let answer = [];  
  let [left, pivot, right] = lrc(arr); 

  stack.push(right, pivot, left);  
  while (stack.length !== 0) {
    let top = stack.pop();
    if (top.length > 1) {
      [left, pivot, right] = lrc(top); 
      stack.push(right, pivot, left); 
    } else {
      answer.push(...top); 
    }
  }
  return answer; 
}

function lrc(arr) {
  let pivot = arr.shift();
  let left = [];
  let right = []; 
  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]); 
  }
  return [left, [pivot], right]; 
}


quickSortIt([7,5,3,2,9, 9, 11, 1, 42, 31, 26, 38]);