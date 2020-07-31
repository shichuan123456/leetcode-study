/* 
  给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
  如果不存在，则返回  -1。
*/
// 双层遍历
// var strStr = function(haystack, needle) {
//   if(!needle) return 0;
//   let index = -1;
//   for(let i = 0; i < haystack.length; i++) {
//     let j = i, k = 0;
//     while(j < haystack.length && k < needle.length) {
//       if(haystack[j] === needle[k]) {
//         j++;
//         k++;
//       }else{
//         break;
//       }
//     }
//     if(j<=haystack.length && k>=needle.length) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// };


// indexOf

/*
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
}
 */
// flag标记
/* var strStr = function(haystack, needle){
  if (needle==="") return 0
  let flag = false;
  for(let i = 0; i < haystack.length;i++) {
    if(haystack[i] === needle[0]) {
      flag = true;
      for(let j = 1; j <needle.length;j++) {
        if(haystack[i+j] !== needle[j]) {
          flag = false;
          break;
        }
      }
     if(flag) return i;
    }
  }
  return -1;
}; */


// substring取出字符串进行比较
/* var strStr = function (haystack, needle) {
  if (needle === "") return 0
  for(let i = 0; i < haystack.length; i++) {
    if(haystack[i] === needle[0]) {
      if(haystack.substring(i, i + needle.length) === needle) {
        return i;
      }
    }
  }
  return -1;
};
 */
console.log(strStr("fdsfdsfflldsf", "ll"));