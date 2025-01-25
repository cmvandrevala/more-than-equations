---
title: Well That's Just Prime
date: 2025-01-24
tags:
  - java
  - csc-214
description: In this lab you will write a program that calculates the prime factors of a number and returns the result as an array.
---

## 🔖 Background Information

The prime factors of a number are all of the prime numbers that can be multiplied together to equal the original number [@piercePrimeFactorization2023]. Some examples of prime factorization are:

$$
100 = 2 \times 2 \times 5 \times 5
$$

$$
35 = 5 \times 7
$$

$$
24 = 2 \times 2 \times 2 \times 3
$$

$$
17 = 17
$$

Note that we do not include the number one in the list of prime factors for a number.

## 🎯 Problem Statement

Write a function / method that calculates the prime factors of a given number, along with corresponding tests to ensure that it works as expected. Your function should return an `ArrayList` of integers.

## ✅ Acceptance Criteria

* If the user enters an integer less than or equal to one, the function / method should return an empty `ArrayList`.
* If the user enters an integer greater than one, the function / method should return a list of prime factors for that number.
* You cannot use any pre-built library functions to calculate the prime factors. You must implement a solution from scratch.

## 📋 Dev Notes

* This assignment contains a test file with a couple of sample tests to get you started. You should write tests for your prime factors function to ensure that your code works as expected.

## 🖥️ Example Output

In this example, the prime factors method takes a single integer as an argument and returns an `ArrayList` as per the Acceptance Criteria.

```java
Factorizer factorizer = new Factorizer();

factorizer.primeFactors(0); // will return the ArrayList []
factorizer.primeFactors(1); // will return the ArrayList []
factorizer.primeFactors(9); // will return the ArrayList [3, 3]
factorizer.primeFactors(10); // will return the ArrayList [2, 5]
```

## 📝 Thought Provoking Questions

1. What strategy did you use to test your function? Which test cases did you include?
2. Where did you "draw the line" and stop writing tests? After all, you can't write tests for every integer. Why did you decide to stop there?

## 💼 Add-Ons For the Portfolio

### (One Credit) Is It Prime?

A number is prime if its only factors are one and itself (thus, its only prime factor is itself). Write a function that takes a number as an input and returns whether the number is prime or not. The solution must utilize your prime factors function. You are allowed to tweak your prime factors function so that it can be used for this add-on, but the original acceptance criteria must still be satisfied.

For example:

```java
Factorizer factorizer = new Factorizer();

factorizer.isPrime(36) // Returns false
factorizer.isPrime(12) // Returns false
factorizer.isPrime(17) // Returns true
factorizer.isPrime(1) // Returns false
factorizer.isPrime(0) // Returns false
```

### (One Credit) Is It Composite?

A number is composite if it is not equal to one and it is not prime. Write a function that takes a number as an input and returns whether the number is composite or not. It might be helpful to first implement the "Is It Prime?" add-on and use it here.

For example:

```java
Factorizer factorizer = new Factorizer();

factorizer.isComposite(36) // Returns true
factorizer.isComposite(12) // Returns true
factorizer.isComposite(17) // Returns false
factorizer.isComposite(1) // Returns false
factorizer.isComposite(0) // Returns false
```

### (Three Credits) Simplifying Fractions

We can use prime factors to simplify fractions. For example, consider the fraction $12/26$. We can factor the top of the fraction into $12 = 2 \times 2 \times 3$ and the bottom of the fraction into $26 = 2 \times 13$. Since there is a common value of $2$ in the top and bottom, we can cancel it out and get a new fraction of $6/13$.

Write a function called `reduce(...)` that takes two arguments - a numerator and a denominator - and returns a formatted string representing the reduced fraction. For example:

```java
Factorizer factorizer = new Factorizer();

factorizer.reduce(36, 12) // Returns "3"
factorizer.reduce(12, 12) // Returns "1"
factorizer.reduce(12, 14) // Returns "6/7"
factorizer.reduce(12, 37) // Returns "12/37"
```

The `reduce(...)` function must utilize your prime factors function. You are allowed to tweak your prime factors function so that it can be used for this add-on, but the original acceptance criteria must still be satisfied.

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/well-thats-just-prime-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
