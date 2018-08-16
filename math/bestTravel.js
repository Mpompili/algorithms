function bestTravel(total, n, arr) {
    let cache = {};
    let max = Infinity * -1;
    for (let x = 0; x < arr.length; x++) {
        for (let y = 1; y < arr.length; y++) {
            for (let z = 2; z < arr.length; z++) {
                if (x === y || y === z || x === z) {
                    continue;
                } else {
                    let sum = arr[x] + arr[y] + arr[z];
                    if (cache[sum]) {
                        continue;
                    } else {
                        cache[sum] = true;
                        if (sum === total) return sum;
                        if (sum < total && sum > max) max = sum;
                    }
                }
            }
        }
    }
    return max;
}
let arr = [91, 74, 73, 85, 73, 81, 87];
bestTravel(230, 3, arr);
