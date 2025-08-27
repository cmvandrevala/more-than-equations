---
title: Problem Set 3
tags: [csc-216]
description: This problem set focuses on arrays and recursion.
---

(2 points) Suppose I have an unsorted array of integers with a size of $n$.

1. Write the pseudocode for a recursive algorithm that finds the maximum element in the array.
2. What is the time-complexity (Big-$\theta$) for your recursive algorithm? Prove your answer.

---

(5 points) Consider the Harmonic numbers, given by the series and recursion relation shown below.

$$
H_n = \sum_{k = 1}^n \frac{1}{k}
$$

$$
H_n = H_{n-1} + \frac{1}{n}
$$

3. What is the value of $H_1$?
4. Write the pseudocode for a recursive algorithm that calculates the nth Harmonic number.
5. Sketch out a recursive trace of your function when the argument $n = 4$ is used. Use the example of the recursive trace from your textbook as a template.
6. Is your algorithm an example of linear, binary, or multiple recursion? Why?
7. Prove that your recursive algorithm has a time complexity of O(n).

---

(1 point) An algorithm is defined by the following recurrence relation. Use the substitution method to prove that this algorithm is $O(n log n)$.

$$
T(n) = 2 T(n/2) + n
$$

---

(1 point) An algorithm is defined by the following recurrence relation. Use the Master Theorem to show that this algorithm is $O(n^2)$.

$$
T(n) = 3 T(n/2) + n^2
$$

---

(1 point) You are given an unsorted array consisting of $N$ random integers. Write the pseudocode for a function that takes the array as an argument and returns a new array that only contains the positive integers from the original array. It should be a tail-call optimized recursive algorithm.
