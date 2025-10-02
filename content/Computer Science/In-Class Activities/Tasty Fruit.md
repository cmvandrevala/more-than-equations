---
title: Tasty Fruit
tags: [c-plus-plus, csc-122, classes, inheritance]
description: This activity will test your knowledge of inheritance in C++.
---

## 🔖 Background Information

In this exercise, we will practice class inheritance using an example with fruit. I am going to give you some partially complete code, and it is your job to fill in the remainder to make everything pass.

## 🎯 Problem Statement

Fill in the code that makes the following driver program pass.

```cpp
#include <iostream>
#include <cassert>

using namespace std;

class Fruit
{
  protected:
    string name;
    int tastiness;
    int convenience;

    int total_score() {
        return tastiness + convenience;
    }
  public:
    string evaluate() {
        return "The " + name + " has a total score of " + to_string(total_score()) + ".";
    }
};

class Strawberry : public Fruit
{
  // Your code will go here
};

class Mango : public Fruit
{
  // Your code will go here
};

int main()
{
  Strawberry strawberry("strawberry", 7, 7);
  Mango mango("mango", 10, 4);

  assert(strawberry.get_name() == "strawberry");
  assert(strawberry.evaluate() == "The strawberry has a total score of 14.");
  assert(mango.evaluate() == "The mango has a total score of 14.");

  cout << strawberry.evaluate() << endl;
  cout << mango.evaluate() << endl;

  return 0;
}
```

## ✅ Acceptance Criteria

* You are not allowed to change the `Fruit` class or the driver function.
* You must utilize inheritance wherever possible to implement methods in `Strawberry` and `Mango`.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

If you successfully complete this challenge, the assertion in `int main()` will pass and you will see some fruit evaluations printed to the console.

## 📘 Works Cited

N/A
