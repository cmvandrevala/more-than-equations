---
title: String Calculator
tags: [c-plus-plus, csc-122, pair-programming, ping-pong-programming, strings]
description: In this activity we are going to create a simple calculator that sums a list of numbers in a string. It is a nice review of some of the basic string operations in C++.
---

## 🔖 Background Information

N/A

## 🎯 Problem Statement

Write a calculator that takes a list of numbers as a string argument and returns their sum. For example, the argument "1,2,3" would return the number 6 while the argument "4;7;8" would return the number 19.

## ✅ Acceptance Criteria

* The calculator should be able to handle zero, one, or many numbers in the string argument.
* If a user passes in an empty string, the calculator should return 0.
* You can assume that the numbers passed into the calculator are all integers.
* The calculator should sum all of the numbers in the string argument.
* I can delimit the numbers in the string argument by commas or semicolons.
* Use assert statements to test your code.

## 📋 Dev Notes

In this activity, we will be using a strategy called "ping pong" pair programming. In this setup, two people pair with each other while sharing a computer. Partner A writes an assert statement based on the acceptance criteria outlined above. Then, partner B makes that assert statement pass with the minimal amount of code possible. Afterwards, the partners switch (partner B writes a test and partner A makes it pass). Repeat this process until the password validator function has been implemented.

Think about how you might break this problem down into tiny pieces so that you can solve it effectively!

## 🖥️ Example Output

You might create a set of tests for your code as follows:

```cpp
#include <cassert>
#include <string>

using namespace std;

int string_calculator(string str) {
	// Your code goes here
}

int main() {
	assert(string_calculator("") == 0);
	assert(string_calculator("0") == 0);
	assert(string_calculator("1") == 1);
	assert(string_calculator("1,2") == 3);
	assert(string_calculator("4,5,6") == 15);
	
	// And so on with more examples...
}
```

## 📘 Works Cited

N/A
