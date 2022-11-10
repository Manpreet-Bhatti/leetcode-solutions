/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let m = mat.length, n = mat[0].length;
    let queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queue.length) {
        let [i, j] = queue.shift();
        for (let dir of dirs) {
            let x = i + dir[0], y = j + dir[1];
            if (x < 0 || x >= m || y < 0 || y >= n || mat[x][y] != -1) continue;
            mat[x][y] = mat[i][j] + 1;
            queue.push([x, y]);
        }
    }
    return mat;
};