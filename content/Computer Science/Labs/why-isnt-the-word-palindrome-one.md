---
layout: lab
title: Why Isn't the Word Palindrome One?
draft: true
---

## 🔖 Background Information

A palindrome is word that is read the same backwards and forwards. For example, the following words are palindromes:

* Otto
* Rotavator
* deed
* mom
* racecar
* radar

This problem is available courtesy of {% cite jamesWhyIsnWord2018 %}.

## 🎯 Problem Statement

Write a function called `is_palindrome(...)` that determines if a string input is a palindrome.

## ✅ Acceptance Criteria

* Create a function named `is_palindrome` that takes one string argument. It should return a boolean describing whether the string is a palindrome or not.
* Ignore the capitalization of letters when determining whether a string is a palindrome.
* Test the `is_palindrome` function using `assert` statements in the `main()` program. Consider which edge cases you need to test.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

You can test the `is_palindrome` function using `assert` statements in your `main()` file. It might look something like this:

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

## 💼 Add-Ons For the Portfolio

### (One Credit) Header File

Move your `is_palindrome` function into a separate file from `main()` and create a corresponding header file. Then, `#include` the header file for your function in `main()`. This should not change the functionality of your code.

### (Two Credits) Phrase Palindromes

A phrase palindrome is a palindrome that ignores punctuation and whitespace in addition to capitalization. Some examples of phrase palindromes are:

* Able was I ere I saw Elba.
* I Love Me, Vol. I.
* Madam, I'm Adam.
* A man, a plan, a canal, Panama.
* Rats live on no evil star.

Update the `is_palindrome` function to detect phrase palindromes as well as regular palindromes. You should not change the function signature - in other words, you should not add more arguments or change the return type. Your changes should leave any existing functionality unchanged.

### (Three Credits) Single Pass

Many solutions involve copying the string argument, reversing it, and then comparing the two strings. This works find for small strings, but it can be very inefficient for large strings. Instead, it would be better to iterate over each character of the string and compare it to its corresponding character at the opposite end of the string.

Refactor your code so that you eliminate any duplication of the original string. Your new code must not change the original string in any way as you analyze it.

## 📘 Works Cited

{% bibliography --cited %}
