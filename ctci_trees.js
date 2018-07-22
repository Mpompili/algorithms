// 4.1 
class Graph {
    constructor() {
        this.nodes = [];
    }
}

class Node {
    constructor(val, children = null) {
        this.value = val;
        this.children = children;
    }
}

function routeBetweeen(a, b) {
    let visited = {};
    if (traverse(a, b, visited) || traverse(b, a, visited)) return true;
    return false;

}

function traverse(start, target, visited) {
    let q = [start];
    while (q.length > 0) {
        let current = q.shift();
        if (current === target) return true;
        if (current !== start && current !== target) visited[current.value] = true;
        if (current.children) {
            current.children.forEach(child => {
                if (!target || !visited[child.value]) {
                    q.push(child);
                }
            });
        }
    }
}


// const G = new Node('g');
// const B = new Node('b');
// const Y = new Node('y');
// const Z = new Node('z');
// const F = new Node('f', [G, B]);
// const E = new Node('e', [Y, Z]);
// const C = new Node('c', [F]);
// const D = new Node('d', [E]);
// const A = new Node('a', [C, D]);

// routeBetweeen(D, B);


//4.2 
// sorted raray with unique elements, write an algo to create a binary search tree with min hieght 
class Node {
    constructor(val) {
        this.val = val;
    }
}


let array = [1, 2, 3, 4, 5, 6, 7];

// [ 1, 2, 3, 4, 5, 6, 7];
//   0  1  2  3
//   0     2
//   
//           4
//      2         6 
//   1     3   5     7
function createBTree(arr) {
    return completeIt(arr, 0, arr.length - 1);
}

function completeIt(arr, start, end) {
    // always can find the middle easy; 
    // if end pos is less than start, break; 
    if (end < start) return;

    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);

    // if the end is less than start we are at one of the ends 

    node.left = completeIt(arr, start, mid - 1);
    node.right = completeIt(arr, mid + 1, end);

    return node;
}


createBTree(array);
