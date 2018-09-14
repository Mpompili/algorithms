/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Note: 
You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

 */

var maxSlidingWindow = function(nums, k) {
    let res = [];
    let q = []; 
    for (let i = 0; i < nums.length; i++) {
        while (q.length && q[q.length - 1] < nums[i]) {
            q.pop(); 
        }
        q.push(nums[i]); 
        
        // ensures we aren't counting until we are looking at k numbers simultaneously 
        const startIdx = i - k + 1;
        if (startIdx < 0) continue;
    
        res.push(q[0]);
        
        // if the pushed max is at the front of the queue, we shift it away to ensure we don't look at it. 
        if (nums[startIdx] === q[0]) q.shift(); 
    }
    return res;
}
