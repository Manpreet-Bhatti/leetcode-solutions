/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
    let aliceSum = aliceSizes.reduce((a, b) => a + b);
    let bobSum = bobSizes.reduce((a, b) => a + b);
    let diff = (aliceSum - bobSum) / 2;
    let bobSizesSet = new Set(bobSizes);

    for (let i = 0; i < aliceSizes.length; i++) {
        let target = aliceSizes[i] - diff;
        if (bobSizesSet.has(target)) {
            return [aliceSizes[i], target];
        }
    }

    return [];
};
