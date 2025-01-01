---
layout: lab
title: After a String Argument, I End Up in Knots
draft: true
description: In this lab, we are going to explore the difference between passing arguments to a function by reference versus passing arguments by value.
---

## 🔖 Background Information

N/A

## 🎯 Problem Statement

Write two functions, each taking a single string as input. The difference between them is that one will pass in the string by reference while the other will pass in the string by value. Then, each function will perform a number of operations on the strings (outlined in the Acceptance Criteria).

## ✅ Acceptance Criteria

Create two functions with the following names:

* `pass_by_reference(string &my_string)`
* `pass_by_value(string my_string)`

In each of the functions, perform the following options in this order:

1. Print the argument to the console using `cout` along with a new line.
2. Append the string " This is the new part!" to the inputted string argument.
3. Print the argument to the console using `cout` along with a new line.

Then, call these functions on a string with `cout` statements in between each call.

Refer to the Example Output section for what your program should look like.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

Your program should look like this:

```cpp
#include <iostream>

using namespace std;

void pass_by_reference(string &my_string) {
  // write some code here
}

void pass_by_value(string my_string) {
  // write some code here
}

int main() {
  string my_string = "This is a string";
  cout << my_string << endl;
  pass_by_value(my_string);
  cout << my_string << endl;
  pass_by_reference(my_string)
  cout << my_string << endl;
  return 0;
}
```

## 📝 Thought Provoking Questions

1. Which of the two functions changed the original variable? Conversely, which of the two functions left the original variable unchanged?
2. What does the "&" stand for in front of the `my_string` argument?

The following questions require a bit of imagination. You might reflect on them or do a bit of extra research.

1. What would be a real-world use case of passing by reference?
2. What would be a real-world use case of passing by value?

## 💼 Add-Ons For the Portfolio

N/A

## 📘 Works Cited

N/A
