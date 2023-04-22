/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let xy = 0;
    let xz = 0;
    let yz = 0;
    let n = grid.length;
    let m = grid[0].length;

    for (let i = 0; i < n; i++) {
        let maxX = 0;
        let maxY = 0;
        for (let j = 0; j < m; j++) {
            if (grid[i][j] > 0) {
                xy++;
            }
            maxX = Math.max(maxX, grid[i][j]);
            maxY = Math.max(maxY, grid[j][i]);
        }
        xz += maxX;
        yz += maxY;
    }

    return xy + xz + yz;
};
