/*
    Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    Example:

    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
*/

var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    let cSum = gSum = nums[0]; 
    return kadane(nums, cSum, gSum);  
};

var kadane = function(arr, cSum, gSum, i = 1) {
    for (i; i < arr.length; i++) {
        cSum = Math.max(cSum + arr[i], arr[i]); 
        if (cSum > gSum) gSum = cSum; 
    }
    return gSum;
};
