---
layout: lab
title: Oops! Shall We Try Again?
draft: true
---

## 🔖 Background Information

When the user is prompted to enter a value by a program, that value is often under some kind of constraints from the problem they are solving. For instance:

* A time must be non-negative
* A correlation coefficient must lie between -1 and +1
* A menu choice must be one of a particular set of values

Such input validation is easily done with a `while` loop. Consider the following pseudocode:

```cpp
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

This problem is available courtey of {% cite jamesOopsShallWe2017 %}.

## 🎯 Problem Statement

Write a generalized input-validation function. This function should take in one or more arguments for the bounds, prompts, and messages and provide an interface for a user to enter a value under some conditions. After the user selects a valid value, the function should return the value.

## ✅ Acceptance Criteria

* You can assume that this function is prompting the user to enter an integer.
* You can decide what arguments the function should take. Someone utilizing the function should be able to specify:
  * An optional lower bound for the integer
  * An optional upper bound for the integer
  * The prompt that will be displayed that asks a user for input
  * The error message that will be displayed given an invalid input
* You should test your function using a driver. Recall that a driver is a test application that exercises the function in a variety of scenarios.

## 📋 Dev Notes

* You can choose if you want to put your function in a library or include it directly in the driver program.

## 🖥️ Example Output

```bash
# In this example, suppose we have a driver program called menu.cpp that
# tests a prompt(...) function that we wrote. The driver program might look
# something like:
#
# #include <iostream>
# using namespace std;
# int main() {
#   int value = prompt(0, 100, "Please enter a value", "Your value is invalid");
#   cout << "The value chosen by the user is " << value << endl;
#   return 0;
# }

$ ./menu.out
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

1. Why might it be difficult to test this particular function using automated tests (note: there are more advanced strategies for testing this function using automated tests which we may or may not see later in the semester).
2. What arguments did you choose to pass into your function? Why?
3. What type of value is returned by your function? Why?
4. Are there any edge cases that you can think of that might make your program crash? What might they be?

## 💼 Add-Ons For the Portfolio

### (One Credit) Default Values

Sometimes, a user wants to accept a default value rather than specify something specific. Update your function to allow a caller to specify an optional default value. Additionally, update the prompt to give the user the option to use the default value. There are many ways to do this, but one idea might look something like:

```bash
$ ./menu.out
Please enter a value. Enter "default" to use the default value of 100.
default

The value chosen by the user is 100
```

Otherwise, the output of the program should be identical to what you had beforehand.

### (Two Credits) Abort the Entry

Sometimes, a user decides that they want to exit out of a prompt rather than provide an input. Update your function to allow a user to abort from the menu without specifying any value. There are many ways to do this, but one idea might look something like:

```bash
$ ./menu.out
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

### (Three Credits) String Input Types

Right now, our menu can only handle integer inputs. However, it would be nice to be able to handle both strings and integers. Update your code so that a consumer of your function can choose to prompt the user for a string or integer input. There are a variety of ways to do this (i.e. overloaded functions, generics, etc.).

The string function should not have any lower or upper bounds. The string is valid as long as it is greater than zero in length.

```bash
# In this example, suppose we have a driver program called menu.cpp that
# tests a prompt(...) function that we wrote. The driver program might look
# something like:
#
# #include <iostream>
# using namespace std;
# int main() {
#   int value = prompt("Please enter a string value", "Your string value is invalid");
#   cout << "The value chosen by the user is " << value << endl;
#   return 0;
# }

$ ./menu.out
Please enter a value


Your value is invalid
Please enter a value
This is my string

The value chosen by the user is "This is my string"
```

## 📘 Works Cited

{% bibliography --cited %}
