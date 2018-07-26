// Implement a MyCalendar class to store your events.A new event can be added if adding the event will not cause a double booking.
// Your class will have the method, book(int start, int end).Formally, this represents a booking on the half open interval[start, end), the range of real numbers x such that start <= x < end.
// A double booking happens when two events have some non - empty intersection(ie., there is some time that is common to both events.)
// For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking.Otherwise, return false and do not add the event to the calendar.
// Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)


// MyCalendar();
// MyCalendar.book(10, 20); // returns true
// MyCalendar.book(15, 25); // returns false
// MyCalendar.book(20, 30); // returns true






/* 
        Strategy: Create Binary Tree 

- Initialize Calendar with empty root node
- Create node class
    - has start, end, right, and left attributes 
- Create Add/Insert function to Node Prototype
    - takes proposed book start and end date to see if it works
- Have Add/Insert function check to see if start or end date comes before or after current node
    - if proposed date is before or after current node, check to see if there is a node that fills that branch 
    - if so keep recursively calling Add/Insert until node finds proper spot or it reveals date is incompatible 

*/

var MyCalendar = function () {
    this.root = null;
};



var Node = function (start, end) {
    this.start = start;
    this.end = end;
    this.right = null;
    this.left = null;
}

Node.prototype.add = function (start, end) {
    if (start >= this.end) {
        if (this.right === null) {
            this.right = new Node(start, end);
            return true;
        } else {
            return this.right.add(start, end);
        }
    } else if (end <= this.start) {
        if (this.left === null) {
            this.left = new Node(start, end);
            return true;
        } else {
            return this.left.add(start, end);
        }
    } else {
        return false;
    }
};

MyCalendar.prototype.book = function (start, end) {
    if (this.root === null) {
        this.root = new Node(start, end);
        return true;
    } else {
        return this.root.add(start, end);
    }

};