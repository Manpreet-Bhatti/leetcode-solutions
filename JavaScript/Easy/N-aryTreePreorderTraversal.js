/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (!root) return [];
    let result = [root.val];
    for (let child of root.children) {
        result = result.concat(preorder(child));
    }
    return result;
};