---
layout: lab
title: You Need Power, Wisdom, and Courage When Using Recursion
draft: true
---

## 🔖 Background Information

In mathematics, the triangular numbers are a sequence of numbers where the nth number is given by the sum from 1 to N.

$$
T_N = 1 + 2 + 3 + ... + N-1 + N
$$

For example, the first few triangular numbers are:

$$
T_1 = 1
$$

$$
T_2 = 1 + 2 = 3
$$

$$
T_3 = 1 + 2 + 3 = 6
$$

And so on...

## 🎯 Problem Statement

Create a class called `TriangleNumberCalculator` that performs calculations with triangular numbers (outlined in the Acceptance Criteria below).

## ✅ Acceptance Criteria

Create a class called `TriangleNumberCalculator` with the following methods:

* `int value(int n)` which returns the nth triangular number
* `int add(int n, int m)` which adds the nth and mth triangular numbers
* `int subtract(int n, int m)` which subtracts the nth and mth triangular numbers

Be sure to test all of your methods!

## 📋 Dev Notes

* You must use recursion to calculate the triangular numbers. Yes, you could use a for loop to solve these problems, but the theme of this week is recursion 🙂

## 🖥️ Example Output

Here is an example of how you might use the `TriangleNumberCalculator` class.

```cpp
TriangleNumberCalculator calculator;

cout << calculator.value(1); // This should print out 1
cout << calculator.value(2); // This should print out 3
cout << calculator.value(4); // This should print out 10

cout << calculator.add(1, 1); // This should print out 2
cout << calculator.add(2, 3); // This should print out 9
cout << calculator.add(4, 2); // This should print out 13

cout << calculator.subtract(1, 1); // This should print out 0
cout << calculator.subtract(2, 3); // This should print out -3
cout << calculator.subtract(4, 2); // This should print out 7
```

## 📝 Thought Provoking Questions

1. What is the biggest argument you can enter into `TriangleNumberCalculator#value(int n)` before you get a stack overflow error?
2. What is the biggest argument you can enter into `TriangleNumberCalculator#add(int n)` before you get a stack overflow error?
3. What is the biggest argument you can enter into `TriangleNumberCalculator#subtract(int n)` before you get a stack overflow error?
4. How do your results for questions 1 - 3 relate to each other? Is this what you expected?

## 💼 Add-Ons For the Portfolio

### (One Credit) Multiplication

Implement a method called `int multiply(int n, int m)` which multiplies the nth and mth triangular numbers. Be sure to test your method!

### (One Credit) Division

Implement a method called `double divide(int n, int m)` which divides the nth and mth triangular numbers. Be sure to test your method!

### (Two Credits) Sequence

Implement a method called `sequence(int n)` which returns a list of triangle numbers up to the Nth number: $T_1, T_2, T_3, ..., T_N$. Be sure to test your method!

## 📘 Works Cited

There are no works cited for this lab.
