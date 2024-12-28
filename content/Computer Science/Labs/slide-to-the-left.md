---
layout: lab
title: Slide to the Left
draft: true
---

## 🔖 Background Information

There is no additional background information needed for this problem.

## 🎯 Problem Statement

Write a function called `array_shift(...)` that takes in an array of integers, the size of the array, and a number of shifts. The function should update the array by shifting the values to the left by that number of shifts.

## ✅ Acceptance Criteria

* Put the `array_shift(...)` function in a library and import it into another file with a `main()` function.
* Test your `array_shift(...)` function using assert statements.
* The first integer in the area should get moved to the last spot. In other words, the array should rotate around itself.

## 📋 Dev Notes

## 🖥️ Example Output

Suppose I included my `array_shift(...)` function in my `main()` program. The behavior might look like this:

```cpp
int main() {
  int arr1[] = {1, 2, 3, 4, 5};
  array_shift(arr1, 5, 1); // This would update arr1 to [2, 3, 4, 5, 1]
  array_shift(arr1, 5, 1); // This would update arr1 to [3, 4, 5, 1, 2]
  array_shift(arr1, 5, 1); // This would update arr1 to [4, 5, 1, 2, 3]

  int arr2[] = {1, 2, 3, 4, 5};
  array_shift(arr2, 5, 3); // This would update arr2 to [4, 5, 1, 2, 3]
  array_shift(arr2, 5, 3); // This would update arr2 to [2, 3, 4, 5, 1]
  array_shift(arr2, 5, 3); // This would update arr2 to [5, 1, 2, 3, 4]

  int arr3[] = {1, 2, 3};
  array_shift(arr3, 3, 3); // This would update arr3 to [1, 2, 3] (back to where it began)

  int arr3[] = {1, 2, 3};
  array_shift(arr3, 3, 4); // This would update arr3 to [2, 3, 1]

  return 0;
}
```

## 📝 Thought Provoking Questions

1. What happens when the number of shifts is equal to the size of the array?
2. Why must we pass in the size of the int array into the `array_shift(...)` function?
3. How did you test arrays of values using assert statements?
4. What strategy might you use to make this function work with arrays of characters as well as arrays of integers?

## 💼 Add-Ons For the Portfolio

### (One Credit) Shift Left and Right

Rename the function `array_shift(...)` to `array_shift_left(...)`. Then, add a second function called `array_shift_right(...)` to the library. It should take the same arguments as `array_shift_left(...)`, but it rotates the values in the array to the right. Be sure to test this function using assert statements in your `main()` program.

### (Two Credits) Rotating C++ Vectors

Create a new function called `vector_shift(...)` which takes a C++ vector and a number of shifts as arguments (notice that it does not take the size of the vector since you can use the built-in methods on vector to figure that out). This function should update the vector in the same way that `array_shift(...)` updated arrays. Be sure to test your function in your `main()` program using assert statements.

## 📘 Works Cited

{% bibliography --cited %}
