/*
 * @Author: hexp 
 * @Date: 2024-01-09 21:57:32 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-09 22:30:30
 */


/* 
中等

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 

提示：

0 <= s.length <= 5 * 10^4
s 由英文字母、数字、符号和空格组成

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let l = 0
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= l) {
      l = map.get(s[i]) + 1
    }
    max = Math.max(i - l + 1, max)
    map.set(s[i], i)
  }
  return max
}


console.log(lengthOfLongestSubstring("abcabcbb"))

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0, r = 1, max = 0
  if (s.length <= 1) return s.length
  while (r < s.length) {
    let temp = s.slice(l, r)
    if (temp.includes(s.charAt(r))) {
      l++
    } else {
      r++
    }
    max = Math.max(r - l, max)
  }
  return max
}

console.log(lengthOfLongestSubstring(" "))