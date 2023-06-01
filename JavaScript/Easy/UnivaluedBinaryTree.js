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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    let value = root.val;

    function traverse(node) {
        if (node === null) {
            return true;
        }
        if (node.val !== value) {
            return false;
        }
        return traverse(node.left) && traverse(node.right);
    }

    return traverse(root);
};