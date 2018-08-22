/*

Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.

*/
var getIntersectionNode = function(headA, headB) {
    /*
    use two pointers to represent the two LL 
    each pointer takes one step each iteration of the while loop
    if a pointer is equal to null reset pointer to the opposite head
    this may cause our algo to cycle over the link lists mutliple times however it would still be constant in a worse case scenario ie 3N => O(N)
    could it trigger an infinite loop?
        no 
        the offset of resetting a pointer to the other link list ensures that
        if an overlap exists, a collision will happen.
        if two LL are same length and both hit null simultaneously, there is no over lap. 
        if two LL's loop over eachother and end up both landing on a null simultaneously, then we can also ensure that there is no overlap. 
    */
    if (!headA || !headB) return null;
    if (headA.val === headB.val) return headA; 
    
    let pointer1 = headA;
    let pointer2 = headB;
    
    while (pointer1 !== pointer2) {
        if (pointer1 === null) {
            pointer1 = headB;
        } else {
            pointer1 = pointer1.next;
        }
        if (pointer2 === null) {
            pointer2 = headA;
        } else {
            pointer2 = pointer2.next; 
        }
    }
    
    return pointer1; 
};
