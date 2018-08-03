//Given a binary tree, find the leftmost value in the last row of the tree.

// by doing a BFS and storing the left child last the last node examined in the queue will always be the leftmost node. 


var findBottomLeftValue = function (root) {
    let queue = [root, 'end'];

    let lastnode;
    while (queue.length > 0) {
        lastnode = queue.shift();
        if (lastnode.right) queue.push(lastnode.right);
        if (lastnode.left) queue.push(lastnode.left);
    }
    return lastnode.val;

};