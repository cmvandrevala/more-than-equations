---
title: Password Validator
tags: [c-plus-plus, csc-121, conditionals, functions, ping-pong-programming]
description: This activity will give you some practice working with conditionals.
---

## 🔖 Background Information

Oftentimes, when you create a new account on a website, you need to create a password that follows some rules. For example, it might need to be a certain length or contain a certain number of special characters.

## 🎯 Problem Statement

Write a function that validates the password field of a registration form. The validation function should take a password as an input and return a message describing the status of the password. Feel free to include other defaulted arguments to the function if you feel it necessary.

## ✅ Acceptance Criteria

Your validation function should enforce the following password requirements:

1. The password must be at least 8 characters long. If not, the function should return the message: "The password must be at least 8 characters".
2. The password must contain at least 2 numbers. If not, the function should return the message: "The password must contain at least 2 numbers".
3. The password must contain at least one capital letter. If not, the function should return the message: "The password must contain at least 1 capital letter"
4. The password must contain at least one special character. If not, the function should return the message: "The password must contain at least 1 special character".

Use assert statements to test your code.

## 📋 Dev Notes

In this activity, we will be using a strategy called "ping pong" pair programming. In this setup, two people pair with each other while sharing a computer. Partner A writes an assert statement based on the acceptance criteria outlined above. Then, partner B makes that assert statement pass with the minimal amount of code possible. Afterwards, the partners switch (partner B writes a test and partner A makes it pass). Repeat this process until the password validator function has been implemented.

Think about how you might break this problem down into tiny pieces so that you can solve it effectively!

## 🖥️ Example Output

Your validation function should return a boolean response. Thus, you might test it as follows:

```cpp
#include <cassert>

using namespace std;

bool valid_password(string password) {
  // Your code goes here
}

int main() {
  assert(!valid_password("some invalid password"));
  assert(valid_password("some valid password"));
}
```

## 📘 Works Cited

There are no works cited for this activity.
