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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let queue = [root];
    let depth = 0;
    let depthX = 0;
    let depthY = 0;
    let parentX = null;
    let parentY = null;

    while (queue.length > 0) {
        let levelSize = queue.length;
        depth++;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
                if (node.left.val === x) {
                    depthX = depth;
                    parentX = node.val;
                } else if (node.left.val === y) {
                    depthY = depth;
                    parentY = node.val;
                }
            }
            if (node.right) {
                queue.push(node.right);
                if (node.right.val === x) {
                    depthX = depth;
                    parentX = node.val;
                } else if (node.right.val === y) {
                    depthY = depth;
                    parentY = node.val;
                }
            }
        }
    }

    return depthX === depthY && parentX !== parentY;
};