/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    var sorted = score.slice(0).sort(function (a, b) {
        return b - a;
    });
    var ranks = [];
    for (var i = 0; i < score.length; i++) {
        var rank = sorted.indexOf(score[i]) + 1;
        if (rank === 1) {
            ranks.push('Gold Medal');
        } else if (rank === 2) {
            ranks.push('Silver Medal');
        } else if (rank === 3) {
            ranks.push('Bronze Medal');
        } else {
            ranks.push(rank.toString());
        }
    }
    return ranks;
};