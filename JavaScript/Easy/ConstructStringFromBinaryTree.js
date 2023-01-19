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
 * @return {string}
 */
var tree2str = function (root) {
    if (root === null) return '';
    let result = root.val.toString();
    result += (root.left !== null) ? `(${tree2str(root.left)})` : (root.right !== null) ? '()' : '';
    result += (root.right !== null) ? `(${tree2str(root.right)})` : '';
    return result;
};