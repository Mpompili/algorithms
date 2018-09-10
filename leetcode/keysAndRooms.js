/**
There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0). 

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.

Example 1:

Input: [[1],[2],[3],[]]
Output: true
Explanation:  
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.
Example 2:

Input: [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can't enter the room with number 2.


    // STRATEGY 
have visited list and stack
with the first first room (at 0) 
add the elements inside to visited (the next rooms we will visit)
as well as to the stack.
whenever done examining a room, pop off stack and examine that room number's contents
do not add to stack if we have already visited or will be visiting room. 
 */

var canVisitAllRooms = function(rooms) {
    
    let len = rooms.length; 
    let visited = new Set();
    let stack = rooms[0];
    visited.add(0); 
    devStack(stack, visited, rooms); 
    return visited.size === len
    
};

function devStack(stack, visited, rooms) {
    while (stack.length) {
        let key = stack.pop();
        visited.add(key)
        for (let room of rooms[key]) {
            if (!visited.has(room)) stack.push(room); 
        }
    }
}


