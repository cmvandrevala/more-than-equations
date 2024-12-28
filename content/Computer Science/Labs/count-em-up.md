---
layout: lab
title: Count'em Up!
draft: true
---

## 🔖 Background Information

Years ago, shoppers at a grocery store would keep track of their purchases with a simple hand-held counter. A click to any of four buttons would spin the gears inside so that the digit associated with that button would increment. Typically the four digits were viewed as tens, ones, tenths, and hundredths to line up with how much money you have spent at the store.

For example:

* If I don't push any buttons, the display would read: 0000.
* If I were to push the tens button twice, the tenths button once, and the hundreths button once, the display would read: 2011.
* If I were to push the ones button 11 times, the display would read: 1100.

This problem is available courtesy of {% cite jamesLittleRedCounting2017 %}.

## 🎯 Problem Statement

Design and code a class to represent a grocery counter. Your counter should be able to hold any valid 4-digit value between 0000 and 9999. When the counter overflows (i.e. goes above 9999), it should wrap back around and increment from zero again.

## ✅ Acceptance Criteria

* Implement a class called `GroceryCounter` with the methods: `tens()`, `ones()`, `tenths()`, and `hundreths()`. Each of these methods should increment the corresponding digit of the counter, as described in the  Background Information section.
* The counter should be initialized with a default value of 0000.
* The counter should have a method called `total()` that shows the current monetary amount in a nicely formatted fashion. For example, 1234 displays as `$12.34` and 0509 displays as `$5.09`.
* The counter should have a method called `number_of_overflows()` which returns the number of times a user has overflowed the counter.
* The class should have a `clear()` method that resets the count to zero and clears out any "overflowed" status.

## 📋 Dev Notes

* There are many different ways that you can store the counter and overflow information in your program. Take a bit of time to think about a good strategy to store counts.
* This counter is a prime case where it is easy and useful to test via unit tests before writing a driver program. Make good use of unit tests while developing this class.

## 🖥️ Example Output

A driver function might display the following behavior when utilizing your `GroceryCounter` class:

```java
GroceryCounter counter = new GroceryCounter();

System.out.println(counter.total()); // This would print out $0.00

counter.tens();
counter.tens();
counter.hundreths();

System.out.println(counter.total()); // This would print out $20.01
System.out.println(counter.number_of_overflows()); // This would print out 0

for(int i = 0; i < 35; i++) {
  counter.ones();
}

System.out.println(counter.total()); // This would print out $55.01
System.out.println(counter.number_of_overflows()); // This would print out 0

for(int i = 0; i < 100; i++) {
  counter.ones();
}

System.out.println(counter.total()); // This would print out $55.02
System.out.println(counter.number_of_overflows()); // This would print out 1

counter.clear();

System.out.println(counter.total()); // This would print out $0.00
System.out.println(counter.number_of_overflows()); // This would print out 0
```

## 📝 Thought Provoking Questions

1. What strategy did you use to store the counted digits and the number of overflows?
2. What strategy did you use to test the counted digits and the number of overflows?
3. Why do you think the `GroceryCounter` class in this lab relatively easy to unit test while the `Menu` class from the ["Oops! Shall We Try Again?"]({{ "/teaching/csc/214/labs/oops-shall-we-try-again.html" | absolute_url }}) lab so difficult?

## 💼 Add-Ons For the Portfolio

### (One Credit) Custom Starting Value

Update the constructor for the `GroceryCounter` class to take in a starting value for the counter. Be sure to validate the value to make sure that it falls in the acceptable range of 0000 to 9999. If it does fall in the acceptable range, continue with the execution of the program as before.

### (Two Credits) Custom Counter Maximum

Update the constructor for the `GroceryCounter` class to take in a customized maximum counter value. This value does not need to be bound by 0000 to 9999 - it can be as large as a user wants. You can assume that the user will always enter a positive integer value, and you do not need to do any validation of the input. Your `GroceryCounter` class should use the new maximum counter value instead of 9999 when doing its calculations.

### (Two Credits) Decrement Values

Update the `GroceryCounter` class with four new methods: `decrementTens()`, `decrementOnes()`, `decrementTenths()`, and `decrementHundreths()`. These four methods should decrement the associated digit by one. Be sure to correctly handle the underflow edge case where a number is decremented from zero.

### (Three Credits) Customized Increment

Update the `GroceryCounter` class with a new method called `increment(...)`. This allows you to increment the counter by any arbitrary integer value. You can decide if the increment function takes a float, double, integer, etc. Remember, you still need to handle overflows, just like before! Your output might look something like this:

```java
GroceryCounter counter = new GroceryCounter();

System.out.println(counter.total()); // This would print out $0.00

counter.increment(5);

System.out.println(counter.total()); // This would print out $0.05
System.out.println(counter.number_of_overflows()); // This would print out 0

counter.increment(95);

System.out.println(counter.total()); // This would print out $1.00
System.out.println(counter.number_of_overflows()); // This would print out 0
```

## 📘 Works Cited

{% bibliography --cited %}
