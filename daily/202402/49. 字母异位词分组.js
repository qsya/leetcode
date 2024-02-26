/*
 * @Author: hexp 
 * @Date: 2024-02-22 16:28:12 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-02-26 23:13:43
 */

/* 
中等

给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]
 

提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母

来源：力扣（LeetCode）
链接：<https://leetcode.cn/problems/group-anagrams/>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 方法一：排序 + map

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  for (const str of strs) {
    const key = str.split('').sort().join('')
    const list = map.has(key) ? map.get(key) : []
    list.push(str)
    map.set(key, list)
  }
  return [...map.values()]
}

// 方法二：计数，用数字代替26个字母

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = new Object()
  for (const str of strs) {
    const count = new Array(26).fill(0)
    for (const s of str) {
      count[s.charCodeAt() - 'a'.charCodeAt()]++
    }
    obj[count] ? obj[count].push(str) : obj[count] = [str]
  }
  return Object.values(obj)
}