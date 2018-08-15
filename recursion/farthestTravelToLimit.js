

function bestTravel(total, n, arr){
  let cache = new Set; 
  let max = Infinity * -1; 
  let flag = false;

  function forloopGen(csum, n, arr){
    if (flag) return max;
    /*

    using [9,7,6,5,4,3], target/total = 23  as an example... 

    we don't recursively go back up, we stay at the bottom level looking at all 3 possible elements and do evaluations there. 

    so we must keep track of the sum of the previous n - 1 elements to compare with the last possible element --- represented by csum (current sum) 

    automate the generation of forwardloops: 
    n = 3 
    0    + 9      + ?                               we do 1 + i to always be 1 pos ahead
    csum + arr[i] + forLoopGen(n-1, arr.slice(1 + i)^ // 0 + 9 + fLG(2, [7,6,5,4,3])

      n = 2 
      9    + 7      + ? 
      csum + arr[i] + forLoopGen(n-1, arr.slice(1 + i) // 9 + 7 + fLG(1, [6,5,4,3])

      n = 1         // since n - 1 is zero, we wont recursively call fLG
      16   + 6        = sum = 22 
      csum + arr[i]  // 16 + 6 + 0  = 22 

          now we evaluate 
          22 === total ? if so, set max to it, theoredically you're done
          if not... 
          is 22 > max (max initially is -Infinity) 
            true: max = 22
            false: do nothing 
          i += 1 // 1 
          arr[1] = 4... 

          next comparison will be 
          16 + 4 === 20 which is not total nor is it larger than current max

    */ 

    for (let i = 0; i < arr.length; i++) {
      // if we already found what were looking for - break it all and return max
      if (flag) return max; 
      
      //if not at lowest level of recursion, keep diving deeper
      if (n - 1 !== 0) {
        forloopGen(csum + arr[i], n - 1, arr.slice(1 + i));
      } // if at lowest level, sum the n elements up 
      else {
        let sum = csum + arr[i]; 

        // if current sum is greater than total or we have it in cache, we don't bother to do more 
        if (sum > total || cache[sum]) continue; 

        // sum is added to cache and considered a possible max value 
        cache.add(sum); 
        if (sum === total) {
          // we found the exact total were looking for, set max to the current sum and break all recursion instances using a flag;
          max = sum;
          flag = true; 
          return max; 
        } else if (sum > max && sum < total) {
          // we did not find the exact limit but we did find the next largest possible max
          max = sum; 
        }
      }
    }
    return max; 
  }

  return forloopGen(0, n, arr); 
}

let arr = [91,74,73,85,73,81,87];
bestTravel(228, 3, arr);








function bestTravel(total, n, arr){
  let cache = new Set; 
  let max = Infinity * -1; 
  let flag = false;

  function forloopGen(csum, n, arr){
    for (let i = 0; i < arr.length; i++) {
      if (flag) return max; 
      if (n - 1 !== 0) {
        forloopGen(csum + arr[i], n - 1, arr.slice(1 + i));
      } 
      else {
        let sum = csum + arr[i]; 
        if (sum > total || cache[sum]) continue; 
        cache.add(sum); 
        if (sum === total) {
          max = sum;
          flag = true; 
          return max; 
        } else if (sum > max && sum < total) {
          max = sum; 
        }
      }
    }
    return max; 
  }

  return forloopGen(0, n, arr); 
}