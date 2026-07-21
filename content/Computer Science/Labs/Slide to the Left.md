---
title: Slide to the Left
date: 2026-03-15
tags: [c-plus-plus, csc-122, arrays]
description: In this lab you will create a function that rotates entries in an array.
---

## 🔖 Background Information

N/A

## 🎯 Problem Statement

Write a function called `arrayShift(...)` that takes an array of integers, the size of the array, and a number of shifts as its arguments. The function should update the array by shifting the values to the left by that number of shifts.

## ✅ Acceptance Criteria

When performing a rotation, the first integer in the array should get moved to the last spot. In other words, the array should rotate around itself.

## 📋 Dev Notes

* You should use a C-style array for this lab. Do NOT use built-in array or vector objects.

## 🖥️ Example Output

The of the behavior of the `arrayShift` function in the driver program might look like this:

```cpp
int main() {
  int arr1[] = {1, 2, 3, 4, 5};
  arrayShift(arr1, 5, 1); // This would update arr1 to [2, 3, 4, 5, 1]
  arrayShift(arr1, 5, 1); // This would update arr1 to [3, 4, 5, 1, 2]
  arrayShift(arr1, 5, 1); // This would update arr1 to [4, 5, 1, 2, 3]

  int arr2[] = {1, 2, 3, 4, 5};
  arrayShift(arr2, 5, 3); // This would update arr2 to [4, 5, 1, 2, 3]
  arrayShift(arr2, 5, 3); // This would update arr2 to [2, 3, 4, 5, 1]
  arrayShift(arr2, 5, 3); // This would update arr2 to [5, 1, 2, 3, 4]

  int arr3[] = {1, 2, 3};
  arrayShift(arr3, 3, 3); // This would update arr3 to [1, 2, 3] (back to where it began)

  int arr3[] = {1, 2, 3};
  arrayShift(arr3, 3, 4); // This would update arr3 to [2, 3, 1]

  return 0;
}
```

## 📝 Thought Provoking Questions

1. What happens when the number of shifts is equal to the size of the array?
2. Why must we pass in the size of the int array into the `arrayShift(...)` function?
3. What strategy might you use to make this function work with arrays of characters as well as arrays of integers?

## 💼 Optional Extra Credit

### (1/4 Point) Shift Left and Right

Rename the function `arrayShift(...)` to `arrayShiftLeft(...)`. Then, add a second function called `arrayShiftRight(...)` to the library. It should take the same arguments as `arrayShiftLeft(...)`, but it rotates the values in the array to the right.

### (1/2 Point) Rotating C++ Vectors

Create a new function called `vectorShift(...)` which takes a C++ vector and a number of shifts as arguments (notice that it does not take the size of the vector since you can use the built-in methods on vector to figure that out). This function should update the vector in the same way that `arrayShift(...)` updated arrays.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/slide-to-the-left-cpp-template)

## 📘 Works Cited

N/A
