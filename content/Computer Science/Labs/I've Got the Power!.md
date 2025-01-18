---
title: I've Got the Power!
date: 2025-01-17
tags: [c-plus-plus, java, csc-216, algorithmic-analysis]
description: In this lab you are going to implement a pair of algorithms that compute the power of a number. Each of these algorithms has a different complexity.
---

## 🔖 Background Information

Many programming languages allow us to calculate the power of a number using a built-in function. For example, the `cmath` library in C++ gives us an overloaded `pow` function:

```cpp
pow(2, 3) == 8;
```

Meanwhile, the Java language gives us a `pow` method within the `Math` library:

```java
Math.pow(2, 3) == 8;
```

In this lab, we are going to write and analyze three different ways of calculating the power of a number:

1. Using a naive approach
2. Using an unoptimized divide and conquer approach
3. Using an optimized divide and conquer approach

## 🎯 Problem Statement

Write three functions that calculate the power of a number in the different ways outlined below. Then, answer the Thought-Provoking Questions based on your implementations.

1. Use recursion to multiply a number by itself some number of times. The pseudocode for this approach is:

```text
def naivePower(int x, int n):
  if x equals 0:
    return 0;
  if n equals 0:
    return 1;
  return x * naivePower(x, n - 1)
```

2. Recursively calculate the number raised to half the power given, and then square this result for the case of an even power. Do the same thing but also multiply it by the original number one more time for the case of an odd power. The pseudocode for the divide and conquer approach is:

```text
def unoptimizedDCPower(int x, int n):
  if x equals 0:
    return 0;
  if n equals 0:
    return 1
  if n is even:
    return unoptimizedDCPower(x, n / 2) * unoptimizedDCPower(x, n / 2);
  else:
    return x * unoptimizedDCPower(x, n / 2) * unoptimizedDCPower(x, n / 2);
```

3. Use the same strategy as algorithm two, but this time create a temporary variable to prevent duplicate calculations. The pseudocode for the divide and conquer approach is:

```text
def optimizedDCPower(int x, int n):
  if x equals 0:
    return 0;
  if n equals 0:
    return 1

  temp = optimizedDCPower(x, n / 2);
  if n is even:
    return temp * temp;
  else:
    return x * temp * temp;
```

## ✅ Acceptance Criteria

* Implement the three algorithms listed in the Problem Statement using either C++ or Java.
* Ensure that your functions work either through unit tests or a driver program.
* Use these functions to answer the Thought-Provoking Questions.

## 📋 Dev Notes

* We will only concern ourselves with positive values for `x` and `n` in `power(x, n)`. You do not need to take negative numbers into account.

## 🖥️ Example Output

Regardless of which algorithm you use, you should get the same correct result when taking a number to a power. However, the runtime of each of these functions will change based on the size of the inputs.

```cpp
naivePower(2, 3) == 8;
unoptimizedDCPower(2, 3) == 8;
optimizedDCPower(2, 3) == 8;
```

## 📝 Thought Provoking Questions

1. Which of the inputs (`x` or `n`) seems to have a larger effect on the runtime of the three algorithms?
1. Which of the three algorithms seem to run the fastest for large values of `x`?
1. Which of the three algorithms seem to run the fastest for large values of `n`?
1. Do you notice a difference in performance between the divide and conquer algorithms, with an without a temporary variable? If so, what do you notice? Note: you may or may not see a difference here! It truly depends on what your compiler is doing behind the scenes to help optimize these functions.
1. What do you think the Big-O value for each of these algorithms might be?
1. Which of these functions do you think has the largest memory footprint. Why do you think this?

## 💼 Add-Ons For the Portfolio

N/A

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/ive-got-the-power-java-template)

## 📘 Works Cited

N/A
