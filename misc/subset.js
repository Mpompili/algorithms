/*
Subsets RCM 
*/
var subset = function(arr) {
  return arr.reduce((subsets, el) => subsets.concat(subsets.map(set => [...set, el])), [[]]);
};

subset([1,2,3]);



/*
v2
*/ 

var subsets = function(nums) {
    let subset = [[]];
    for (let i = 0; i < nums.length; i++) {
        let temp = subset.map(set => [set.concat(nums[i])]); 
        subset = subset.concat(...temp); 
    }
    return subset; 
};
