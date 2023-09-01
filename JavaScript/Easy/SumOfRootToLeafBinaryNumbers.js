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
    const result = [];
    let sum = 0;

    const dfs = (node, path) => {
        if (!node) return;

        path += node.val;

        if (!node.left && !node.right) {
            result.push(path);
            return;
        }

        dfs(node.left, path);
        dfs(node.right, path);
    };

    dfs(root, '');

    for (const path of result) {
        sum += parseInt(path, 2);
    }

    return sum;
};
