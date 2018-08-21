/*
    convert sorted array into a balanced BST tree
    [-10,-3,0,5,9]
    res => [0,-3,9,-10,null,5]; 

    strategy: 
    use recursion 
    basecase: if length of arr in call is 0 return null || have computed left and right child so therefore returning root; 
    each stack identifies the root along with its children.
    identifying children makes recursive calls to handle what the childrens children are. 
*/

var TreeNode = function(val) {
    this.val = val;
    this.left = this.right = null; 
};

var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;
    let mid = findMid(nums);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;

};

var findMid = function (arr) {
    let mid = Math.floor(arr.length / 2.0);
    return mid;
};