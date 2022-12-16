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
 * @return {number[]}
 */
var findMode = function (root) {
    let result = [];
    let max = 0;
    let count = 0;
    let prev = null;
    let traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        if (prev !== null) {
            if (node.val === prev) {
                count++;
            } else {
                count = 1;
            }
        } else {
            count = 1;
        }
        if (count > max) {
            max = count;
            result = [node.val];
        } else if (count === max) {
            result.push(node.val);
        }
        prev = node.val;
        traverse(node.right);
    };
    traverse(root);
    return result;
};