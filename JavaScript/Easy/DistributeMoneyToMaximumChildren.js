/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  if (money < children) return -1;
  if (money === children) return 0;

  let count = Math.min(Math.floor((money - children) / 7), children);
  let remaining = money - children - count * 7;

  if (count === children && remaining > 0) {
    return children - 1;
  }

  if (count === children - 1) {
    if (remaining === 3) {
      return children - 2;
    }
    if (remaining > 0) {
      return children - 1;
    }
  }

  return count;
};
