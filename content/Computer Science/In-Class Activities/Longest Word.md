---
title: Longest Word
tags: [c-plus-plus, csc-121, strings, loops]
description: This activity will give you some practice working with strings and loops.
---

## 🔖 Background Information

N/A

## 🎯 Problem Statement

Write a function that takes in a sentence as an argument and returns the number of characters in the longest word. For example, if you gave your function the string: "The quick brown fox jumped over the lazy dog", the function should return the number 6 because "jumped" is the longest word in the sentence and it has six characters.

## ✅ Acceptance Criteria

* A string with no characters has a longest word length of zero.
* There might be a situation where two words have the same number of characters. This is fine - just return the maximum from either one of them.
* You can assume that the sentences will not contain any punctuation, numbers, or special characters. They will only contain A - Z and a - z.

## 📋 Dev Notes

* You do not need to handle erroneous input from the user. You can assume that a user of the function will always provide a sentence with valid words.

## 🖥️ Example Output

Some tests that exercise the function might look something like this:

```cpp
#include <cassert>
#include <string>

using namespace std;

int longest_word(string sentence) {
  // Your code goes here
}

int main() {
  assert(longest_word("") == 0);
  assert(longest_word("a") == 1);
  assert(longest_word("a I") == 1);
  assert(longest_word("a bee") == 3);
  assert(longest_word("My name is Bob") == 4);
}
```

## 📘 Works Cited

N/A
