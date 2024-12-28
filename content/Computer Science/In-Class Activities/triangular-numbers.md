---
layout: activity
title: Triangular Numbers
draft: true
---

## 🔖 Background Information

In mathematics, the triangular numbers are a sequence of numbers where the nth number is given by `N = 1 + 2 + 3 + ... + N-1 + N`. For example, the first few triangular numbers are 1, 3, 6, 10, ...

## 🎯 Problem Statement

Create a library that contains a few functions that relate to triangular numbers (outlined in the Acceptance Criteria below). Then, test the functions in your library via a driver program.

## ✅ Acceptance Criteria

Your triangular numbers library should contain the following functions:

| Function | Description |
| -------- | ----------- |
| int triangular_number(int n) | Calculates the nth triangular number |
| int add_triangular_numbers(int n_one, int n_two) | Adds two triangular numbers |
| int subtract_triangular_numbers(int n_one, int n_two) | Subtracts two triangular numbers |
| int multiply_triangular_numbers(int n_one, int n_two) | Multiplies two triangular numbers |
| float divide_triangular_numbers(int n_one, int n_two) | Divides two triangular numbers |

## 📋 Dev Notes

N/A

## 🖥️ Example Output

Suppose I included `triangularNumbers.cpp` in my `main.cpp` file. I might make assertions as follows:

```cpp
assert(triangular_number(3) == 6);
assert(add_triangular_numbers(4, 3) == 16);
assert(subtract_triangular_numbers(4, 3) == 4);
assert(multiply_triangular_numbers(4, 3) == 60);
assert(divide_triangular_numbers(4, 4) == 1.0);
```

## 📘 Works Cited

N/A
