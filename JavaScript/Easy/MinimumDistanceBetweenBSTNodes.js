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
var minDiffInBST = function (root) {
    let minDiff = Number.MAX_SAFE_INTEGER;
    let prevVal = null;

    const traverse = node => {
        if (!node) return;
        traverse(node.left);
        if (prevVal !== null) minDiff = Math.min(minDiff, node.val - prevVal);
        prevVal = node.val;
        traverse(node.right);
    };

    traverse(root);
    return minDiff;
};
