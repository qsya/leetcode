/*
 * @Author: hexp 
 * @Date: 2024-02-25 21:38:37 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-02-26 22:52:47
 */

/* 
简单

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

示例 1：

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

示例 2:

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]

提示：

链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
 
进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/reverse-linked-list/
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
 * @param {ListNode} head
 * @return {ListNode}
 * 方法一
 */
var reverseList = function (head) {
  const list = new ListNode()
  let cur = list
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let length = arr.length
  while (length-- > 0) {
    cur = cur.next = { val: arr[length], next: null }
  }
  return list.next
}

console.log(reverseList([1, 2, 3, 4, 5]))

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 方法一：迭代
 */
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

console.log(reverseList([1, 2, 3, 4, 5]))


/**
 * @param {ListNode} head
 * @return {ListNode}
 * 方法三：递归
 */
var reverseList = function (head) {
  if (!head || !head.next) return head
  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
};

console.log(reverseList([1, 2, 3, 4, 5]))