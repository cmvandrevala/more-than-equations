---
title: Just an Average Day
date: 2025-01-02
tags: [java, csc-214, streams]
description: In this lab you will get some practice working with streams in Java. You will also compare solutions using streams to the more traditional solutions using `for` loops.
---

## 🔖 Background Information

The Java Stream API gives developers the power to use functional programming techniques on problems that were usually solved with classes in Java. This has a variety of benefits including potential performance gains, the ability to parallelize code, and the ability to model your code as a series of data transformations.

## 🎯 Problem Statement

1. Write a set of four functions that calculate the minimum, maximum, sum, and average of an array of integers. These functions should use a `for` loop like we have seen in the class many times before.
2. Write a set of four functions that calculate the minimum, maximum, sum, and average of an array of integers. These functions should use the Java Stream API.

## ✅ Acceptance Criteria

* I expect to see eight functions total.
* Test your functions thoroughly through JUnit tests.

## 📋 Dev Notes

* You are allowed to use any and all helper functions included in the Stream API.

## 🖥️ Example Output

You might define your eight functions like so:

```java
public int maximumUsingForLoop(int[] nums) { ... }
public int minimumUsingForLoop(int[] nums) { ... }
public int sumUsingForLoop(int[] nums) { ... }
public int averageUsingForLoop(int[] nums) { ... }

public int maximumUsingStream(int[] nums) { ... }
public int minimumUsingStream(int[] nums) { ... }
public int sumUsingStream(int[] nums) { ... }
public int averageUsingStream(int[] nums) { ... }
```

## 📝 Thought Provoking Questions

1. Which syntax do you prefer for these calculations - streams or loops? Why?
2. What is the difference between a "mutable" and "immutable" structure in Java?
3. What does the `map` function do in a stream?
4. What does the `filter` function do in a stream?
5. What does the `reduce` function do in a stream?

## 💼 Optional Extra Credit

### (1/4 Point) Evens Only

Write a function that takes an array of integers and filters out any odd numbers. You must use the Java Stream API for this solution and test it using JUnit.

### (1/4 Point) Odds Only

Write a function that takes an array of integers and filters out any even numbers. You must use the Java Stream API for this solution and test it using JUnit.

### (1/4 Point) Add Five

Write a function that takes an array of integers and returns a new array of integers where all of the numbers have been incremented by five. You must use the Java Stream API for this solution and test it using JUnit.

### (1/4 Point) Square Numbers

Write a function that takes an array of integers and returns a new array of integers where all of the numbers have been squared. You must use the Java Stream API for this solution and test it using JUnit.

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/just-an-average-day-java-template)

## 📘 Works Cited

N/A
