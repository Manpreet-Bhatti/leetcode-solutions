/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
    let area = 0;
    let n = grid.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let height = grid[i][j];

            if (height > 0) {
                area += 2;
            }

            if (i === 0) {
                area += height;
            } else {
                area += Math.max(0, height - grid[i - 1][j]);
            }

            if (i === n - 1) {
                area += height;
            } else {
                area += Math.max(0, height - grid[i + 1][j]);
            }

            if (j === 0) {
                area += height;
            } else {
                area += Math.max(0, height - grid[i][j - 1]);
            }

            if (j === grid[i].length - 1) {
                area += height;
            } else {
                area += Math.max(0, height - grid[i][j + 1]);
            }
        }
    }

    return area;
};