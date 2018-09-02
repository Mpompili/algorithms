const reverseInPlace3 = function (arr) {
    let mid = Math.floor(arr.length / 2);
    for (let i = 0; i < mid; i++) {
        swap(arr, i, arr.length - 1 - i);
    }
    return arr;
}

function swap(arr, first, second) {
    [arr[first], arr[second]] = [arr[second], arr[first]];
}