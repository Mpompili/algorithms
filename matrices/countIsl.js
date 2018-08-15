let grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
];


var numIslands = function (grid) {
    let count = 0;
    const stack = [];
    const visited = new Set;
    const rows = grid.length;
    const cols = grid[0].length;
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];

    // dfs-like technique to spread out from any given position starting from an island until whole island and surrounding waters has been charted. 

    function grabDirs(cpos) {
        let pDirs = [];
        dirs.forEach(dir => {
            let pot = [dir[0] + cpos[0], dir[1] + cpos[1]];
            if (!visited.has(pot.toString()) &&
                pot[0] >= 0 && pot[0] < rows &&
                pot[1] >= 0 && pot[1] < cols) {
                pDirs.push(pot);
            }
        });

        for (let i in pDirs) {
            visited.add(pDirs[i].toString());
            let npos = [pDirs[i][0], pDirs[i][1]];

            if (grid[npos[0]][npos[1]] === "1") stack.push(npos); // found an 
        }

        while (stack.length !== 0) {
            grabDirs(stack.pop());
        }
    }
    let examined = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cpos = [i, j];
            if (visited.has(cpos.toString())) continue;
            visited.add(cpos.toString());
            console.log(examined += 1);
            if (grid[i][j] === "1") { //found the start of an island.
                console.log('found an island');
                count += 1;
                grabDirs(cpos);
            } else {
                visited.add(cpos.toString());
            }
        }
    }
    return count;
};

numIslands(grid);



/////// OPTIMAL SOLUTION BELOW


var optimalNumIslands = function (grid) {
    let count = 0;
    const rows = grid.length;
    if (rows === 0) return count;
    const cols = grid[0].length;


    function islandChain(x, y, rLimit, cLimit) {
        if (x < 0 || y < 0 || x >= rLimit || y >= cLimit || grid[x][y] == "0") {
            return;
        }

        grid[x][y] = "0";

        islandChain(x - 1, y, rLimit, cLimit);
        islandChain(x + 1, y, rLimit, cLimit);
        islandChain(x, y - 1, rLimit, cLimit);
        islandChain(x, y + 1, rLimit, cLimit);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                count += 1;
                islandChain(i, j, rows, cols);
            }
        }
    }

    return count;

};