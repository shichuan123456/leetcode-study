/**
 * @param {string} s
 * @return {number}
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 */
const lengthOfLongestSubstring = function(s) {
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


const lengthOfLongestSubstring1 = function(s) {
  let freq = new Array(256).fill(0);
  let l = 0, r = -1;
  let res = 0;
  while(l < s.length) {
    // 用数组下标去去元素一定要主要越界的问题
    if( r + 1 < s.length && freq[s[r+1].charCodeAt()] == 0) {
      freq[s[++r].charCodeAt()]++; 
    }else{
      freq[s[l++].charCodeAt()]--;
    }
    res = Math.max(res, r - l +1);
  }
  return res;
};


console.log(lengthOfLongestSubstring("abbcdedddddejkliklllll"));
console.log(lengthOfLongestSubstring1("abbcdedddddejkliklllll"));
