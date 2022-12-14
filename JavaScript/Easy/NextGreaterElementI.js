/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let j = nums2.indexOf(nums1[i]);
        while (j < nums2.length) {
            if (nums2[j] > nums1[i]) {
                result.push(nums2[j]);
                break;
            }
            j++;
        }
        if (j === nums2.length) result.push(-1);
    }
    return result;
};