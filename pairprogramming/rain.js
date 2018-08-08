function rainProblem(arr) {
    // iteratre through the arr once forward and once backward 
    // we will keep track of the current max height to both the left and right of any given position 
    let leftmax = [];
    let rightmax = [];
    let max = null; 
    let answer = 0; 
    for(let i = 0; i < arr.length; i++){
        leftmax.push(max); 
        if (max === null || arr[i] > max) max = arr[i]; 
    }
    max = null;
    for(let i = arr.length - 1; i >= 0; i--) {
        rightmax.unshift(max);
        if (max === null || arr[i] > max) max = arr[i]; 
    }

    for(let i = 0; i < arr.length; i++) {
        if (!leftmax[i] || !rightmax[i]) continue; 
        if (leftmax[i] > arr[i] && rightmax[i] > arr[i]) {
            let min = leftmax[i] > rightmax[i] ? rightmax[i] : leftmax[i]; 
            answer += min - arr[i]; 
        }
    }
    return answer; 
}


