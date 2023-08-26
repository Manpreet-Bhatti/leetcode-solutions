var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => a - b);

    // Flip all the negative numbers first
    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    // If k is odd, flip the smallest number
    if (k % 2 === 1) {
        let min = Math.min(...nums);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === min) {
                nums[i] = -nums[i];
                break;
            }
        }
    }

    // Sum the array
    return nums.reduce((a, b) => a + b, 0);
};
