---
title: Problem Set 3
tags: [csc-216]
description: This problem set focuses on arrays and recursion.
---

(3 points) Suppose I have an unsorted array of integers with a size of $n$.

1. Write the pseudocode for a looping (non-recursive) algorithm that finds the maximum element in the array.
2. Write the pseudocode for a recursive algorithm that finds the maximum element in the array.
3. What is the runtime Big-$\theta$ value for your recursive algorithm? Write a proof for your answer.
4. What is the space Big-$\theta$ value for your recursive algorithm? Write a proof for your answer.

---

(2 points) Consider the Harmonic numbers, given by the series and recursion relation shown below. Let's come up with a recursive algorithm for calculating the nth Harmonic number.

$$
H_n = \sum_{k = 1}^n \frac{1}{k}
$$

$$
H_n = H_{n-1} + \frac{1}{n}
$$

5. What is the value of $H_1$?
6. Write the pseudocode for a recursive algorithm to calculate the nth Harmonic number.
7. Is your algorithm an example of linear, binary, or multiple recursion? Why?
8. Sketch out a recursive trace of your function when the argument $n = 4$ is used. Use the example of the recursive trace from your textbook as a template.

---

(3 points) Suppose I have a two-dimensional array of integers.

9. Write the pseudocode for a looping (non-recursive) algorithm that computes the sum of all the elements in the two-dimensional array.
10. Write the pseudocode for a recursive algorithm that computes the sum of all the elements in the two-dimensional array.
11. What is the runtime Big-$\theta$ value for your recursive algorithm?
12. What is the space Big-$\theta$ value for your recursive algorithm?

---

(2 points) You are given an array consisting of $N$ random integers. Write the pseudocode for a function that takes the array as an argument and returns a new array with length $M$ that satisfys the following conditions:

13. Every element of the output array is a positive integer
14. The elements of the output array are listed in increasing order
15. The sum of the elements in the output array is as small as possible
