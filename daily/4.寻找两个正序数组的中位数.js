/*
 * @Author: hexp 
 * @Date: 2023-04-05 22:29:42 
 * @Last Modified by: hexp
 * @Last Modified time: 2023-04-06 14:33:18
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

// 解法二：双指针移动
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length, n = nums2.length, left = -1, right = -1, aStart = 0, bStart = 0
  for (let i = 0; i <= (m + n) / 2; i++) {
    left = right
    if (aStart < m && (bStart >= n || nums1[aStart] < nums2[bStart])) {
      right = nums1[aStart++]
    } else {
      right = nums2[bStart++]
    }
  }
  if ((m + n) & 1 === 0) return (left + right) / 2
  else return right
}

console.log(findMedianSortedArrays([3], [-2, -1]))

// 解法三：二分法 第k小数
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  const mid = (len1 + len2 + 1) >> 1
  const left = getK(nums1, nums2, 0, 0, mid)
  // 判断总长度奇偶
  if ((len1 + len2) % 2) {
    return left
  } else {
    const right = getK(nums1, nums2, 0, 0, mid + 1)
    return (left + right) / 2
  }
}

// 取第k小的数
function getK (nums1, nums2, start1, start2, k) {
  const len1 = nums1.length
  const len2 = nums2.length
  /* 特例 */
  // nums1 数组的元素排除完
  if (len1 === start1) return nums2[start2 + k - 1]
  if (len2 === start2) return nums1[start1 + k - 1]
  // 排除到只剩两个元素取最小 即剩余元素的最小值
  if (k === 1) return Math.min(nums1[start1], nums2[start2])

  /* 通常情况 */
  // 取k的一半 同时注意可能会超出数组长度 最多取数组最后一个元素
  const i = start1 + Math.min(len1, k >> 1) - 1
  const j = start2 + Math.min(len2, k >> 1) - 1
  // j 前面的所有元素被排除了 同时缩减k的值
  if (nums1[i] > nums2[j]) {
    return getK(nums1, nums2, start1, j + 1, k - (j - start2 + 1))
  } else {
    return getK(nums1, nums2, i + 1, start2, k - (i - start1 + 1))
  }
}

console.log(findMedianSortedArrays([3], [-2, -1]))