/*
 * @Author: hexp 
 * @Date: 2023-04-06 15:07:00 
 * @Last Modified by: hexp
 * @Last Modified time: 2023-04-06 15:55:14
 */

/* 
中等

给你一个字符串 s，找到 s 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length
  if (s < 2) return s

  let left = 0, maxLen = 1
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      console.log(i, j, maxLen, j - i + 1 > maxLen, validPalindrome(s, i, j))
      if (j - i + 1 > maxLen && validPalindrome(s, i, j)) {
        maxLen = j - i + 1
        left = i
      }
    }
  }
  return s.substring(left, left + maxLen)
}

const validPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

console.log(longestPalindrome('babad'))