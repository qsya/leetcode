/*
 * @Author: hexp 
 * @Date: 2024-02-26 21:38:37 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-02-26 22:58:22
 */

/* 
中等

给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

示例1：

![](https://pic.leetcode-cn.com/1626420025-fZfzMX-image.png)

输入：l1 = [7,2,4,3], l2 = [5,6,4]
输出：[7,8,0,7]
示例2：

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[8,0,7]
示例3：

输入：l1 = [0], l2 = [0]
输出：[0]

提示：

链表的长度范围为 [1, 100]
0 <= node.val <= 9
输入数据保证链表代表的数字无前导 0

进阶：如果输入链表不能翻转该如何解决？

来源：力扣（LeetCode）
链接：<https://leetcode.cn/problems/add-two-numbers-ii/>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1 = reverseList(l1)
  l2 = reverseList(l2)
  console.log(l1,l2)
  const list = new ListNode()
  let cur = list
  while (l1 || l2) {
      let flag = 0
      cur.val = (l1?.val || 0) + (l2?.val || 0) + cur.val
      if (cur.val > 9) {
          cur.val -= 10
          flag = 1
      }
      l1 = l1?.next
      l2 = l2?.next
      if (l1 || l2 || flag) cur = cur.next = { val: flag, next: null }
  }
  return reverseList(list)
};

/** 反转链表 */
var reverseList = function (head) {
  let prev = null
  while (head) {
      const next = head.next
      head.next = prev
      prev = head
      head = next
  }
  return prev
};