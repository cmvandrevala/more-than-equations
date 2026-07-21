---
title: For the Nth Time
date: 2025-04-15
tags:
  - c-plus-plus
  - csc-121
  - strings
description: In this lab you will determine the correct suffix that should be added to a given number.
---

## 🔖 Background Information

In English, a suffix is added to a number when we want to denote an item in an ordered set. For example, I might teach my 1st class of the day after eating my 2nd doughnut and drinking my 3rd coffee.

The pattern for suffixes is:

```text
  1st   2nd   3rd   4th   5th   ...  10th
 11th  12th  13th  14th  15th   ...  20th
 21st  22nd  23rd  24th  25th   ...  30th
 31st  32nd  33rd  34th  35th   ...  40th
...
101st 102nd 103rd 104th 105th   ... 110th
111th 112th 113th 114th 115th   ... 120th
121st 122nd 123rd 124th 125th   ... 130th
...
201st 202nd 203rd 204th 205th   ... 210th
211th 212th 213th 214th 215th   ... 220th
221st 222nd 223rd 224th 225th   ... 230th
...
```

Note how most numbers have a suffix of "th", but those that end in 1, 2, and 3 differ slightly. Also note that "1st" and "11th" differ as well.

This problem is available courtesy of Professor Jason James [@jamesNthTime2017].

## 🎯 Problem Statement

Write a function called `string number_suffix(int n)` which returns the suffix of a given integer.

## ✅ Acceptance Criteria

* Create a function named `number_suffix` that takes a single integer argument. It should return a string which contains the two letter suffix of the number.
* The function should return an empty string if the inputted number is less than or equal to zero.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

Your unit tests for your function might look something like this:

```cpp
#include <cassert>

int main() {
  assert(number_suffix(0) == "");
  assert(number_suffix(1) == "st");
  assert(number_suffix(2) == "nd");
  assert(number_suffix(4) == "th");
  assert(number_suffix(120) == "th");
}
```

## 📝 Thought Provoking Questions

1. How many tests do you need to write to thoroughly test the `number_suffix` function?
2. How many digits of the inputted integer do you need to check to determine the suffix?

## 💼 Optional Extra Credit

### (1/2 Point) Number and Suffix Together

Update your function to pass in another argument called `include_number`. If the argument is set to true, the output will be the number prepended to the suffix. If the argument is set to false, the output will be just the suffix, as it was before. For example:

```cpp
number_suffix(1, true) // This will return the string "1st"
number_suffix(1, false) // This will return the string "st"
```

We don't want to change any existing behavior or break any existing tests. Thus, default the `include_number` argument to false.

```cpp
number_suffix(1) // This should still return "st"
```

## 🔗 Useful Links

N/A

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
