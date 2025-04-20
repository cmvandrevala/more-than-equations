---
title: Problem Set 14
tags: [csc-216]
description: This problem set is from week fourteen of the course.
---

There are $n$ houses built in a line, and each contains some money. These houses will be represented as an array of $n$ integers where each index represents a house and each value represents the money it contains. A robber wants to steal money from these houses, but they cannot steal from two adjacent houses.

Write the pseudocode for three different functions that take an array of house values as their argument and return the maximum amount of money which can be stolen. The three functions should be:

1. A brute force algorithm
2. A greedy algorithm
3. A dynamic programming solution

Remember that your greedy algorithm might not always return the optimal solution - this is totally fine!

```text
Example Input: [6, 7, 1, 3, 8, 2, 4]
Output: 19
Explanation: The robber can steal from houses (indexes) 0, 2, 4, and 6.

Example Input: [5, 3, 4, 11, 2]
Output: 16
Explanation: The robber can steal from houses (indexes) 0 and 3.
```

---

Let's play a jumping game! You are given an array of non-negative integers. Each number in the array tells you the maximum number of steps you can jump forward from that position. For example, if `arr[i] = 3`, you can jump to index `i + 1`, `i + 2`, or `i + 3` from position i. Conversely, if `arr[i] = 0`, you cannot jump forward from that position.

Write the pseudocode for three different functions that find the minimum number of jumps needed to move from the first position in the array to the last position. They should return -1 if you can’t reach the end of the array. The three functions should be:

4. A brute force algorithm
5. A greedy algorithm
6. A dynamic programming solution

Remember that your greedy algorithm might not always return the optimal solution - this is totally fine!

```text
Input: arr[] = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
Output: 3
Explanation:
Jump from the first element to the second element with a value of 3.
Then, jump to the fifth element with a value of 9.
Finally, jump to the last element.


Input: arr = [1, 4, 3, 2, 6, 7]
Output: 2
Explanation:
Jump from the first to the second element.
Then, jump to the last element.


Input: arr = [0, 10, 20]
Output: -1
Explanation:
We cannot jump anywhere from the first element since its value is 0.
```

---

Suppose you have a list of various coin denominations. If I give you a certain total value, how many different ways can you put together combinations of the denominations to add up to the given sum? You can assume that you have an infinite supply of each type of coin.

Write the pseudocode for three different functions that take an array of coin denominations and a sum as their inputs and return the number of ways you can build up that sum. The three functions should be:

7. A brute force algorithm
8. A greedy algorithm
9. A dynamic programming solution

Remember that your greedy algorithm might not always return the optimal solution - this is totally fine!

```text
Input: sum = 4, coins = [1, 2, 3]
Output: 4
Explanation:
There are four solutions - [1, 1, 1, 1], [1, 1, 2], [2, 2] and [1, 3]

Input: sum = 10, coins = [2, 5, 3, 6]
Output: 5
Explanation:
There are five solutions - [2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 2, 6], [2, 3, 5] and [5, 5]

Input: sum = 10, coins = [10]
Output: 1
Explanation:
There is one solution - [10]

Input: sum = 5, coins = [4]
Output: 0
Explanation:
There are no viable solutions
```
