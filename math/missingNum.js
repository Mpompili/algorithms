/*
given array with n distinct numbers ranging from 0 to n
find the missing number. 

knowing that the largest number will equal the arrays length 
use N * N + 1 / 2 to find what the total sum of all numbers from 1...N SHOULD Be
with that number you simply sum all the numbers in the given array.
subtact should from found and you will have your missing number. 
 */

var missingNumber = function (nums) {
    let max = nums.length;
    let total = max * (max + 1) / 2;
    let sum = nums.reduce((total, num) => total += num, 0);

    return total - sum;
};