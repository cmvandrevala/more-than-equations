---
layout: lab
title: What a Complex Problem
draft: true
---

## 🔖 Background Information

Complex numbers have the form $$a + bi$$ where $$a$$ is called the real part of the number, $$b$$ is called the imaginary part of the number, and $$i$$ is the square root of -1. Another way of thinking of $$i$$ is $$i^2 = -1$$. Some mathematical operations are defined on complex numbers as follows:

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

This problem is available courtesy of {% cite jamesWhatComplexProblem2017 %}.

## 🎯 Problem Statement

Write a well-tested `ComplexNumber` class that implements all of the operations listed in the "Background Information" section. The class will include some extra methods that improve quality of life for developers (defined in the acceptance criteria).

Then, write another class called `ComplexList` which is initialized with a list of `ComplexNumber` objects. It should have a method that returns the sum of all of the numbers in the list.

## ✅ Acceptance Criteria

* You cannot use any existing complex number type or library - you must implement your own class from scratch
* Write a class called `ComplexNumber` that takes in two floats as arguments (the real part and the imaginary part of the number)
* Implement addition, subtraction, negation, magnitude, conjugation, real, and imaginary methods on the `ComplexNumber` class as instance methods.
  * Each of these methods should take in no arguments or one argument of type `ComplexNumber`.
  * Each of these methods should have a return value of type `ComplexNumber` or `float`, as needed.
  * None of these methods should change the calling instance of `ComplexNumber` or any arguments.
* Implement a `pretty_print` method on the `ComplexNumber` class that prints the complex number out to the console in the form "a + bi".
* Write a class called `ComplexList` that is initialized with an array or vector of `ComplexNumber` objects.
* Implement a `sum()` method on `ComplexList` that adds up all of the complex numbers and `pretty_print`s the result.

## 📋 Dev Notes

* You need to think about how you want to test these classes. Maybe try some assertions for each class individually along with a driver program that tests `ComplexList` at the acceptance level? This means that you might build and execute different `main` functions - one for test assertions and another for your driver function.

## 🖥️ Example Output

Within your C++ code, you might have some examples that look like this:

```cpp
ComplexNumber number_one = ComplexNumber(5.0, 7.0);
ComplexNumber number_two = ComplexNumber(2.5, 3.1);

ComplexNumber number_three = number_one.add(number_two);
cout << number_three.pretty_print(); // Returns 7.5 + 10.1i

ComplexNumber number_four = number_one.subtract(number_two);
cout << number_four.pretty_print(); // Returns 2.5 + 3.9i

float magnitude = number_one.magnitude();
cout << magnitude; // Returns 8.602325267

ComplexNumber numberList[4] { number_one, number_two, number_three, _number_four };

ComplexList list = ComplexList(numberList);
cout << list.sum(); // Returns 17.5 + 24.1i
```

## 📝 Thought Provoking Questions

1. Does it make sense to default any of the arguments in the constructor of `ComplexNumber` to a particular value? Why or why not?
2. What are the types of values that are returned from each method in `ComplexNumber`?
3. What happens if you try to initialize your `ComplexNumber` class with an integer instead of a float?
4. Does `pretty_print()` print anything besides the number in "a + bi" form (even an `endl`)? Why or why not?

## 💼 Add-Ons For the Portfolio

### (One Credit) Multiplication and Division

In the "Background Information" section, we defined multiplication and division of complex numbers. However, we did not implement them in the lab, originally.

Implement two methods on the `ComplexNumber` class for multiplication and division. Just like with the other operations:

* Each of these methods should take in one argument of type `ComplexNumber`.
* Each of these methods should have a return value of type `ComplexNumber`.
* Neither of these methods should change the calling instance of `ComplexNumber` or any arguments.

### (Two Credits) Concatenate Lists

Create a class method on the `ComplexList` class that takes two or more `ComplexList` objects and returns one new `ComplexList` with all of the list elements combined together. You are allowed to update the instance methods on `ComplexList` to accomodate this new behavior, as long as you don't break any existing behavior.

## 📘 Works Cited

{% bibliography --cited %}
