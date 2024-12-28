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

Note that we generally do not include the number one.

## 🎯 Problem Statement

Write a function that calculates the prime factors of a given number. Then, write a driver program which allows a user to enter a number and see its prime factors printed to the screen.

## ✅ Acceptance Criteria

* If the user enters a number less than or equal to one, the driver program should print a message saying that it cannot calculate the prime factors for that number.
* You cannot use any library functions to calculate the prime factors. You must implement a solution from scratch.

## 📋 Dev Notes

* The function that you implement must use recursion to calculate the prime factors.

## 🖥️ Example Output

```bash
$ ./prime_factors.out

Enter a number greater than 1: 0

I cannot calculate the prime factors of that number.

Enter a number greater than 1: 400

The prime factors of 400 are 2, 2, 2, 2, 5, and 5.
```

## 📝 Thought Provoking Questions

1. How would you classify the recursion that you used in your solution? E.g. head, tail, nested, linear, etc.?
2. How did you test your recursive function? Did you write any tests other than your driver program?
3. Check out this implementation of the prime factors function in C++ using a `for` loop. Do you like your implementation using recursion or this implementation better? Why?

```cpp
#include <iostream>

using namespace std;

void printPrimeFactors(int n) {
   for (int i = 2; i <= n; i++){
      while (n % i == 0){
         cout << i << "\t";
         n = n/i;
      }
   }

   if (n > 2)
   cout << n << endl;
}

int main() {
   int n = 2624;
   cout << "Prime factors of " << n << " are:" << endl;
   printPrimeFactors(n);
   return 0;
}
```

## 💼 Add-Ons For the Portfolio

### (One Credit) Is It Prime?

A number is prime if its only factors are one and itself (thus, its only prime factor is itself). Write a function that takes a number as an input and returns whether the number is prime or not. The solution must utilize your prime factors function. You are allowed to tweak your prime factors function so that it can be used for this add-on, but the original acceptance criteria must still be satisfied.

For example:

```cpp
isPrime(36) // Returns false
isPrime(12) // Returns false
isPrime(17) // Returns true
isPrime(1) // Returns false
isPrime(0) // Returns false
```

### (Two Credits) Simplifying Fractions

We can use prime factors to simplify fractions. For example, consider the fraction \\( 12/26 \\). We can factor the top of the fraction into \\( 12 = 2 \times 2 \times 3 \\) and the bottom of the fraction into \\( 26 = 2 \times 13 \\). Since there is a common value of \\( 2 \\) in the top and bottom, we can cancel it out and get a new fraction of \\( 6/13 \\).

Write a function called `reduce(...)` that takes two arguments - numerator and denominator - and returns an array with two values, representing the reduced fraction. For example:

```cpp
reduce(36, 12) // Returns [3, 1]
reduce(12, 12) // Returns [1, 1]
reduce(12, 14) // Returns [6, 7]
reduce(12, 37) // Returns [12, 37]
```

The `reduce(...)` function must utilize your prime factors function. You are allowed to tweak your prime factors function so that it can be used for this add-on, but the original acceptance criteria must still be satisfied.

## 📘 Works Cited

{% bibliography --cited %}
