/* 
const translateNum = (num) => {
 const str = num.toString();
 const dfs = function(str, pointer) {
  if(pointer >= str.length) return 1;
  const temp = Number(str.slice(pointer, pointer + 2));
  if(temp >= 10 && temp <= 26) {
    return dfs(str, pointer + 1) + dfs(str, pointer + 2);
  }else{
    return dfs(str, pointer + 1)
  }
 }
 return dfs(str, 0);
} */

const translateNum = (num) => {
  const str = num.toString()
  const n = str.length
  const memo = new Array(n)
  memo[n - 1] = 1   // 指针临界时的子树的计算结果
  memo[n] = 1       // 指针越界时的子树的计算结果
  const dfs = (str, pointer, memo) => {
    if (memo[pointer]) return memo[pointer] // 之前存过，直接拿来用
    const temp = Number(str[pointer] + str[pointer + 1])
    if (temp >= 10 && temp <= 25) { // 记录两个分支的结果相加
      memo[pointer] = dfs(str, pointer + 1, memo) + dfs(str, pointer + 2, memo)
    } else { // 记录1个分支的结果
      memo[pointer] = dfs(str, pointer + 1, memo)
    }
    return memo[pointer] // 当前子树的计算结果向上返回
  }
  return dfs(str, 0, memo) // dfs入口
}

console.log(translateNum(12))