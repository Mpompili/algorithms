function quickSortIt(arr) {
  let stack = [];
  let answer = []; 
  // let first = lrc(arr); 
  let [left, pivot, right] = lrc(arr); 

  stack.push(right, pivot, left);  
  while (stack.length !== 0) {
    let top = stack.pop();
    if (top.length > 1) {
      [left, pivot, right] = lrc(top); // must use let here again 
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













// function wellformed(str) {
//   left = [];

//   check = {
//     '}': '{',
//     ']': '[',
//     ')': '('
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (!check[str[i]]) {
//       left.push(str[i]);
//     } else if (isEmpty(left) || check[str[i]] !== left.pop()) { return false; 
//     }
//   }

//   return left.length === 0; 
// }

// wellformed('{[([])]}');

// function isEmpty(arr) {
//   return arr.length === 0;
// }