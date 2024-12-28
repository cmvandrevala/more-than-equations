---
layout: lab
title: When in Rome
draft: true
---

## 🔖 Background Information

Roman numerals were a notation used by the Romans to represent numbers. In this system, letters are used to denote specific base numbers. Then, arbitrary numbers are constructed by combining different combinations of the base numbers.

The following table shows the most common letters used in Roman numerals as well as their Arabic number counterpart.

| Arabic Number | Roman Numeral |
|----------------|---------------|
| 1 | I |
| 5 | V |
| 10 | X |
| 50 | L |
| 100 | C |
| 500 | D |
| 1000 | M |

The rules for Roman numerals are as follows:

1. The value of the numeral is multiplied by the number of times it is repeated. For example, the Roman numeral III is 3 and the Roman numeral XX is 20.
2. A numeral can be repeated a maximum of three times. For example, XXX is valid, but XXXX is invalid.
3. Numerals V, L, and D are never repeated. For example, VV should be written as X.
4. When a numeral for a smaller value appears after a numeral for a greater value, the values will be added together. For example, VI represents 5 + 1 = 6 and DV represents 500 + 5 = 505.
5. When a numeral for a smaller value appears before a numeral for a greater value, the values will be subtracted. For example, IX represents 10 – 1 = 9 and CD represents 500 - 100 = 400.
6. The numerals V, L, and D are never written before a greater value numeral.
7. The numeral I can be subtracted from V and X only.
8. The numeral X can be subtracted from numerals L, M and C only.

If you wanted to construct the number 136, you would combine the symbols for 100, 10, 10, 10, 5, and 1 - `CXXXVI`.

This lab is available courtesy of {% cite jamesWhenRome2018 %}

## 🎯 Problem Statement

Write a function called `arabic_to_roman(...)` that translates Arabic numbers into Roman numerals.

## ✅ Acceptance Criteria

* Create a function named `arabic_to_roman` that takes one integer argument. It should return a string representing the Roman numeral representation of the inputted integer.
* The function should return an empty string if a user enters an integer less than zero, equal to zero, or greater than the maximum Roman numeral that can be calculated by I, V, X, L, C, D, and M.
* Test the `arabic_to_roman` function using `assert` statements in the `main()` program. Consider which edge cases you need to test.

## 📋 Dev Notes

## 🖥️ Example Output

You can test the `arabic_to_roman` function using `assert` statements in your `main()` file. It might look something like this:

```cpp
#include <cassert>

int main() {
  assert(arabic_to_roman(-12) == "");
  assert(arabic_to_roman(0) == "");
  assert(arabic_to_roman(1) == "I");
  assert(arabic_to_roman(7) == "VII");
  assert(arabic_to_roman(50) == "L");
}
```

## 📝 Thought Provoking Questions

1. How many tests / asserts do you need to fully test your program?
2. Are there any useful patterns that you can exploit when thinking about how to convert to Roman numerals?
3. What is the maximum integer that your program can convert to Roman numerals?

## 💼 Add-Ons For the Portfolio

### (One Credit) Header File

Move your `arabic_to_roman` function into a separate file from `main()` and create a corresponding header file. Then, `#include` the header file for your function in `main()`. This should not change the functionality of your code.

### (Three Credits) From Roman Numerals

Create a new function called `roman_to_arabic(...)` that converts Roman numerals to Arabic numbers. It should take a single string as an input, representing a valid Roman numeral and return an integer. Just like before, you should test this function in `main()` using `assert` statements.

## 📘 Works Cited

{% bibliography --cited %}
