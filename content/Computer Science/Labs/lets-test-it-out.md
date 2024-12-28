---
layout: lab
title: Let's Test it Out
draft: true
---

## 🔖 Background Information

FizzBuzz is a common exercise that we like to give in first semester programming classes. In FizzBuzz, you need to write a function that takes an integer as an argument and follows these rules:

1. If the integer is divisible by three, the function returns "Fizz".
2. If the integer is divisible by five, the function returns "Buzz".
3. If the integer is divisisble by three and five, the function returns "FizzBuzz".
4. If the integer is not divisible by three or five, the function returns the number itself.

## 🎯 Problem Statement

Here is a basic implementation of FizzBuzz in C++:

```cpp
#include <string>

std::string fizzbuzz(int n)
{
  if (n % 3 == 0 && n % 5 == 0)
  {
    return "FizzBuzz";
  }
  else if (n % 3 == 0)
  {
    return "Fizz";
  }
  else if (n % 5 == 0)
  {
    return "Buzz";
  }
  else
  {
    return std::to_string(n);
  }
}
```

Write tests for this code using the [Catch2](https://github.com/catchorg/Catch2) framework.

## ✅ Acceptance Criteria

1. I should be able to follow the instructions in your README file to compile and run the tests.
2. The test output should show well-written tests that cover all of the cases outlined by the ZOMBIES acronym.

## 📋 Dev Notes

* You are allowed to use any of the methods to build and run Catch2 as outlined in their tutorial: CMake, pkg-config files, or two file distribution. I recommend that you stick with the two file distribution as it requires the least work to set up.

## 🖥️ Example Output

If I follow the commands in your README file, I should see the output of the Catch2 tests that you wrote for FizzBuzz.

## 📝 Thought Provoking Questions

There are no thought-provoking questions for this lab.

## 💼 Add-Ons For the Portfolio

There are no add-ons for this lab.

## 📘 Works Cited

There are no works cited for this lab.
