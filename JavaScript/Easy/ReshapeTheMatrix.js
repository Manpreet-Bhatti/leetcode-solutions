/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat;
    const result = [];
    let row = 0;
    let col = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (col === c) {
                row++;
                col = 0;
            }
            if (result[row] === undefined) {
                result[row] = [];
            }
            result[row][col] = mat[i][j];
            col++;
        }
    }
    return result;
};