---
title: Student Class
tags: [c++, classes, constructors, csc-121, csc-122]
description: This activity will give you some practice creating a class in C++.
---

## 🔖 Background Information

There is no Background Information for this lab.

## 🎯 Problem Statement

Create a class that capture the idea of a "student". It should have the properties listed in the Acceptance Criteria. Be sure to verify that your class works by exercising it in a driver program.

## ✅ Acceptance Criteria

* A student should have a first name and last name.
  * Each of these properties can be read and changed.
  * Pass in arguments in the constructor of the class to set these properties.
* A student should have a student ID.
  * The ID can be read, but not changed.
  * Randomly generate a student ID in the constructor of the class.
* A student should have a number of credits property which keeps track of the number of credits they are taking in a semester.
  * The number of credits can be read, but not changed directly.
  * The number of credits should default to zero when a student object is created.
  * The student class should have a method with the signature `void add_credits(int number)` that increments the number of credits that a student is signed up for in the semester.
  * The student class should have a method with the signature `void reset_credits()` that resets the number of credits that the student is signed up for back to zero.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

You should write a driver program to thoroughly test out your student class. A driver program might include some of the following lines:

```cpp
#include <cassert>

class Student {
  // Your code goes here!
}

int main() {
  Student student = Student("Bob", "Bobberson");

  assert(student.first_name == "Bob");
  assert(student.number_of_credits == 0);

  student.add_credits(6);
  student.add_credits(2);

  assert(student.number_of_credits == 8);

  student.reset_credits();

  assert(student.number_of_credits == 0);

  return 0;
}
```

## 📘 Works Cited

There are no works cited for this activity.
