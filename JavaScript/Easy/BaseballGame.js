/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    var score = [];
    var sum = 0;
    for (var i = 0; i < operations.length; i++) {
        if (operations[i] == 'C') {
            sum -= score.pop();
        } else if (operations[i] == 'D') {
            score.push(score[score.length - 1] * 2);
            sum += score[score.length - 1];
        } else if (operations[i] == '+') {
            score.push(score[score.length - 1] + score[score.length - 2]);
            sum += score[score.length - 1];
        } else {
            score.push(parseInt(operations[i]));
            sum += score[score.length - 1];
        }
    }
    return sum;
};