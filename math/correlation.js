var correlation = function (n11, n00, n01, n10) {
    let top = (n11 * n00) - (n01 * n10);
    let bottom = Math.sqrt((n11 + n10) * (n00 + n01) * (n11 + n01) * (n00 + n10)));
    return top / bottom;
}


