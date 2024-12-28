---
layout: lab
title: Oops! I Didn't Mean That
draft: true
---

## 🔖 Background Information

This lab is available courtesy of {% cite jamesOopsDidnMean2018 %}.

## 🎯 Problem Statement

Write a function that removes all duplicate items from a vector.

## ✅ Acceptance Criteria

* Create a function called `remove_duplicates<T>(...)` that takes a C++ vector as its single argument.
* The function should return a new vector that removes all of the duplicate items from the original. Do NOT overwrite the original vector.
* Test your function either through `assert` statements or a driver program.

## 📋 Dev Notes

* You can assume that the vector that we pass into your function will contain primitive types. For example, you might expect to see a vector of integers or a vector of chars. You will not see a vector of classes.
* You can either use template functions or argument overloading to implement

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

1. What types of elements can the vector argument hold?
2. How can you iterate through all of the elements in a vector without passing in an argument for the size of the vector?
3. How can you access the item at a specific position in the vector?
4. How might you detect that an element is repeated?

## 💼 Add-Ons For the Portfolio

### (One Credit) Header File

Move your `remove_duplicates<T>(...)` function into a separate file from `main()` and create a corresponding header file. Then, `#include` the header file for your function in `main()`. This should not change the functionality of your code.

### (Two Credits) Additional Thought Provoking Questions

Answer the following questions. You do not need to implement any additional code to earn credit for these add-ons.

1. What is a set in the context of C++ programming?
2. How might you use a set in conjunction with a vector to solve this problem?

## 📘 Works Cited

{% bibliography --cited %}
