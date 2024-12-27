---
title: Pointer Practice
tags: [c-plus-plus, csc-122, pointers]
description: This activity will give you some practice working with pointers.
---

## 🔖 Background Information

A pointer is a variable that stores a memory address. We use pointers in a myriad of ways when working in C++. Thus, it is a good idea to get familiar with some basic operations on pointers.

## 🎯 Problem Statement

Complete the following exercises:

### Assignment and Dereferencing

Write a program that asks the user to enter two integers to be stored in the variables `a` and `b`. Assign the addresses of `a` and `b` to `ptr_a` and `ptr_b`. Then, print out the dereferenced values of `ptr_a` and `ptr_b` to the console.

### Maximum in an Array

Write a program to find the maximum number in an unsorted list of integers.

Create an integer array (`int[]`) that contains some number of random, unsorted values. You might make the values up yourself or use `rand()`. Then, create a pointer called `max_ptr` that finds and points to the maximum value in the list.

Hint: since this is an unsorted list of integers, you will need to make use of linear search to find the maximum rather than binary search.

### Length of a C-Style String

Write a program to calculate the length of a string using a pointer.

Create a C-style string which is an array of chars. Then, create a pointer that points to the start of the array. Move the pointer through the string until you reach the null character `\0`, and then print out how many cells it visited.

### Reverse a C-Style String

Write a program that prints a C-style string in reverse using a pointer.

Create a C-style string which is an array of chars. Then, create a pointer that points to the start of the array. Move the pointer through the string until you reach the null character `\0`, like in the previous exercise. However, now that you are at the end of the string, reverse direction and go backwards back to the beginning, printing each character to the console.

### Midpoint in a Vector

Write a program to determine the midpoint value of a vector.

Create a vector of integers (`vector<int>`) that contains some number of random, unsorted values. You might make the values up yourself or use `rand()`. Then, create two pointers - one that points to the beginning of the vector and the other that points to the end. Move the pointers towards each other, step by step, until they meet at the midpoint. Then, return the value of the index where they meet.

If they pass each other without meeting (i.e. there are an even number of elements in the vector), return the value of the smaller index, right before where the midpoint would be.

## ✅ Acceptance Criteria

* You should write a short program for each of the questions listed in the Problem Statement.
* You should use pointer arithmetic rather than array index notation.

## 📋 Dev Notes

There are no dev notes for this activity.

## 🖥️ Example Output

There is no example output for this activity.

## 📘 Works Cited

There are no works cited for this activity.
