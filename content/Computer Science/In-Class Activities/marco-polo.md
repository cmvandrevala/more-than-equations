---
title: Marco Polo
tags: [c-plus-plus, csc-121, classes, composition]
description: This activity will test your knowledge of class composition.
---

## 🔖 Background Information

In this exercise, we will practice composition with classes using the classic game of Marco Polo. In this game, a person closes their eyes and calls out the word "Marco". The other members of the group (who are free to look around) call out the word "Polo". The process repeats until the person with their eyes closed tags another member of the group. Usually, you do this in the shallow end of a pool so it is harder for the "Polo" players to get away as quickly.

I am going to give you the code for a "Polo" player and a driver program. Your job is to create a "Marco" class that makes the driver program pass.

## 🎯 Problem Statement

Create a "Marco" class that makes the following driver program pass.

```cpp
#include <iostream>
#include <cassert>

using namespace std;

class Polo
{
public:
  string polo()
  {
    return "Polo!";
  }
};

class Marco
{
  // Your code will go here
};

int main()
{
  Polo p;
  Marco m = Marco(p);

  assert(m.marco() == "Marco! Polo!");
  cout << m.marco() << endl;

  return 0;
}
```

## ✅ Acceptance Criteria

* You are not allowed to change the `Polo` class or the driver function.
* You must call the `polo()` method from within the `Marco` class at some point.

## 📋 Dev Notes

There are no dev notes for this activity.

## 🖥️ Example Output

If you successfully complete this challenge, the assertion in `int main()` will pass and you will see the phrase "Marco! Polo!" printed to the console.

## 📘 Works Cited

There are no works cited for this activity.
