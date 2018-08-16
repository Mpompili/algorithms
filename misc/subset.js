/*
Subsets RCM 
*/
var subset = function(arr) {
  return arr.reduce((subsets, el) => subsets.concat(subsets.map(set => [...set, el])), [[]]);
};

subset([1,2,3]);
