/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let temp = num;
    let digitPlace = 0;
    let maxNum = num;
    
    // Track the highest digit place where we find a 6
    while (temp > 0) {
      if (temp % 10 === 6) {
        maxNum = num + 3 * Math.pow(10, digitPlace);
      }
      temp = Math.floor(temp / 10);
      digitPlace++;
    }
    
    return maxNum;
  };