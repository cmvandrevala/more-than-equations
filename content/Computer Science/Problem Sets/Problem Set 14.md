---
title: Problem Set 14
tags: [csc-216]
description: This problem set is from week fourteen of the course.
---

1. List the prefixes of the string P = "aaabbaaa" that are also suffixes of P.

---

Consider the following set of strings: {"silent", "song", "surround", "sits", "silence", "somber", "sombrero"}

2. Draw a standard trie for the strings
3. Draw a compressed trie for the strings

---

4. Draw the compact representation of the suffix trie for the string "minimize minime".

---

5. Draw the frequency array and Huffman tree for the string "dogs do not spot hot pots or cats".

---

Let's play a jumping game! You are given an array of non-negative integers. Each number in the array tells you the maximum number of steps you can jump forward from that position. For example, if `arr[i] = 3`, you can jump to index `i + 1`, `i + 2`, or `i + 3` from position i. Conversely, if `arr[i] = 0`, you cannot jump forward from that position.

Write the pseudocode for three different functions that find the minimum number of jumps needed to move from the first position in the array to the last position. They should return -1 if you can’t reach the end of the array. The three functions should be:

6. A brute force algorithm
7. A greedy algorithm
8. A dynamic programming solution

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
