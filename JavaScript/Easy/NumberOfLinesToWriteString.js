/**
 * @param {Uint8Array} widths
 * @param {string} s
 * @return {number[]}
 */
const alphToWidth = (charCode, widths) => widths[charCode - 97];

var numberOfLines = function (widths, s) {
    let lines = 1;
    let width = 0;
    for (let i = 0; i < s.length; i++) {
        const charWidth = alphToWidth(s.charCodeAt(i), widths);
        if (width + charWidth > 100) {
            lines++;
            width = charWidth;
        } else {
            width += charWidth;
        }
    }
    return [lines, width];
};
