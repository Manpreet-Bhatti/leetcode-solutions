/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let rook = { x: 0, y: 0 };
    let captures = 0;
    let found = false;
    for (let i = 0; i < board.length && !found; i++) {
        for (let j = 0; j < board[i].length && !found; j++) {
            if (board[i][j] === 'R') {
                rook.x = i;
                rook.y = j;
                found = true;
            }
        }
    }

    for (let i = rook.x; i >= 0; i--) {
        if (board[i][rook.y] === 'B') {
            break;
        } else if (board[i][rook.y] === 'p') {
            captures++;
            break;
        }
    }

    for (let i = rook.x; i < board.length; i++) {
        if (board[i][rook.y] === 'B') {
            break;
        } else if (board[i][rook.y] === 'p') {
            captures++;
            break;
        }
    }

    for (let i = rook.y; i >= 0; i--) {
        if (board[rook.x][i] === 'B') {
            break;
        } else if (board[rook.x][i] === 'p') {
            captures++;
            break;
        }
    }

    for (let i = rook.y; i < board[rook.x].length; i++) {
        if (board[rook.x][i] === 'B') {
            break;
        } else if (board[rook.x][i] === 'p') {
            captures++;
            break;
        }
    }

    return captures;
};