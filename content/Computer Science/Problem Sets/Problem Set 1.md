---
title: Problem Set 1
tags: [csc-216]
description: This problem set is from week one of the course.
---

1. Write the pseudocode for a function that takes two numeric arguments and returns their sum.

---

2. Write the pseudocode for a function that takes a string as its argument and returns a new string with the characters reversed. You can assume that the characters of the string are indexed starting with zero.

---

3. Write the pseudocode for a function that takes the x and y coordinates of two points in the Cartesian plane and returns the slope of the line which passes through them.

---

4. Write pseudocode for a function that finds the smallest number in a non-empty, unsorted array of integers using linear search.

---

5. Write pseudocode for a function that takes an integer as its argument and returns true if it is a power of two or false otherwise.

---

6. Write the pseudocode for a function that takes the coefficients of a polynomial as an array argument. It should return the coefficients of the first derivative of that polynomial. Recall that the derivative of $x^n$ is given by:

$$
\frac{d}{dx} x^n = n x^{n-1}
$$

Here are some examples of the function output:

```cpp
derivative([1]) == [0]
derivative([4, 8]) == [4]
derivative([3, 4, 5]) == [6, 4]
derivative([7, 0, 1, 2]) == [21, 0, 1]
```

---

7. Many modern compilers have optimizers that can detect simple cases when it is logically impossible for certain statements in a program to ever be executed. In such cases, the compiler warns the programmer about the useless code or even removes it entirely for optimized builds. How might this optimization affect benchmarking operations in your codebase?
