/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length, n = grid[0].length;
    let queue = [];
    let fresh = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j]);
            } else if (grid[i][j] == 1) {
                fresh++;
            }
        }
    }
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let minutes = 0;
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [x, y] = queue.shift();
            for (let dir of dirs) {
                let r = x + dir[0], c = y + dir[1];
                if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] != 1) continue;
                grid[r][c] = 2;
                fresh--;
                queue.push([r, c]);
            }
        }
        minutes++;
    }
    return fresh == 0 ? Math.max(0, minutes - 1) : -1;
};