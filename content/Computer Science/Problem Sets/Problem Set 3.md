---
title: Problem Set 3
tags: [csc-216]
description: This problem set is from week three of the course.
---

1. Suppose I have an unsorted array of integers with a size of $n$.

    * Write the pseudocode for a looping (non-recursive) algorithm that finds the maximum element in the array.
    * Write the pseudocode for a recursive algorithm that finds the maximum element in the array.
    * What is the runtime Big-$\theta$ value for your recursive algorithm?
    * What is the space Big-$\theta$ value for your recursive algorithm?

---

2. Consider the Harmonic numbers, given by the series and recursion relation shown below. Let's come up with a recursive algorithm for calculating the nth Harmonic number.

    * The base case for our recursive algorithm will be the smallest Harmonic number in the series. In other words, the base case will be $H_1$. What is the value of $H_1$?
    * From the recurrence relation, we know that the nth Harmonic number can be found by taking the (n-1)th Harmonic number and adding $1/n$ to it. Write out the pseudocode for a recursive algorithm to calculate the nth Harmonic number.
    * Is your algorithm an example of linear, binary, or multiple recursion? Why?
    * Sketch out a recursive trace of your function. Use $n = 4$ as the argument to the function.

$$
H_n = \sum_{k = 1}^n \frac{1}{k}
$$

$$
H_n = H_{n-1} + \frac{1}{n}
$$

---

3. Describe a recursive algorithm that computes the sum of all the elements in a two-dimensional array of integers. You can either use pseudocode or write out a few sentences.

> [!tip]- Hint!
>
> It might be helpful to first think about how you would solve this problem using `for` loops. Then, take that solution and convert it to a recursive algorithm.
