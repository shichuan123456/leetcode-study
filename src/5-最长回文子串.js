/* 
  动态规划, 重点是状态转移方程的建立。
  dp[i,j]:字符串s从索引i到j的子串是否是回文串
  dp[i][j] = s[i] == s[j] && ( j - i < 2 || dp[i+1][j-1]);
  input: "babad"
  output: "bab"
*/
var longestPalindrome = function(s) {
  const n = s.length;
  const dp = Array.from(new Array(n), (_) => new Array(n).fill(0));
  let res = "";
  for(let i = n-1; i >= 0; i--) {
    for(let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i+1][j-1]);
      if(dp[i][j] && (j - i + 1 > res.length )) {
        res = s.substring(i, j+1);
      }
    }
  }
  return res;
};

console.log(longestPalindrome("baaaaabcd"));

