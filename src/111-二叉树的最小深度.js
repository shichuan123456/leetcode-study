
var minTreeDepth = (root) => {
  if(root == null) return 0;
  if(!root.left && !root.right) return 1;
  if(root.left && !root.right) return 1 + minTreeDepth(root.left); 
  if(!root.left && root.right) return 1 + minTreeDepth(root.right); 
  return Math.min(minTreeDepth(root.left), minTreeDepth(root.right)) + 1;
}
