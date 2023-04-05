/*
 * @Author: hexp 
 * @Date: 2023-04-05 22:29:42 
 * @Last Modified by: hexp
 * @Last Modified time: 2023-04-05 22:49:35
 */

/*
困难

 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

 

示例 1：

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/median-of-two-sorted-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b)
  const length = arr.length
  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2
  } else {
    return arr[Math.floor(length / 2)]
  }
}

console.log(findMedianSortedArrays([3], [-2, -1]))