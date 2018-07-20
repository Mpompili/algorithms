var eraseOverlapIntervals = function (intervals) {
    if (intervals.length <= 1) return 0;
    let count = 0;

    intervals.sort((a, b) => {
        return a.end - b.end;
    });
    let max = intervals[0].end;

    // you lose nothing by keeping the pair with the smallest endpoint.
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start >= max) {
            max = intervals[i].end;
        } else {
            count += 1;
        }
    }

    return count;

};