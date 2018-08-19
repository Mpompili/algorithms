var reverseList = function (head) {

    let previous = null;
    let current = head;

    while (current) {
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }

    return previous;

};