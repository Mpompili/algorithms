/*
given a tree, find the longest branch 

do you want the node at the end of the longest branch 
or a number that evaluates the depth of how deep this branch is? 

most likely starting at root node. 
worst case scenario we must look at every single node. 

my initial strategy is to do DFS keep track of depth, go back up to forking point and begin traversing down. if we hit end node and depth does not beat current deepest, don't bother storing. 

could possibly improve by looking ahead down two children 

if two nodes have same depth/deepness, return one of them. 

1. do i have children 
2. if so, add children to stack 
3. pop off stack and see if that node has children, if so add them to stack.
  * we aren't going wide, insures we look at children before siblings 
4. keep track of deepest point

node = {
  val: int,
  children: [a,b,c], 
}
*/

function longestBranch(root) {
    let stack = [];
    root.depth = 0;
    let deepest = root;
    let visited = [];
    return descend(root, stack, deepest, visited);
}

function descend(node, stack, deepest, visited) {
    console.log('node: ', node.val);
    visited.push(node);
    if (node.children.length > 0) {
        node.children.forEach(child => {
            child.depth = node.depth++;
            if (!visited.includes(child)) stack.push(child);
        });

    } else {
        if (node.depth > deepest.depth) deepest = node;
    }
    while (stack.length > 0) {
        let recent = stack.pop();
        if (!visited.includes(recent)) return descend(recent, stack, deepest, visited);
    }

    if (stack.length === 0) return deepest;

}

var Node = function (val, children = []) {
    this.val = val;
    this.children = [].concat(children);
};

let x = new Node(14);
let y = new Node(13, x);
let q = new Node(12, y);
let u = new Node(11, q);
let v = new Node(10, u);
let z = new Node(9);
let f = new Node(8, [z]);
let e = new Node(7);
let d = new Node(6, [f, e]);
let c = new Node(5, [d, v]);
let b = new Node(4, c);
let a = new Node(3, b);

longestBranch(a);