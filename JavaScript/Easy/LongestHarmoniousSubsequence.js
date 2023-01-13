/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    var map = {};
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }
    for (var key in map) {
        if (map[+key + 1] !== undefined) {
            max = Math.max(max, map[key] + map[+key + 1]);
        }
    }
    return max;
};