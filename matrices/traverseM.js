function traverse(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let visited = new Set();
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];

    function dfs(i, j) {
        let pair = [i, j].toString();
        visited.add(pair);
        for (let x = 0; x < dirs.length; x++) {
            let dx = i + dirs[x][0];
            let dy = j + dirs[x][1];
            if (dx >= 0 && dx < rows && dy >= 0 && dy < cols) {
                let newpair = [dx, dy].toString();
                if (visited.has(newpair)) {} else {
                    dfs(dx, dy);
                }
            }
        }
        return visited;
    }
    return dfs(0, 0);
}



let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
traverse(mat);