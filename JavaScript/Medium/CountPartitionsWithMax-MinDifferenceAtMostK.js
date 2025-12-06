/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function (nums, k) {
  const MOD = 1000000007;
  const n = nums.length;

  const prefix = new Array(n + 2).fill(0);
  prefix[1] = 1;

  const maxDeque = [];
  const minDeque = [];

  let left = 0;

  for (let i = 0; i < n; i++) {
    while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[i]) {
      maxDeque.pop();
    }
    maxDeque.push(i);

    while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[i]) {
      minDeque.pop();
    }
    minDeque.push(i);

    while (nums[maxDeque[0]] - nums[minDeque[0]] > k) {
      left++;
      while (maxDeque.length && maxDeque[0] < left) maxDeque.shift();
      while (minDeque.length && minDeque[0] < left) minDeque.shift();
    }

    const dp = (prefix[i + 1] - prefix[left] + MOD) % MOD;
    prefix[i + 2] = (prefix[i + 1] + dp) % MOD;
  }

  return (prefix[n + 1] - prefix[n] + MOD) % MOD;
};
