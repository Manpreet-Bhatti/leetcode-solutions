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
var sumRootToLeaf = function (root) {
    let sum = 0;

    const dfs = (node, currentNumber) => {
        if (!node) return;

        // Update the current number.
        currentNumber = (currentNumber << 1) | node.val;

        // If we reach a leaf node, add the current number to the sum.
        if (!node.left && !node.right) {
            sum += currentNumber;
            return;
        }

        // Continue the depth-first search.
        dfs(node.left, currentNumber);
        dfs(node.right, currentNumber);
    };

    dfs(root, 0);

    return sum;
};
