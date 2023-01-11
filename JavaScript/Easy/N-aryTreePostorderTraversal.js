/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    if (!root) return [];
    let result = [];
    for (let child of root.children) {
        result = result.concat(postorder(child));
    }
    result.push(root.val);
    return result;
};