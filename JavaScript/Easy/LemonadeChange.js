/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
    let five = 0, ten = 0;
    for (const bill of bills) {
        switch (bill) {
            case 5:
                five++;
                break;
            case 10:
                if (five === 0) {
                    return false;
                }
                five--;
                ten++;
                break;
            case 20:
                if (five > 0 && ten > 0) {
                    five--;
                    ten--;
                } else if (five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
                break;
            default:
                return false;
        }
    }
    return true;
};
