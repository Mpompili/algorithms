// Given an array of integers of size ‘n’.
// Our aim is to calculate the maximum sum of ‘k’ 
// consecutive elements in the array.

// Input  : arr[] = {100, 200, 300, 400}
//          k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
//          k = 4 
// Output : 39
// We get maximum sum by adding subarray {4, 2, 10, 23}
// of size 4.

// Input  : arr[] = {2, 3}
//          k = 3
// Output : Invalid
// There is no subarray of size 3 as size of whole
// array is 2.


let example = [1, 4, 2, 10, 23, 3, 1, 0, 20];

function slidingWindow(arr, k) {
    //find max sum 
    let i = k - 1;
    if (!arr[i]) return false;
    let max = Infinity * -1;
    while (i < arr.length) {
        let temp_sum = arr[i - 3] + arr[i - 2] + arr[i - 1] + arr[i];
        if (temp_sum > max) max = temp_sum;
        i++;
    }


    // for (let i = 0; i < arr.length - k + 1; i++) {
    //   let current_sum = 0;
    //   for (let j = 0; j < k; j++) {
    //     current_sum += arr[i+j]; 
    //   }
    //   if (current_sum > max) max = current_sum;
    // }


    return max;
}

slidingWindow(example, 4);