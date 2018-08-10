function wellformed(str) {
  let left = [];

  let check = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  for (let i = 0; i < str.length; i++) {
    if (!check[str[i]]) {
      left.push(str[i]);
    } else if (isEmpty(left) || check[str[i]] !== left.pop()) { return false; 
    }
  }

  return left.length === 0; 
}

wellformed('{[([])]}');

function isEmpty(arr) {
  return arr.length === 0;
}