/*
 * @Author: hexp 
 * @Date: 2024-01-07 19:43:15 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-08 23:18:36
 */

/* 
中等

给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。

示例 1：

输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
输出："apple"
示例 2：

输入：s = "abpcplea", dictionary = ["a","b","c"]
输出："a"
 

提示：

1 <= s.length <= 1000
1 <= dictionary.length <= 1000
1 <= dictionary[i].length <= 1000
s 和 dictionary[i] 仅由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-word-in-dictionary-through-deleting/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  const length = dictionary.length
  let res = ''
  for (let i = 0; i < length; i++) {
    let item = dictionary[i]
    let str = dictionary[i]
    for (const _s of s) {
      if (_s === str[0]) str = str.substring(1, str.length)
    }
    if (!str) {
      if (item.length > res.length) res = item
      else if (item.length === res.length && item < res) res = item
    }
  }
  return res
}

console.log(findLongestWord('abpcplea', ["ale", "apple", "monkey", "plea"]))


/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let res = ''
  for (let i = 0; i < dictionary.length; i++) {
    let str = dictionary[i]
    let slow = 0, fast = 0
    while (slow < s.length && fast < str.length) {
      if (s.charAt(slow) === str.charAt(fast)) {
        fast++
      }
      if (fast === str.length) {
        if (res.length < str.length || (res.length === str.length && res > str)) {
          res = str
        }
      }
      slow++
    }
  }
  return res
}

console.log(findLongestWord('abpcplea', ["ale", "apple", "monkey", "plea"]))