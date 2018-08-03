// turn nested array that represents a matrix into a array that represents a spiral 
/* 
input 
arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  ];

output 
  [1,2,3,6,9,8,7,4,5]
*/

function spiral2array(arr) {
    let dir = {
        right: [0, 1],
        down: [1, 0],
        left: [0, -1],
        up: [-1, 0]
    };
    let bounds = {
        right: arr[0].length - 1,
        down: arr.length - 1,
        left: 0,
        up: 1
    };
    let curDir = "right";
    let answer = [];
    let matrixLen = arr.length * arr[0].length;
    let curPos = [0, 0];

    while (answer.length !== matrixLen) {
        answer.push(arr[curPos[0]][curPos[1]]);
        if (curDir == "right" && bounds.right == curPos[1]) {
            curDir = "down";
            bounds.right -= 1;
        } else if (curDir == "down" && bounds.down == curPos[0]) {
            curDir = "left";
            bounds.down -= 1;
        } else if (curDir == "left" && bounds.left == curPos[1]) {
            curDir = "up";
            bounds.left += 1;
        } else if (curDir == "up" && bounds.up == curPos[0]) {
            curDir = "right";
            bounds.up += 1;
        }
        curPos[0] += dir[curDir][0];
        curPos[1] += dir[curDir][1];
    }

    return answer;
}

const arr = [
    [1, 2, 3, 11, 15],
    [4, 5, 6, 12, 16],
    [7, 8, 9, 13, 17],
];
spiral2array(arr);