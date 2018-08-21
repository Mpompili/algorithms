Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/
var isPalindrome = function(head) {
    if (!head || !head.next) return true; // if empty [] or with one [1] it is symmetrical and therefore a palin. 
    
    let len = 0;
    let slow = head; 
    let runner = head;
    
    while (runner && runner.next) {
        runner = runner.next.next; 
        slow = slow.next;
        len++; 
    }
    
    let reversed = reverseLL(slow); 

    return compareLists(head, reversed, len);
};

var reverseLL = function(input) {
    let node = input;
    let previous = null;
    while (node) {
        let temp = node.next; 
        node.next = previous;
        previous = node; 
        node = temp; 
    }
    return previous; 
}  

var compareLists = function(l1, l2, len) {
    for (let i = 0; i < len; i++) {
        if (l1.val !== l2.val) return false; 
        l1 = l1.next;
        l2 = l2.next;
    }
    return true; 
}
