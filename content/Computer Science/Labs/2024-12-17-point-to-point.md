---
title: Point to Point
date: 2024-12-17
tags: [c++, csc-121, basic-math]
description: In this lab you write a program that will calculate the midpoint of two points in a Cartesian coordinate system.
---

## 🔖 Background Information

A point in the two-dimensional Cartesian plane can be specified by an ordered pair of numbers. For example, the point (1, 3) specifies that you should travel 1 unit in the horizontal direction (a.k.a x-direction) and 3 units in the vertical direction (a.k.a y-direction).

The midpoint between two points in the 2D Cartesian plane is calculated by taking the average of the x- and y-components separately. For example, the midpoint between (1, 3) and (-5, 7) is (-2, 5):

$$
x = \frac{1 + (-5)}{2} = -2
$$

$$
y = \frac{3 + 7}{2} = 5
$$

This problem is available courtesy of Professor Jason James[@jamesPointPoint2017].

## 🎯 Problem Statement

Write a program that calculates the midpoint of a line segment in the 2D Cartesian plane.

## ✅ Acceptance Criteria

* When I execute the program, I should see a welcome prompt.
* Then, the program should ask me to enter a value for each of the two points. This can be done on one line or separately via multiple prompts.
* After I give my input, the program should confirm that it got the input.
* Then, the program should print out the midpoint of the line segment specified by the inputs. The output must be formatted nicely (see the Example Output below).
* Finally, I should see an exit message as the program gracefully exits.

## 📋 Dev Notes

You do not need to handle random inputs from the user in your code. However, there is one thought-provoking question where I ask you what sorts of erroneous inputs you might expect to encounter from a user.

## 🖥️ Example Output

```bash
$ ./midpoint.out

Welcome to the 2D Midpoint Program!

What is the first point in the plane?
3.4 12.2

What is the second point in the plane?
13.4 12.2

Calculating the midpoint now...

The midpoint of the line segment between (3.4, 12.2) and (13.4, 12.2) is (8.4, 12.2).

Thank you for using the 2D Midpoint Program.
```

## 📝 Thought Provoking Questions

1. How many variables are needed in this program? There are two points being provided by a user and a third point being output by the program.
2. What is the formula that you use to calculate the midpoint between the two given points? How are the calculations done for the x-components similar to / different from the calculations done for the y-components?
3. How are you going to test this program to make sure that it works as expected? Specifically, how many pairs of points do you think you need to check to make sure that everything is correct? Do you need to pick pairs of points with particular attributes (e.g. different quadrants, along different axes, etc)?
4. What sorts of erroneous inputs might a user enter in your program? Reminder: you do not need to actually handle these inputs in your code.

## 💼 Add-Ons For the Portfolio

### (One Credit) A More Natural Input - Thought Provoking Questions

Students are complaining that their teacher makes them use standard ordered pair notation when writing points in class, but your program makes them enter points without the notation. In this add-on, we will not be updating the code itself, but rather thinking about what it would take to update the code to accept points in the canonical ordered-pair style - parenthesis surrounding the coordinates and a comma between them.

Answer the following questions:

1. To make the input style more natural, you will need to make the user type in the parentheses and the comma. What types of variable(s) will this require?
2. How many variables might you need to make the input style more natural for the user?
3. How can you distinguish between parentheses, commans, and numbers when you retrieve the input from the user?
4. What might happen if a user enters their points using a different style of brackets? For example, [1, 3] vs. (1, 3) vs. {1, 3}? How might you support all of these types of inputs?

### (Two Credits) A More Natural Input - Code

Students are complaining that their teacher makes them use standard ordered pair notation when writing points in class, but your program makes them enter points without the notation. Update your program to force the user to enter the end points of the segment in the canonical ordered-pair style - parenthesis surrounding the coordinates and a comma between them. The program should not change, otherwise.

The program output might now look something like:

```bash
$ ./midpoint.out

Welcome to the 2D Midpoint Program!

What is the first point in the plane?
(3.4, 12.2)

What is the second point in the plane?
(13.4, 12.2)

Calculating the midpoint now...

The midpoint of the line segment between (3.4, 12.2) and (13.4, 12.2) is (8.4, 12.2).

Thank you for using the 2D Midpoint Program.
```

Note: add-ons can be done in any order. Although it is not required, it might be helpful to do the one-credit add-on before attempting this one.

### (Three Credits) Different Options for Inputs

Some students want to use other delimiiters when they type points into your program. The list of styles that they want to support are:

1. Parentheses, square brackets, or angle brackets surrounding the numbers.
2. A comma or a semicolon separating the numbers

Update your program to support these delimitters in any combination. You can always assume that the opening and closing braces are the same style - e.g. <1, 2> is valid but [6, 5> is not.

The program output might now look something like:

```bash
$ ./midpoint.out

Welcome to the 2D Midpoint Program!

What is the first point in the plane?
<3.4; 12.2>

What is the second point in the plane?
[13.4; 12.2]

Calculating the midpoint now...

The midpoint of the line segment between (3.4, 12.2) and (13.4, 12.2) is (8.4, 12.2).

Thank you for using the 2D Midpoint Program.
```

The program should not change, otherwise.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/a-terribly-weighty-subject-cpp-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
