/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    var x = 0;
    var y = 0;
    var movements = {
        "U": [0, 1],
        "D": [0, -1],
        "L": [-1, 0],
        "R": [1, 0]
    };
    for (var i = 0; i < moves.length; i++) {
        var move = movements[moves[i]];
        x += move[0];
        y += move[1];
    }
    return x === 0 && y === 0;
};
