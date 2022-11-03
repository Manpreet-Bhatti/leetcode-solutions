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
 * @return {string[]}
 */
var dfs = function (root, path, result) {
  if (!root.left && !root.right) {
    result.push(path.join("->"));
  }
  if (root.left) {
    path.push(root.left.val);
    dfs(root.left, path, result);
    path.pop();
  }
  if (root.right) {
    path.push(root.right.val);
    dfs(root.right, path, result);
    path.pop();
  }
};

var binaryTreePaths = function (root) {
  if (!root) {
    return [];
  }
  let result = [];
  let path = [];
  path.push(root.val);
  dfs(root, path, result);
  return result;
};
