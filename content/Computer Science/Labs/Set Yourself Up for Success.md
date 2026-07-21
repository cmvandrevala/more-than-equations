---
title: Set Yourself Up for Success
tags: [java, csc-214, sets]
description: In this lab, you will use the set data structure from the Java standard library to remove duplicate entries from a list.
date: 2025-07-12
---

## 🔖 Background Information

Developers often utilize a variety of data structures when they write programs. Each data structure has its own strengths and weaknesses that must be taken into account in a program. Oftentimes, we will combine different data structures together to get the combined strengths of each one.

In this lab, you are going to be working with lists and sets. You are going to use the set data structure to remove duplicate entries from a list data structure.

## 🎯 Problem Statement

Write a function called `ArrayList<T> removeDuplicates(ArrayList<T> list)` which takes a generic `ArrayList` of items as an argument and returns a new `ArrayList` with any duplicate entries removed.

## ✅ Acceptance Criteria

* Your function should accept a generic `ArrayList<T>`
* Your code must use a Java set within the function body to remove the duplicate items.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

Some sample outputs for the function are shown below:

```java
removeDuplicates([]) // Returns []
removeDuplicates([1]) // Returns [1]
removeDuplicates([1, 2, 3]) // Returns [1, 2, 3]
removeDuplicates(["A", "A", "B"]) // Returns ["A", "B"]
removeDuplicates([1, 1, 3, 3, 5, 5]) // Returns [1, 3, 5]
```

## 📝 Thought Provoking Questions

1. How would you have solved this problem if you were not allowed to use a set data structure (or any built-in methods to automatically remove duplicates)? Would your solution be better or worse than the set solution? Why?

## 💼 Optional Extra Credit

N/A

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/set-yourself-up-for-success-java-template)

## 📘 Works Cited

N/A
