---
title: A Functional Use for Lambdas
date: 2024-12-27
tags: [c-plus-plus, csc-122, lambda-functions, stl]
description: The goal of this lab is to explore the sort function in the C++ Standard Template Library. You will test out how built-in C++ functions, custom lambda functions, and custom structs affect the output.
---

## 🔖 Background Information

There is no background information for this problem.

## 🎯 Problem Statement

The goal of this lab is to explore the C++ `std::sort` function with a variety of arguments. You will test out how built-in C++ functions, custom lambda functions, and custom structs affect the output.

## ✅ Acceptance Criteria

1. Create an array of ten integers that are initially in a scrambled order.
2. Run `std::sort` on the array with the following passed in as the third argument:
    * No third argument
    * The `greater` and `less` functions built into C++
    * A lambda comparing two integer arguments with cases for greater than and less than
    * A custom struct comparing two integer arguments with cases for greater than and less than
3. Answer the Thought-Provoking Questions.

## 📋 Dev Notes

* You might need to rescramble the integers after every test to make sure you are not skewing the output in any way.
* You do NOT need to turn in any code for this lab. I am only interested in the answers to the Thought-Provoking Questions.

## 🖥️ Example Output

You need to test `std::sort` for a variety of cases listed above. Note that you might need to rescramble the array or only test one sort at a time to ensure that the results of one trial do not skew the results of another.

Your driver program might include:

```cpp
#include <array>

int main()
{
  std::array<int, 10> my_numbers{5, 7, 4, 2, 8, 6, 1, 9, 0, 3};

  std::sort(my_numbers.begin(), my_numbers.end());
  std::sort(my_numbers.begin(), my_numbers.end(), std::greater<int>());
  std::sort(my_numbers.begin(), my_numbers.end(), std::less<int>());
  std::sort(my_numbers.begin(), my_numbers.end(), [](int a, int b)
            { return a > b; });
  std::sort(my_numbers.begin(), my_numbers.end(), [](int a, int b)
            { return a < b; });

  struct
  {
    bool operator()(int a, int b) const { return a < b; }
  } custom_less;

  std::sort(my_numbers.begin(), my_numbers.end(), custom_less);

  struct
  {
    bool operator()(int a, int b) const { return a > b; }
  } custom_greater;

  std::sort(my_numbers.begin(), my_numbers.end(), custom_greater);
}
```

## 📝 Thought Provoking Questions

For each of the cases listed in the acceptance criteria, answer the following questions:

1. What does the expression return when you print it out to the console?
2. Does the expression change the original array?

## 💼 Add-Ons For the Portfolio

There are no add-ons for this lab.

## 📘 Works Cited

There are no works cited for this lab.
