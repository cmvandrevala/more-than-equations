---
title: Problem Set 4
tags: [csc-216]
description: This problem set focuses on algorithms involving arrays. It also introduces a combinatorics problem called the Coupon Collector's problem.
---

(3 points) In the field of linear algebra, the dot product of two vectors with $n$ elements each, $\vec{a} = [a_1, a_2, ..., a_n]$ and $\vec{b} = [b_1, b_2, ..., b_n]$, can be calculated as follows:

$$
\vec{a} \cdot \vec{b} = \sum_n a_n b_n
$$

1. Write the pseudocode for a function that takes two arrays of numbers as inputs and returns their dot product. Return null or undefined if the arrays are not the same length.
2. What is the time complexity of your dot product algorithm? Show your work.
3. What is the space complexity of your dot product algorithm? Explain your reasoning.

---

(3 points) Consider an $n \times n$ matrix that is represented as a two-dimensional array of integers. In the field of linear algebra, the transpose of a matrix flips a matrix over its diagonal. In other words, it switches the row and column indices of the matrix:

$$
\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9
\end{bmatrix}^T
=
\begin{bmatrix}
1 & 4 & 7\\
2 & 5 & 8\\
3 & 6 & 9
\end{bmatrix}
$$

4. Write the pseudocode for an algorithm that takes a square matrix and replaces it with its transpose.
5. What is the time complexity of your transpose algorithm? Show your work.
6. What is the space complexity of your transpose algorithm? Explain your reasoning.

> [!tip]- Hint!
>
> Suppose I have a 2D array called `arr` which represents a square matrix. The transpose of `arr` will take element `arr[i][j]` and move it to `arr[j][i]`. For example, `arr[2][1]` becomes `arr[1][2]`. For another example, `arr[3][3]` stays as `arr[3][3]`.

---

(4 points) Arrays have a fixed size in memory, so we cannot append a new element onto the end of an array. However, a dynamic array is a data structure that gives you all of the benefits of an array plus the ability to append items to the end. Under the hood, when you try to add an element to a dynamic array that is full, the program creates a new dynamic array (usually twice the size of the old one), copies in the existing array data to the new one, and then appends the new element to the next available spot.

7. Write the pseudocode that will append an element to the end of a dynamic array. Make sure that your algorithm handles the cases of when the array is full of elements and when the array is not completely full.
8. What is the time complexity of your algorithm when the array is completely empty? Show your work.
9. What is the time complexity of your algorithm when the array is partially full? Show your work.
10. What is the time complexity of your algorithm when the array is completely full? Show your work.

---

## ✨ Optional Extra Credit ✨

(2 points) The coupon collector's problem is a probabilistic experiment in which a person repeatedly draws a random number between $0$ and $n$ (with replacement) until each number in the collection has been selected at least once. If you get really lucky, you will only need $n$ draws to get all $n$ numbers. However, it is more likely that you will need more than $n$ draws to see all $n$ numbers.

10. Write the pseudocode for a function that performs this simulation for some input $n$ and returns the number of draws needed to get all of the numbers.
11. Suppose I asked you to calculate the time complexity of your coupon collector's problem algorithm. This is a complicated problem because you have to take into account the probabilities of selecting a given combination of elements after some number of draws. What is the time complexity of the algorithm? Prove your answer.

> [!tip]- Helpful Resource!
>
> Welcome to the field of combinatorics!. [This site](https://brilliant.org/wiki/coupon-collector-problem/) is a great reference as to how you might go about solving this problem.
