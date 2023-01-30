/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    var result = [];
    var row = img.length;
    var col = img[0].length;
    for (var i = 0; i < row; i++) {
        result[i] = [];
        for (var j = 0; j < col; j++) {
            var sum = 0;
            var count = 0;
            for (var m = i - 1; m <= i + 1; m++) {
                for (var n = j - 1; n <= j + 1; n++) {
                    if (m >= 0 && n >= 0 && m < row && n < col) {
                        sum += img[m][n];
                        count++;
                    }
                }
            }
            result[i][j] = Math.floor(sum / count);
        }
    }
    return result;
};