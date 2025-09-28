---
title: Well That's Just Prime
date: 2025-01-24
tags:
  - c-plus-plus
  - java
  - csc-122
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

Write a `Factorizer` class with a method that calculates the prime factors of a given number. As always, your code should include a driver program and unit tests to ensure that it works as expected.

## ✅ Acceptance Criteria

* If the user enters an integer less than or equal to one, the function / method should return an empty list of numbers.
* If the user enters an integer greater than one, the function / method should return a list of prime factors for that number.
* You cannot use any pre-built library functions to calculate the prime factors. You must implement a solution from scratch.

## 📋 Dev Notes

* You can use any built-in data structure or one from the standard library to store your list of prime factors. For example:

  * In C++ you could use a C-style array, an `Array`, a `Vector`, etc.
  * In Java you could use a built-in array, an `ArrayList`, etc.

## 🖥️ Example Output

You have the ability to choose the format of how you want to return your output. For example, in the examples below, I used a `Vector` in C++ and an `ArrayList` in Java.

> [!tip]- C++
>
> ```cpp
> Factorizer factorizer;
>
> factorizer.primeFactors(0); // will return the Vector []
> factorizer.primeFactors(1); // will return the Vector []
> factorizer.primeFactors(9); // will return the Vector [3, 3]
> factorizer.primeFactors(10); // will return the Vector [2, 5]
> ```
>
> [!tip]- Java
>
> ```java
> Factorizer factorizer = new Factorizer();
>
> factorizer.primeFactors(0); // will return the ArrayList []
> factorizer.primeFactors(1); // will return the ArrayList []
> factorizer.primeFactors(9); // will return the ArrayList [3, 3]
> factorizer.primeFactors(10); // will return the ArrayList [2, 5]
> ```

## 📝 Thought Provoking Questions

1. What strategy did you use to test your function? Which test cases did you include?
2. Where did you "draw the line" and stop writing tests? After all, you can't write tests for every integer. Why did you decide to stop there?

## 💼 Add-Ons For the Portfolio

### (One Credit) Is It Prime?

A number is prime if its only factors are one and itself (thus, its only prime factor is itself). Write a function that takes a number as an input and returns whether the number is prime or not. The solution must utilize your prime factors function. You are allowed to tweak your prime factors function so that it can be used for this add-on, but the original acceptance criteria must still be satisfied.

### (One Credit) Is It Composite?

A number is composite if it is not equal to one and it is not prime. Write a function that takes a number as an input and returns whether the number is composite or not. It might be helpful to first implement the "Is It Prime?" add-on and use it here.

### (Three Credits) Simplifying Fractions

We can use prime factors to simplify fractions. For example, consider the fraction $12/26$. We can factor the top of the fraction into $12 = 2 \times 2 \times 3$ and the bottom of the fraction into $26 = 2 \times 13$. Since there is a common value of $2$ in the top and bottom, we can cancel it out and get a new fraction of $6/13$.

Write a function called `reduce(...)` that takes two arguments - a numerator and a denominator - and returns a formatted string representing the reduced fraction. For example:

> [!tip]- C++
>
> ```cpp
> Factorizer factorizer;
>
> factorizer.reduce(36, 12) // Returns "3"
> factorizer.reduce(12, 12) // Returns "1"
> factorizer.reduce(12, 14) // Returns "6/7"
> factorizer.reduce(12, 37) // Returns "12/37"
> ```
>
> [!tip]- Java
>
> ```java
> Factorizer factorizer = new Factorizer();
>
> factorizer.reduce(36, 12) // Returns "3"
> factorizer.reduce(12, 12) // Returns "1"
> factorizer.reduce(12, 14) // Returns "6/7"
> factorizer.reduce(12, 37) // Returns "12/37"
> ```

The `reduce(...)` function must utilize your prime factors function. You are allowed to tweak your prime factors function so that it can be used for this add-on, but the original acceptance criteria must still be satisfied.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/well-thats-just-prime-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/well-thats-just-prime-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
