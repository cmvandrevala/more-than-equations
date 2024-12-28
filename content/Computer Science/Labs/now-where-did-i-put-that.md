---
layout: lab
title: Now Where Did I Put That?
draft: true
---

## 🔖 Background Information

Two useful functions that are not provided in the C++ standard library are "find a character in a string" and "find a substring in a string".

For example, the character 'e' appears at position two in the string "The quick brown fox" (remember that strings are zero indexed). However, the character 'e' does not appear in the string "cat's bat about yarn" at all. Thus, one strategy we might take is our function could return a valid index if the character is found or -1 when it can't find the character.

Substrings can be treated in a similar fashion. The string "he" appears at position one in "The quick brown fox". But again, it does not appear at all in "cat's bat about yarn". We can return -1 or a valid index to indicate where the substring was found.

This problem is available courtey of {% cite jamesNowWherePut2018 %}.

## 🎯 Problem Statement

Write two functions - one which finds a character in a string and another which finds a substring in a string. The output of these functions should be the index where the character is found or where the substring begins.

## ✅ Acceptance Criteria

* Write two functions which find a character / substring within a given string.
* You are not allowed to use the `std::string.find` function. Instead, you must write your own solution from scratch.
* Use function overloading so that each of the functions has the same name. I don't want to have to distinguish between `findCharacter` versus `findSubstring`.
* Write a driver program that exercises your functions. Make sure that it tests a variety of cases to ensure that your code is working as expected.

## 📋 Dev Notes

* You can either put these functions in a library and `#include` them in the driver program or put them directly in the driver program itself.

## 🖥️ Example Output

Here are some examples of an input string, a search query, and the expected return value.

| Input String | Search Query | Returns | Search Query Type |
| ---- | ---- | ---- | ---- |
| "The quick brown fox" | 'e' | 2 | char |
| "The quick brown fox" | "e" | 2 | string |
| "The quick brown fox" | ' ' | 3 | char |
| "The quick brown fox" | "quick" | 4 | string |
|  "The quick brown fox" | "quiet" | -1 | string |

## 📝 Thought Provoking Questions

1. What arguments do each of your find functions take?
2. Are the arguments passed into the find functions changed during execution? If so, what special care should you take with them?
3. What value is returned by each of your functions? What types are they and what do they represent?
4. What care does a caller of your functions have to take with the return values? Can they immediately assume that the function has returned a valid index?
5. How does the compiler distinguish which of your functions is being used for a particular call since they both have the same name?

## 💼 Add-Ons For the Portfolio

### (One Credit) Case Sensitivity

Update the functions to allow the caller to decide whether they want the search to be case-sensitive or not. There are a few ways to do this, but one easy way might be to allow the user to specify a flag as an argument that dictates whether the search is case-sensitive or case-insensitive.

If the user does not specify an option for case-sensitivity, the default should be case-sensitive search, just like in the original program.

Demonstrate that this add-on is working by exercising your functions in a driver file.

### (Two Credits) Starting Position

Modify your functions to allow the caller to specify the starting position from which to search the string. If no starting position is specified, the search should start from the beginning of the string, just like before. A few example outputs are given below:

| Input String | Search Query | Specified Starting Position | Returns | Search Query Type |
| ---- | ---- | ---- | ---- |
| "The quick brown fox" | 'e' | None Specified | 2 | char |
| "The quick brown fox" | 'e' | 0 | 2 | char |
| "The quick brown fox" | 'e' | 1 | 2 | char |
| "The quick brown fox" | 'e' | 2 | 2 | char |
| "The quick brown fox" | 'e' | 3 | -1 | char |
| "The quick brown fox" | 'e' | 500 | -1 | char |

### (Three Credits) Single Wildcard Character

Allow the caller to use a single wildcard. The wildcard characters we'll use are *to match any sequence of (zero or more) characters and ?to match any single character. (Note, to allow them to search for a*or a ?in a string, you must fashion an escape-sequence — like we use to print tabs and newlines. I'd recommend the /character.)

| Input String | Search Query | Returns | Search Query Type |
| ---- | ---- | ---- | ---- |
| "lamb" | "\*mb" | 0 | string |
| "pits" | "\*s" | 0 | string |
| "yellow" | "y\*l" | 0 | string |
| "that's why I like milk" | "y\*l" | 9 | string |
| "dumb" | "\*d" | 0 | string |
| "dumb" | "b\*" | 3 | string |

As always, if a user does not specify a wildcard symbol, the program's original behavior should not be changed. Demonstrate that this add-on is working by exercising your functions in a driver file.

### (Four Credits) Multiple Wildcard Characters

Modify your functions to allow the caller to use multiple wildcard symbols in the same string (i.e. the * symbol). Doing this add-on assumes that the "Single Wildcard Character" add-on is also complete. A few example outputs are given below:

| Input String | Search Query | Returns | Search Query Type |
| ---- | ---- | ---- | ---- |
| "dumb bunnies" | "\*bunnies" | 0 | string |
| "dumb bunnies" | "b\*b\*n" | 3 | string |
| "dumb bunnies" | "b\*n\*n" | 3 | string |
| "dumb bunnies" | "u\*n\*n" | 1 | string |

As always, if a user does not specify a wildcard symbol, the program's original behavior should not be changed. Demonstrate that this add-on is working by exercising your functions in a driver file.

## 📘 Works Cited

{% bibliography --cited %}
