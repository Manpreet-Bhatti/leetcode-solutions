/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let result = [];
    let set = new Set(nums1);
    for (let i of nums2) {
        if (set.has(i)) {
            result.push(i);
            set.delete(i);
        }
    }
    return result;
};