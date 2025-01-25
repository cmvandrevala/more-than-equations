---
title: A Terribly Weighty Subject
date: 2024-12-16
tags: [c-plus-plus, java, csc-121, csc-214, basic-math]
description: In this lab you write a program that can convert weights between ounces and pounds. It will help you get started with some basic mathematical operations.
---

## 🔖 Background Information

In the Imperial system of measurements, weight can be measured using ounces and pounds. There are 16 ounces in one pound. Ounce is abbreviated as "oz" and pound is abbreviated as "lb" (singular) or "lbs" (plural).

This problem is available courtesy of Professor Jason James [@jamesTERRIBLYWeightySubject2017].

## 🎯 Problem Statement

Given a user's input of some number of ounces, convert their input to units of pounds and ounces as well as a decimal number of pounds.

## ✅ Acceptance Criteria

* When I execute the program, I should see a welcome prompt.
* Then, the program should ask me to enter a value for the number of ounces.
* After I give my input, the program should confirm that it got the input.
* Then, the program should print out the converted weight, both in terms of pounds / ounces and pounds as a decimal.
* Finally, I should see an exit message as the program gracefully exits.
* You do NOT have to distinguish between "lb" and "lbs" in your output. You can simply use "lbs" as the unit. There is a portfolio add-on that will address this item.

## 📋 Dev Notes

You can assume that the user always types in a whole number of ounces when you prompt them. They will never type in an invalid value like a decimal or random characters, meaning you don't have to worry about validating their input.

That being said, the final number of pounds might be a decimal number.

## 🖥️ Example Output

> [!tip]- C++
>
> ```text
> ./ounces.out
>
> Welcome to the Ounce Conversion Program!
>
> How many ounces do you have? 62
> Thank you! Converting ounces to pounds.
>
> 62 oz is equivalent to 3 lbs and 14 oz.
> 62 oz is equivalent to 3.875 lbs.
>
> Thank you for using the OCP!
> ```

> [!tip]- Java
>
> Suppose we house our methods in a class called `Converter`. Some code that implements the converter might look like:
>
> ```text
> Converter converter = new Converter();
>
> converter.toPounds(0); // will return the string "0.0000 lbs"
> converter.toPounds(16); // will return the string "1.0000 lb"
> converter.toPoundsAndOunces(18); // will return the string "1 lb 2 oz"
> converter.toPoundsAndOunces(36); // will return the string "2 lbs 4 oz"
> ```
>
> And running the driver program might look like:
>
> ```bash
> $ gradle run
>
> Welcome to the Ounce Conversion Program!
>
> How many ounces do you have? 62
> Thank you! Converting ounces to pounds.
>
> 62 oz is equivalent to 3 lbs and 14 oz.
> 62 oz is equivalent to 3.875 lbs.
>
> Thank you for using the OCP!
> ```

## 📝 Thought Provoking Questions

1. What happens if the user types a decimal number of ounces as their input? You do not need to change your code to account for this behavior. I just want you to test your code and report what happens.
2. What happens if the user types a alphabetic character instead of a number for the ounces input? You do not need to change your code to account for this behavior. I just want you to test your code and report what happens.
3. Are there any inputs that you can discover that break your program? If so, what are they?

## 💼 Add-Ons For the Portfolio

### (One Credit) Singular vs Plural Units

Currently, the program will output the word "lbs", whether or not your final units are singular or plural (e.g. "1 lbs"). Add in logic to make it so your program correctly outputs the unit "lb" if the value is singular or "lbs" if the value is plural. The output should not change otherwise.

The driver program for the program might look like:

```bash
Welcome to the Ounce Conversion Program!

How many ounces do you have? 17
Thank you! Converting ounces to pounds.

17 oz is equivalent to 1 lb and 1 oz.
17 oz is equivalent to 1.0625 lbs.

Thank you for using the OCP!
```

### (Two Credits) Validate User Input

Currently, if a user enters an invalid input, the program will crash or display a strange result. We want to add some validation to the code so that invalid user inputs are handled gracefully.

1. If a user enters a alphabetic character or a symbol, the program should tell them that their input is incorrect and prompt them for a number again.
2. If a user enters a negative number, the program should tell them that they need to enter a positive number and prompt them for a number again.
3. Once the user enters a valid input, the program should continue like before.

The driver program for the program might look like:

```bash
Welcome to the Ounce Conversion Program!

How many ounces do you have? Foobar
That is not a number! Please enter the number of ounces.

How many ounces do you have? !!!
That is not a number! Please enter the number of ounces.

How many ounces do you have?
Blank values are not allowed. Please enter the number of ounces.

How many ounces do you have? -100
Your input should be a positive number. Please enter the number of ounces.

How many ounces do you have? 62
Thank you! Converting ounces to pounds.

62 oz is equivalent to 3 lbs and 14 oz.
62 oz is equivalent to 3.875 lbs.

Thank you for using the OCP!
```

### (Two Credits) Convert to Ounces

Create a function that takes two arguments - an integer number of pounds and an integer number of ounces. The function should return a string that calculates the total number of ounces from the arguments. Be sure to add additional test cases that cover this new function and include it in your driver program.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/a-terribly-weighty-subject-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/a-terribly-weighty-subject-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
