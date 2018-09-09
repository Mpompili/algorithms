/**
 
Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.



    //STRATEGY 
since we are swapping adjacent nodes...
    we simply (consider a = first node, b = second )
        set a to its b's next
        set b to a 
        keep track of a to point to the head of the next swap.

 
 */
var swapPairs = function(head) {
    if (!head) return []; 
    if (!head.next) return head;
    
    let finalhead = head.next;
    let node = head;
    let prev = null;
    
    while (node && node.next) {
        let temp = node.next;
        node.next = temp.next;
        temp.next = node;
        if (prev) prev.next = temp;
        prev = node;
        node = node.next;
    }
    
    return finalhead; 
    
};
