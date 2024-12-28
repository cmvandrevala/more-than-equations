---
layout: lab
title: Well, That's Just Prime
draft: true
---

## 🔖 Background Information

The prime factors of a number are all of the prime numbers that can be multiplied together to equal the original number {% cite piercePrimeFactorization2023 %}. Some examples of prime factorization are:

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

Note that we do not include the number one.

## 🎯 Problem Statement

Write a function that calculates the prime factors of a given number, along with corresponding tests to ensure that the function works as expected.

## ✅ Acceptance Criteria

* You get to decide the arguments and outputs of the prime factors function. For example, will you output a string of numbers? A list? Something else entirely?
* If the user enters a number less than or equal to one, the function should return `null`.
* You cannot use any pre-built library functions to calculate the prime factors. You must implement a solution from scratch.

## 📋 Dev Notes

* This assignment contains a test file with a couple of sample tests to get you started. You should write tests for your prime factors function to ensure that your code works as expected.

## 🖥️ Example Output

You get to decide what the output type of your prime factors function should be. For example, if I decided that I wanted the function to return a formatted string, I might expect the function to look like:

```java
Factorizer factorizer = new Factorizer();

factorizer.prime_factors(9); // will return the string "3,3"
factorizer.prime_factors(10); // will return the string "2,5"
```

## 📝 Thought Provoking Questions

1. What was the output type of your function (e.g. string, list, etc.)? Why did you make that choice?
2. What strategy did you use to test your function? Which test cases did you include?
3. Where did you "draw the line" and stop writing tests? After all, you can't write tests for every integer. Why did you decide to stop there?

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

### (Two Credits) Simplifying Fractions

We can use prime factors to simplify fractions. For example, consider the fraction \\( 12/26 \\). We can factor the top of the fraction into \\( 12 = 2 \times 2 \times 3 \\) and the bottom of the fraction into \\( 26 = 2 \times 13 \\). Since there is a common value of \\( 2 \\) in the top and bottom, we can cancel it out and get a new fraction of \\( 6/13 \\).

Write a function called `reduce(...)` that takes two arguments - numerator and denominator - and returns a formatted string representing the reduced fraction. For example:

```cpp
Factorizer factorizer = new Factorizer();

factorizer.reduce(36, 12) // Returns "3"
factorizer.reduce(12, 12) // Returns "1"
factorizer.reduce(12, 14) // Returns "6/7"
factorizer.reduce(12, 37) // Returns "12/37"
```

The `reduce(...)` function must utilize your prime factors function. You are allowed to tweak your prime factors function so that it can be used for this add-on, but the original acceptance criteria must still be satisfied.

## 📘 Works Cited

{% bibliography --cited %}
