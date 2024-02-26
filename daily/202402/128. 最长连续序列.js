/*
 * @Author: hexp 
 * @Date: 2024-02-25 21:38:37 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-02-26 23:17:38
 */

/* 
中等

给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
 

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109

来源：力扣（LeetCode）
链接：<https://leetcode.cn/problems/longest-consecutive-sequence/>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 方法一：排序 + 去重 + 循环

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0
  nums.sort((a, b) => a - b)
  nums = [...new Set(nums)]
  let max = 1, res = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) {
      res++
      max = Math.max(max, res)
    } else {
      res = 1
    }
  }
  return max
}

// 方法二：哈希，循环，找到没有num-1但是有num+1的数据，再while往上找

/**
* @param {number[]} nums
* @return {number}
*/
var longestConsecutive = function (nums) {
 if (nums.length === 0) return 0
 const set = new Set()
 for (const num of nums) {
   set.add(num)
 }
 let max = 1
 for (const s of nums) {
   if (!set.has(s - 1)) {
     let num = s, res = 1
     while (set.has(num + 1)) {
       num++
       res++
     }
     max = Math.max(max, res)
   }
 }
 return max
}