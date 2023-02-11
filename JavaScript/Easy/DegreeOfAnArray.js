/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    var map = {};
    var max = 0;
    var res = Number.POSITIVE_INFINITY;
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = {
                count: 1,
                first: i,
                last: i
            };
        } else {
            map[nums[i]].count++;
            map[nums[i]].last = i;
        }
        if (map[nums[i]].count > max) {
            max = map[nums[i]].count;
            res = map[nums[i]].last - map[nums[i]].first + 1;
        } else if (map[nums[i]].count === max) {
            res = Math.min(res, map[nums[i]].last - map[nums[i]].first + 1);
        }
    }
    return res;
};
