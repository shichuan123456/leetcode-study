/* 
  n阶楼梯，每次怕1或者2个台阶，有多少种不同的方法爬到楼顶
*/
// 递归
function climbStairs(n) {
  if( n == 0 || n == 1) return  1;
  return climbStairs(n-1) + climbStairs(n-2);
}
// 记忆化搜索
function climbStairs1(n) {
  if( n == 0 || n == 1) return  1;
  const map = new Map();
  if(map.get(n)) return map.get(n);
  map.set(n, climbStairs1(n-1) + climbStairs1(n-2));
  return map.get(n);
}
// 动态规划
function climbStairs2(n) {
  const arr = new Array(n + 1).fill(0);
  arr[0] = arr[1] = 1;
  for(let i = 2; i < arr.length; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n]
}
// 空间压缩
function climbStairs3(n){
  let prev1 = 1, prev2 = 1, temp;
  for(let i = 2; i < n + 1; i++) {
    temp = prev1 + prev2;
    prev1 = prev2;
    prev2 = temp;
  }
  return prev2;
}

console.log(climbStairs(10));
console.log(climbStairs1(10));
console.log(climbStairs2(10));
console.log(climbStairs3(10));