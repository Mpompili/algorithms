//given a number, how many trailing zeros exist with the factorial of the given input? 
/* 
    Conceptual Strategy
- a number has a trailing zero when it is a factor of 10 
- we have to consider the product of 5 and 2 that allow for factors of 10's to exist 
- considering there is always an even number to multiply to a 5 to create a factor of 10...
- how many multiples of 5 exist between 1 and the input? 
- additionally, we must consider the the exponents of 5 ie: 25, 125(5^3), 
    -when evaluating trailing zeros because they two, with an even number 
    - can produce a factor of 10 

- literal Strategy 
- see how many exponents of 5 multiply into the factorial, 
- store those numbers into a fiveArr
- iterate through the five array and sum up the amount of times each exponent of 5 divides into the factorial number
- the sum = the number of trailing zeros cuz math 
*/


function trailingZeros(factorial) {
    let fiveArr = [];
    let answerSum = 0;
    for (let i = 5; i <= factorial; i *= 5) {
        fiveArr.push(i);
    }
    fiveArr.forEach(num => {
        answerSum += Math.floor(factorial / num);
    });
    return answerSum;
}

trailingZeros(25);