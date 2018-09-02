function deepEqual(val1, val2) {

    let makeKeys = (el1, el2) => [Object.keys(el1), Object.keys(el2)];
    let isObject = val => ((typeof val === 'object') && (val !== null));

    if (isObject(val1) && isObject(val2)) {
        let [key1, key2] = makeKeys(val1, val2);
        if (key1.length !== key2.length) return false;
        for (let i = 0; i < key1.length; i++) {
            let key = key1[i];
            if (isObject(val1[key]) && isObject(val2[key])) {
                if (!deepEqual(val1[key], val2[key])) return false;
            } else {
                if (val1[key] !== val2[key]) return false;
            }
        }
    } else {
        if (val1 !== val2) return false;
    }

    return true;
}


let test = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepEqual(test, test));
// → true

console.log(deepEqual(test, {
    here: 1,
    object: 2
}));
// → false

console.log(deepEqual(test, {
    here: {
        is: "an"
    },
    object: 2
}));
// → true