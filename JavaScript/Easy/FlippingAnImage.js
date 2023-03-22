/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        const row = image[i];
        let start = 0;
        let end = row.length - 1;
        while (start <= end) {
            if (start === end) {
                row[start] = row[start] === 0 ? 1 : 0;
            } else {
                const temp = row[start] === 0 ? 1 : 0;
                row[start] = row[end] === 0 ? 1 : 0;
                row[end] = temp;
            }
            start++;
            end--;
        }
    }
    return image;
};
