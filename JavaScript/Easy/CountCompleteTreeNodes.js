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
var countNodes = function (root) {
    if (root === null) {
        return 0;
    }

    let left = root;
    let right = root;
    let leftHeight = 0;
    let rightHeight = 0;

    while (left !== null) {
        left = left.left;
        leftHeight++;
    }

    while (right !== null) {
        right = right.right;
        rightHeight++;
    }

    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};
