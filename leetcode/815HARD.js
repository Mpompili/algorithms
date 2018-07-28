
var numBusesToDestination = function (routes, S, T) {
    if (S === T) return 0;

    cache = {};
    routes.forEach((bus, busId) => {
        bus.forEach(stop => {
            if (cache[stop]) {
                cache[stop].push(busId);
            } else {
                cache[stop] = [busId];
            }
        });
    });

    let visited = [];
    let loopQ = [];
    let busQ = [];

    cache[T].forEach(bus => loopQ.push(bus));
    loopQ.push('count'); 

    let count = 1;

    while (loopQ.length > 1) {
        let bus = loopQ.shift();
        if (bus === 'count') {
            count += 1;
            loopQ.push('count');
            continue;
        }
        visited.push(bus);
        busQ.push(...routes[bus]);
        while (busQ.length > 0) {
            let stop = busQ.shift();
            if (stop === S) { 
                return count;
            } else {
                cache[stop].forEach(bus => {
                    if (!visited.includes(bus)) loopQ.push(bus);
                });
            }
        }
    }

    return -1;
};
