/*
   Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

   For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

       1
      / \
     2   2
    / \ / \
   3  4 4  3
*/


var isSymmetric = function(root) {
    if (!root) return true; 
    return mirror(root.left, root.right); 
    
};

var mirror = function(l, r) {
    if (!l && !r) return true;
    if (!l || !r || l.val !== r.val) return false; 
    return mirror(l.left, r.right) && mirror(l.right, r.left); 
}


