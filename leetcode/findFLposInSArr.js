/**
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]


 - we use bsearch to find instance of target 
 - once we find target we fan out from that point to receive both ends.
 
 - optimize: use bsearch like technique to find ends as well;
 - custom bsearch for finding edges
 
 - csearch(found idx) {
 
 }
 
 */
var searchRange = function(nums, target) {
    
    var bsearch = function(start = 0, end = nums.length - 1) {
        let sIdx = start; 
        let eIdx = end;
        
        while (sIdx <= eIdx) {
            let mid = Math.floor((sIdx + eIdx) / 2); 
            if (nums[mid] === target) return mid; 
            if (nums[mid] > target) {
                eIdx = mid - 1;
            } else {
                sIdx = mid + 1; 
            }
        }
        return null;
    }
    
    var csearch = function(foundIdx) {
        var b2search = function(start, end, t, l = false) {
            let s = start;
            let e = end;

            while (s <= e) {
                let mid = Math.floor((s + e) / 2);
                if (nums[mid] > t) e = mid - 1;
                else s = mid + 1;
            }
            return l ? s : e;
        }
        
        let left = b2search(0, foundIdx, target - 0.5, true);
        let right = b2search(foundIdx, nums.length - 1, target + 0.5);
        
        return [left, right]; 
    }
    
    let res = bsearch();
    if (res === null) return [-1, -1];
    return csearch(res)
    
    // return endPoints(res);
    // O(n) solution: find any target, continously iterate both left and right until you find end pieces. 
//     var endPoints = function(targetIdx) {
//         let left = targetIdx;
//         let right = targetIdx;
        
//         while (true) {
//             let l = left - 1;
//             let r = right + 1;
//             if (nums[l] === target) left -= 1;
//             if (nums[r] === target) right += 1;
//             if (l !== left && r !== right) {
//                 return [left, right];
//             }
//         }
//     }
    
};


