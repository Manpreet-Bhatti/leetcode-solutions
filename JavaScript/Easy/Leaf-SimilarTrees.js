/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    function getLeaves(root, arr) {
        if (root.left === null && root.right === null) {
            arr.push(root.val);
        }
        if (root.left !== null) {
            getLeaves(root.left, arr);
        }
        if (root.right !== null) {
            getLeaves(root.right, arr);
        }
    }

    let arr1 = [];
    let arr2 = [];

    getLeaves(root1, arr1);
    getLeaves(root2, arr2);

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};