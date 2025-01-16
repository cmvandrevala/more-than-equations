---
title: Oops! Shall We Try Again?
date: 2025-01-15
tags: [c-plus-plus, csc-121, csc-214, java, looping, validation]
description: In this lab you write a program that will continuously prompt a user for some input until they enter a valid option. This lab will come in handy later in the semester when we write larger programs that involve different inputs from users.
---

## 🔖 Background Information

When the user is prompted to enter a value by a program, that value is often under some kind of constraints from the problem they are solving. For instance:

* A time must be non-negative
* A correlation coefficient must lie between -1 and +1
* A menu choice must be one of a particular set of values

Such input validation is easily done with a `while` loop. Consider the following pseudocode:

```text
prompt_and_read()
while (!input_is_valid())
{
    print_error_message_to_console()
    prompt_and_read()
}
```

This code prompts the user for an input and then checks to see if it is valid. If the input is valid, the program continues. However, if the input is invalid, the code prints an error message to the screen and then prompts the user for another input. This works well, but it can become tedious if you have to redesign or alter the code every time you must use it. To make things easier, we can place this loop in a function for easy re-use.

Examine the pseudocode given above one more time. We see that a few things might change between different menus:

1. The variable you are entering
2. The bounds / values to be used
3. The prompts / messages printed to the user

All of these can easily be parameterized using a function. There are many options of how one might do this, but one easy strategy might be:

1. The bounds, prompts, and messages could all be passed as arguments.
2. The return value of the function could be the value of the variable.

This problem is available courtey of Professor Jason James [@jamesOopsShallWe2017].

## 🎯 Problem Statement

Write a generalized input-validation function. This function should take in one or more arguments for the bounds, prompts, and messages and provide an interface for a user to enter a value under some conditions. After the user selects a valid value, the function should return the value.

## ✅ Acceptance Criteria

* You can assume that this function is prompting the user to enter an integer.
* Someone utilizing the function should specify:
  * A lower bound for the integer
  * An upper bound for the integer
  * The prompt that will be displayed that asks a user for input
  * The error message that will be displayed given an invalid input

## 📋 Dev Notes

* You can decide what arguments the function should take, as long as you satisfy the acceptance criteria.
* You should test your function using a driver program - don't worry about automated tests for this problem. Recall that a driver program is a test application that exercises the function in a variety of scenarios.

## 🖥️ Example Output

Your output might look something like this after you start your program.

```bash
Please enter a value
500

Your value is invalid
Please enter a value
-100

Your value is invalid
Please enter a value
45

The value chosen by the user is 45
```

## 📝 Thought Provoking Questions

1. Why might it be difficult to test this particular function using automated tests? Note: there are advanced strategies for testing this function using automated tests. Unfortunately, we won't get to them in this introductory course.
2. What types of arguments did you choose to pass into your function? Why?
3. What type of value is returned by your function? Why?
4. Are there any edge cases that you can think of that might make your program crash? What might they be?

## 💼 Add-Ons For the Portfolio

### (One Credit) Default Values

Sometimes, a user wants to accept a default value rather than specify something specific. Update your function to allow a caller to specify an optional default value. Additionally, update the prompt to give the user the option to use the default value. There are many ways to do this, but one idea might look something like:

```bash
Please enter a value. Enter "default" to use the default value of 100.
default

The value chosen by the user is 100
```

Otherwise, the output of the program should be identical to what you had beforehand.

### (Two Credits) Abort the Entry

Sometimes, a user decides that they want to exit out of a prompt rather than provide an input. Update your function to allow a user to abort from the menu without specifying any value. There are many ways to do this, but one idea might look something like:

```bash
Please enter a value. Enter "exit" to leave the menu.
exit

# The program ends here without printing anything to the screen.
```

Thinking about the code above, we run into a bit of an issue with the output. If the user chooses to abort the program, what should the function return? Should you:

* Return an invalid value?
* Return a lower or upper bound?
* Throw an error?
* Indicate that the user did or did not abort?
* Do something else entirely?

You get to choose what the program does if the user aborts the menu. After you implement the code, write a short paragraph explaining why you choose the return function that you did.

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/oops-shall-we-try-again-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
