/*
 * @Author: hexp 
 * @Date: 2024-01-04 21:31:27 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-04 23:15:51
 */

/* 
中等

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例 1：

https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]

提示：

链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

进阶：你能尝试使用一趟扫描实现吗？

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
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
 * 方法一
 * 获取链表长度
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let cur = head
  const length = getLength(head)
  for (let i = 0; i < length - 1 - n; i++) {
      cur = cur.next
  }
  if (length === n) return head.next
  cur.next = cur.next.next
  return head
};

const getLength = (head) => {
  let length = 0
  while (head) {
      length++
      head = head.next
  }
  return length
}

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2))

/**
 * 方法二
 * 快慢指针
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head, fast = head
  while (n--) {
    fast = fast.next
  }
  if (!fast) {
    return head.next
  }
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return head
}

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2))