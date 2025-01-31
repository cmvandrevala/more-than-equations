---
title: Problem Set 4
tags: [csc-216]
description: This problem set is from week four of the course.
---

In the field of linear algebra, the dot product of two vectors with $n$ elements each, $\vec{a} = [a_1, a_2, ..., a_n]$ and $\vec{b} = [b_1, b_2, ..., b_n]$, can be calculated as follows:

$$
\vec{a} \cdot \vec{b} = \sum_n a_n b_n
$$

1. Write the pseudocode for a program that takes two arrays of numbers as inputs and returns their dot product. You can assume that the arrays have equal length.
2. What is the time complexity of your dot product algorithm?
3. What is the space complexity of your dot product algorithm?

---

Consider an $n \times n$ matrix that is represented as a two-dimensional array of integers. In the field of linear algebra, the transpose of a matrix flips a matrix over its diagonal. In other words, it switches the row and column indices of the matrix. For example:

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
5. What is the time complexity of your transpose algorithm?
6. What is the space complexity of your transpose algorithm?

> [!tip]- Hint!
>
> There are many ways to approach this problem, especially if you are not looking to create an especially efficient algorithm. However, for those of you who are interested, there is an algorithm called an "in-place matrix transposition" that can take the transpose with O(1) space. Feel free to look it up for this problem!

---

Arrays have a fixed size in memory, so we cannot append a new element onto the end of an array. However, a dynamic array is a data structure that gives you all of the benefits of an array plus the ability to append items to the end. Under the hood, when you try to add an element to a dynamic array that is full, the program creates a new dynamic array (usually twice the size of the old one), copies in the existing array data to the new one, and then appends the new element to the end of the array.

7. Write the pseudocode that will append an element to the end of a dynamic array. Make sure that your algorithm handles the cases of when the array is full of elements and when the array is not completely full.
8. What is the time complexity of your algorithm when the array is not yet full?
9. What is the time complexity of your algorithm when the array is full?

---

> [!success]-Extra Credit Opportunity!
>
> The coupon collector's problem is a probabilistic experiment in which a person repeatedly draws a random number between $0$ and $n$ (with replacement) until each number in the collection has been selected at least once. If you get really lucky, you will only need $n$ draws to get all $n$ numbers. However, it is more likely that you will need more than $n$ draws to see all $n$ numbers.
>
> 1. Write the pseudocode for a function that performs this simulation for some input $n$ and returns the number of draws needed to get all of the numbers.
> 2. Suppose I asked you to calculate the time complexity of your coupon collector's problem algorithm. This is a complicated problem because you have to take into account the probabilities of selecting a given combination of elements after some number of draws (welcome to the field of combinatorics!). Use [this site](https://brilliant.org/wiki/coupon-collector-problem/) as a reference and make a prediction as to what is the time complexity of the algorithm (justify your answer).
