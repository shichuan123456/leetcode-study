/**
 * @param {string} s
 * @return {number}
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 */
var lengthOfLongestSubstring = function(s) {
  let res = [], max = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i], idx = res.indexOf(element);
    if(idx > -1) {
      res = res.slice(idx + 1);
    }
    res.push(element);
    max = Math.max(max, res.length);
  }
  return max;
};
console.log(lengthOfLongestSubstring("  "));
