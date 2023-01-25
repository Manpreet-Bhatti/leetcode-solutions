/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    var x = 0;
    var y = 0;
    for (var i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "U":
                y++;
                break;
            case "D":
                y--;
                break;
            case "L":
                x--;
                break;
            case "R":
                x++;
                break;
        }
    }
    return x === 0 && y === 0;
};