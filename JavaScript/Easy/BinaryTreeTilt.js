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
var findTilt = function (root) {
    let tilt = 0;
    const traverse = (node) => {
        if (node === null) {
            return 0;
        }
        const left = traverse(node.left);
        const right = traverse(node.right);
        tilt += Math.abs(left - right);
        return node.val + left + right;
    };
    traverse(root);
    return tilt;
};