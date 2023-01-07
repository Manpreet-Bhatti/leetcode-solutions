/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let set = new Set(candyType);
    let half = candyType.length / 2;
    return set.size > half ? half : set.size;
};