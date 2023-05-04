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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let newRoot = new TreeNode(0);
    let cur = newRoot;

    const inorder = (node) => {
        if (!node) return;
        inorder(node.left);

        cur.right = node;
        node.left = null;
        cur = node;

        inorder(node.right);
    };

    inorder(root);
    return newRoot.right;
};
