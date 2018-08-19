/*
    given an array of nums move all the zeros to the end, don't return anything, keep everything else in the right place.

    strategy: 
    work backwards 
    when you find a zero, splice it out //don't need to worry about conflicts as were splicing towards the end. 
        add zero to the end
    
    we add no extra memory relative to the size of the input.  
*/


var moveZeroes = function (nums) {
    for (let i = nums.length; i >= 0; --i) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};