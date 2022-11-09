/**
 * @param {number[][]} grid
 * @return {number}
 */
var dfs = function (grid, i, j) {
    if (
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[i].length ||
        grid[i][j] === 0
    ) {
        return 0;
    }
    grid[i][j] = 0;
    return (
        1 +
        dfs(grid, i + 1, j) +
        dfs(grid, i - 1, j) +
        dfs(grid, i, j + 1) +
        dfs(grid, i, j - 1)
    );
};

var maxAreaOfIsland = function (grid) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(grid, i, j));
            }
        }
    }
    return max;
};
