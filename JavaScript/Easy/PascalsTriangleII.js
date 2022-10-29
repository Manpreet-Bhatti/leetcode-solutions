/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var row = [];
  for (var i = 0; i <= rowIndex; i++) {
    row.push(1);
    for (var j = i - 1; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
  }
  return row;
};
