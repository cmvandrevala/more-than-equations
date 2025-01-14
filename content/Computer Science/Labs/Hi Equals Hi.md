---
title: "\"Hi\" Equals \"hi\"?"
date: 2025-01-14
tags: [c-plus-plus, csc-121, strings]
description: This lab has you reimplement the strcmp function in C++ to allow for a case-insensitive comparison of values.
---

## 🔖 Background Information

The `strcmp` function in the C programming language compares two strings, character by character. If the strings are equal to each other, the function returns zero. However, if the strings are different, it returns a value greater than zero or less than zero, depending on the ASCII codes of the characters [@programizStrcmpStandardLibrary].

This problem is available courtesy of Professor Jason James [@jamesHiHi2021].

## 🎯 Problem Statement

Write a function that allows case-insensitive comparison (a.k.a. ordering) of two strings. The return value should be analogous to that from `strcmp`:

```bash
# Examples of the output from strcmp

string_1 < string_2 returns something less than zero
string_1 == string_2 returns something equal to zero
string_1 > string_2 returns something greater than zero
```

## ✅ Acceptance Criteria

* Write a function called `strcmp_case_insensitive` that does a case-insensitive comparison of two strings, similar to that of `strcmp`.
* Write a driver program to test your function with a variety of values. You should set up your driver function so that it tests all of the expected edge cases that might be encountered when using your function.
* The original strings should not be altered in the `strcmp_case_insensitive` function.

## 📋 Dev Notes

* You can decide what type you want to use for the return value for your function. Might I recommend integers or short integers?
* You can put this function in a separate library file and `#include` it in the driver file for testing. Alternatively, you can write this function directly in the driver file (no library or `#include` needed). You have some flexibility in how you want to structure everything.
* You are not allowed to use the library functions `strcasecmp` or `stricmp` since they are not standard or portable.
* You are not allowed to use the C functions `strcmp` or `strcmpi` since you are tasked with implementing this code from scratch.

## 🖥️ Example Output

You should write a driver program that tests each case of your function. The output of the driver program might look something like this:

```text
$ ./test_comparison.out

The comparison of "String one" and "string two" returns -1.
The comparison of "String one" and "string one" returns 0.
The comparison of "String two" and "string one" returns 1.
```

## 📝 Thought Provoking Questions

1. How might you compare two characters without reference to case? How might you do this without destroying the character variable(s) contents?
2. How can you compare two strings in a case-insensitive way without destroying their contents?
3. What kind of arguments should your string comparison function take? Are you going to pass these arguments by value or by reference?
4. Why do you think the return value of `strcmp` is "greater than zero", "less than zero", and "equal to zero" rather than -1, 0, 1 specifically?
5. What cases might you need to consider to test your function thoroughly? How many times should you have to run the driver to do this testing?

## 💼 Add-Ons For the Portfolio

### (One Credit) Skip Spaces

Add a defaulted argument to your function which will allow the caller to request that you skip spaces when doing the comparison. Otherwise, the output of the function should be identical to what you had before. Some sample values are:

| String One | String Two | Comparison |
|------------|------------|------------|
| "my cool string" | "mycoolstring" | Equal |
| "My Cool String" | "MyCoolString" | Equal |
| "My Cool String" | "mycoolstring" | Equal |
| "My Cool String " | "mycoolstring" | Equal |
| " My Cool String" | "mycoolstring" | Equal |
| "Another string" | "mycoolstring" | Not Equal |

### (Two Credits) Maximum Number of Characters

Add a defaulted argument to your function which will allow the caller to request that you stop at a certain maximum number of characters when doing the comparison. For example, if the user specifies the number five, the function will only compare the first five characters of each inputted string when doing the comparison. Otherwise, the comparison should be identical to what the program did beforehand. If the user does not specify a default, the function should compare the entire strings.

You need to handle a number of edge cases for this feature:

* What should the output be if a user enters zero for the maximum number of characters?
* What should the output be if a user enters a negative number for the maximum number of characters?
* What should happen if the user enters a number greater than the maximum number of characters in one of the strings?

Note: If a user enters "5", they are not stopping at the character with index 5. They are stopping after the first 5 characters.

### (Three Credits) Ordered Numbers

Modify your function so that numbers at the start of the strings are compared / ordered properly, even when they are not justified with leading zeroes. Otherwise, the output of the function should be identical to what you had before. For example:

| String One | String Two | Comparison |
|------------|------------|------------|
| "2" | "50" | Negative |
| "2" | "10" | Negative |
| "20" | "5" | Positive |
| "20" | "1" | Positive |
| "100" | "100" | Zero |
| "2 Some String" | "50 Some String" | Negative |
| "2 Some String" | "10 Some String" | Negative |
| "20 Some String" | "5 Some String" | Positive |
| "20 Some String" | "1 Some String" | Positive |
| "100 Some String" | "100 Some String" | Zero |

You might want to look at `isdigit` from `cctype` since that might be helpful for this task.

## 🔗 Useful Links

N/A

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
