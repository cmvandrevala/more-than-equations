---
title: Why Isn't the Word Palindrome One?
date: 2025-03-10
tags: [c-plus-plus, csc-121, functions, strings]
description: In this lab, we will implement a function that checks to see whether a given string is a palindrome.
---

## 🔖 Background Information

A palindrome is word that is read the same backwards and forwards. For example, the following words are palindromes:

* Otto
* Rotavator
* deed
* mom
* racecar
* radar

This problem is available courtesy of Professor Jason James [@jamesWhyIsnWord2018].

## 🎯 Problem Statement

Write a function called `is_palindrome(...)` that determines if a string is a palindrome.

## ✅ Acceptance Criteria

* Write a function named `is_palindrome` that takes one string argument. It should return a boolean value describing whether the string is a palindrome or not.
* Ignore the capitalization of letters when determining whether a string is a palindrome.
* Carefully consider which edge cases you need to test to ensure that your function is working correctly.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

The unit tests for your program might look something like this:

```cpp
#include <cassert>

int main() {
  assert(is_palindrom("Rotavator"));
  assert(is_palindrom("x"));
  assert(is_palindrom("mom"));

  assert(!is_palindrom("Sam"));
  assert(!is_palindrom("orange"));
  assert(!is_palindrom("flower"));
}
```

## 📝 Thought Provoking Questions

1. How can you access individual characters within a string?
2. How can you tell how long the content of a string is?
3. How might you handle even versus odd length words?
4. Does your program consider "34743" a palindrome? Why or why not?

## 💼 Optional Extra Credit

### (1/2 Point) Phrase Palindromes

A phrase palindrome is a palindrome that ignores punctuation and whitespace in addition to capitalization. Some examples of phrase palindromes are:

* Able was I ere I saw Elba.
* I Love Me, Vol. I.
* Madam, I'm Adam.
* A man, a plan, a canal, Panama.
* Rats live on no evil star.

Update the `is_palindrome` function to detect phrase palindromes as well as regular palindromes. You should not change the function signature - in other words, you should not add more arguments or change the return type. Your changes should leave any existing functionality unchanged.

### (1 Point) Single Pass

Many solutions involve copying the string argument, reversing it, and then comparing the two strings. This works find for small strings, but it can be very inefficient for large strings. Instead, it would be better to iterate over each character of the string and compare it to its corresponding character at the opposite end of the string.

Refactor your code so that you eliminate any duplication of the original string. Your new code must not change the original string in any way as you analyze it.

## 🔗 Useful Links

N/A

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
