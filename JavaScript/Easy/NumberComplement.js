/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    var binary = num.toString(2);
    var complement = "";
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == "0") {
            complement += "1";
        } else {
            complement += "0";
        }
    }
    return parseInt(complement, 2);
};