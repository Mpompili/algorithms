var new21Game = function (N, K, W) {
    if (K === 0) return 1;

    let arr = []; //will hold numbers and store them backwards starting from index position N down to 0... 
    let pos = N - K + 1; // 21 - 17 + 1 = 5 aka: amount of points that count as winning 17, 18, 19, 20, 21 
    let sum = pos < W ? pos : W; //if # of pos is W.. then our starting numerator will be 5 (ie: because there are more positions to roll than spaces to be counted as correct, when first going past the min threshold, 17, there will be 5(sum) out of 10(W) chance to win....if there are more spaces to win then there points to draw then we can infer that 1 past the threshold of 17 - which is 16 - will have a 100% chance of landing on a winning point as you can't draw a number that would go past N)
    for (let i = N; i >= 0; --i) {
        if (i >= K) { //since we are calculating the probability of winning FROM each position we say you have a 100% chance of winning when AT any position from N to K, because you have landed there so you have won. 
            arr[i] = 1;
        } else { // arr[current position] = current sum / W 
            arr[i] = (sum / W); // probability of winning from this position...
            let withoutMax = arr[i + W] || 0;
            sum += (arr[i] - withoutMax); //all probabilities of the previosu without the max draw of the previous  
        }

    }
    return arr[0];
};



 //where it gets tricky....
 //
 // the probability of any position is as follows:
 //  (1/W) * arr[i + 1] + arr[i + 2] +... arr[i + w]... you have 1/W chance of each of the points to draw..
 //if ^ is hard to understand think of it as..
 // (arr[i + 1] / W) + (arr[i + 2] / W) + ... (arr[i + W] / W)

 // now the magic... if we hare looking for the arr[i - 1] position...it should be the probability of 
 // arr[i] WITHOUT arr[i + W] because for arr[i - 1] it's highest roll possible is arr[i + W - 1]...
 // it has all the probabilities of the previous i without the max roll of the previous i