---
title: Oops! I Didn't Mean That
date: 2025-03-31
tags: [c-plus-plus, csc-121, vectors]
description: In this lab you write a function that removes all duplicate items from a vector.
---

## 🔖 Background Information

This lab is available courtesy of Professor Jason James [@jamesOopsDidnMean2018].

## 🎯 Problem Statement

Write a function that takes a single `vector<T>` as an argument and removes all duplicate items from it.

## ✅ Acceptance Criteria

* Create a function called `remove_duplicates<T>(...)` that takes a C++ vector as its single argument.
* The function should return a new vector that removes all of the duplicate items from the original. Do NOT overwrite the original vector.

## 📋 Dev Notes

* You can assume that the elements of the vector can be compared via the `==` operator.
* Use template functions to implement your solution.

## 🖥️ Example Output

A driver program for this problem might look something like this:

```cpp
#include <iostream>
#include <vector>

using namespace std;

vector<T> remove_duplicates<T>(...) {
  // Your code goes here
}

int main()
{
  vector<int> my_vector;

  for (int i = 1; i < 3; i++)
  {
    my_vector.push_back(i);
    my_vector.push_back(i);
  }

  // If I were to print out the elements of my_vector, I would see 1, 1, 2, 2, 3, 3

  vector<int> filtered_vector = remove_duplicates(my_vector);

  // If I were to print out the elements of filtered_vector, I would see 1, 2, 3
  // If I were to print out the elements of my_vector, I would see 1, 1, 2, 2, 3, 3
}
```

## 📝 Thought Provoking Questions

1. How did you iterate through all of the elements in a vector without passing in an argument for the size of the vector?
2. How did you access the item at a specific position in the vector?
3. How did you detect that an element was repeated?

## 💼 Optional Extra Credit

### (Two Credits) Set Container

A set is a type of container that stores unique elements. Create another function called `remove_duplicates_via_set<T>(...)` that performs the same job as `remove_duplicates<T>(...)`, but uses a set in its implementation.

## 🔗 Useful Links

N/A

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
