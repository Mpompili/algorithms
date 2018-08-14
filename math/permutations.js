function permutations(string) {
    let result = [];

    if (string.length <= 1) {
        result.push(string);
        return result;
    }

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let rest = (string.substring(0, i) + string.substring(i + 1));

        let innerPerms = permutations(rest);
        for (let j = 0; j < innerPerms.length; j++) {
            result.push(char + innerPerms[j]);
        }
    }

    return result;
}

// function knowPermCount(n) {
//   sum = 1;
//   for(let i = 1; i <= n; i++){
//     sum *= i;
//   }
//   return sum;
// }

// permutations('catdog').length;
// knowPermCount(5);