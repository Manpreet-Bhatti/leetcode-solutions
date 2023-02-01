/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    let min = root.val;
    let secondMin = Number.MAX_SAFE_INTEGER;
    let minHeap = [root];
    while (minHeap.length > 0) {
        let node = minHeap.pop();
        if (node.val > min && node.val < secondMin) {
            secondMin = node.val;
        }
        if (node.left) {
            minHeap.push(node.left);
        }
        if (node.right) {
            minHeap.push(node.right);
        }
        minHeap.sort((a, b) => a.val - b.val);
    }
    return secondMin === Number.MAX_SAFE_INTEGER ? -1 : secondMin;
};
