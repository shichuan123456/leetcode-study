

var isSameTree = function(root1, root2) {
  if(root1 == null && root2 == null) return true;
  if(root1 == null || root2 == null) return false;
  if(root1.val !== root2.val) {
    return false
  }
  return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
}