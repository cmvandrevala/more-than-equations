---
title: What a Complex Problem
date: 2025-03-04
tags: [c-plus-plus, csc-121, csc-122, classes]
description: In this lab, we will write a complex number class that can be used in a variety of calculations.
---

## 🔖 Background Information

Complex numbers have the form $a + bi$ where $a$ is called the real part of the number, $b$ is called the imaginary part of the number, and $i$ is the square root of -1. Another way of thinking of $i$ is $i^2 = -1$. Some mathematical operations are defined on complex numbers as follows:

Addition:

$$
(a + bi) + (c + di) = (a + c) + (b + d)i
$$

Subtraction:

$$
(a + bi) - (c + di) = (a - c) + (b - d)i
$$

Multiplication:

$$
(a + bi)(c + di) = (ac - bd) + (ad + bc)i
$$

Division:

$$
\frac{a + bi}{c + di} = \frac{(ac + bd) - (ad - bc)i}{c^2 + d^2}
$$

Negation:

$$
-(a + bi) = -a - bi
$$

Magnitude:

$$
| a + bi | = \sqrt{a^2 + b^2}
$$

Conjugation:

$$
\overline{a + bi} = a - bi
$$

Real Part:

$$
Re(a + bi) = a
$$

Imaginary Part:

$$
Im(a + bi) = b
$$

This problem is available courtesy of Professor Jason James [@jamesWhatComplexProblem2017].

## 🎯 Problem Statement

Write a `ComplexNumber` class that implements operations on complex numbers. The class will include some extra methods that improve quality of life for developers (defined in the Acceptance Criteria).

## ✅ Acceptance Criteria

* You cannot use any existing complex number type or library - you must implement your own class from scratch.
* Write a class called `ComplexNumber` that takes in two floats as arguments (the real part and the imaginary part of the number).
* Implement addition, subtraction, negation, magnitude, conjugation, real, and imaginary methods on the `ComplexNumber` class as instance methods.
  * Each of these methods should take in no arguments or one argument of type `ComplexNumber`.
  * Each of these methods should have a return value of type `ComplexNumber` or `float`, as needed.
  * None of these methods should change the calling instance of `ComplexNumber` or any arguments.
* Implement a `prettyPrint` method on the `ComplexNumber` class that prints the complex number out to the console in the form "a + bi".

## 📋 Dev Notes

* You need to think carefully about how you want to test this class. How can you implement unit tests on your custom class? Maybe, you could consider testing the real and imaginary part separately?
* You do NOT have to put your `ComplexNumber` class into another file using headers. However, there is an add-on for the portfolio that you can do for extra credit.

## 🖥️ Example Output

Within your C++ code, you might have some examples that look like this:

```cpp
ComplexNumber numberOne = ComplexNumber(5.0, 7.0);
ComplexNumber numberTwo = ComplexNumber(2.5, 3.1);

ComplexNumber numberThree = numberOne.add(numberTwo);
cout << numberThree.prettyPrint(); // Returns 7.5 + 10.1i

ComplexNumber numberFour = numberOne.subtract(numberTwo);
cout << numberFour.prettyPrint(); // Returns 2.5 + 3.9i

float magnitude = numberOne.magnitude();
cout << magnitude; // Returns 8.602325267
```

## 📝 Thought Provoking Questions

1. Does it make sense to default any of the arguments in the constructor of `ComplexNumber` to a particular value? Why or why not?
2. What are the types of values that are returned from each method in `ComplexNumber`?
3. What happens if you try to initialize your `ComplexNumber` class with an integer instead of a float?
4. Does `prettyPrint()` print anything besides the number in "a + bi" form (even an `endl`)? Why or why not?

## 💼 Add-Ons For the Portfolio

### (One Credit) Calculate the Phase

Add a method to your `ComplexNumber` class called `phase` which calculates the phase of the number. The phase of the number is given by:

$$
\phi = arctan \left ( \frac{imaginary}{real} \right )
$$

Be sure that the method is tested either by your driver function or assertions.

### (Two Credits) Multiplication and Division

In the "Background Information" section, we defined multiplication and division of complex numbers. However, we did not implement them in the lab, originally.

Implement two methods on the `ComplexNumber` class for multiplication and division. Just like with the other operations:

* Each of these methods should take in one argument of type `ComplexNumber`.
* Each of these methods should have a return value of type `ComplexNumber`.
* Neither of these methods should change the calling instance of `ComplexNumber` or any arguments.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/what-a-complex-problem-cpp-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
