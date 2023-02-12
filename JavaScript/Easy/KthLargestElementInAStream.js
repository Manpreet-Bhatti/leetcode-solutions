/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.heap = [];
    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i]);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.heap.length < this.k) {
        this.heap.push(val);
    } else if (val > this.heap[0]) {
        this.heap[0] = val;
    } else {
        return this.heap[0];
    }
    this.heap.sort((a, b) => a - b);
    return this.heap[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */