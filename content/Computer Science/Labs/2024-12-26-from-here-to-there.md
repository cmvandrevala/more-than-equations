---
title: From Here to There
date: 2024-12-26
tags: [csc-121, basic-math]
description: In this lab, you will calculate the distance between two points in a Cartesian coordinate system.
---

## 🔖 Background Information

The distance between two points, $$ (x_1, y_1) $$ and $$ (x_2, y_2) $$, in the 2D Cartesian coordinate system is given by the Pythagorean Theorem:

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

This problem is available courtesy of Professor Jason James [@jamesHereTherE2017].

## 🎯 Problem Statement

Write a program that calculates the distance between two points in the 2D Cartesian plane.

## ✅ Acceptance Criteria

* When I execute the program, I should see a welcome prompt.
* Then, the program should ask me to enter a value for two points in a two-dimensional Cartesian coordinate plane. You can decide how to get this input from the user - e.g. single prompt, multiple prompts, etc.
* After I give my input, the program should confirm that it got the input.
* Then, the program should print out the distance between the two points. The output must be formatted nicely (see the Example Output below).
* Finally, I should see an exit message as the program gracefully exits.

## 📋 Dev Notes

You do not need to handle random inputs from the user in your code. However, there is one thought-provoking question where I ask you what sorts of erroneous inputs you might expect to encounter from a user.

## 🖥️ Example Output

```bash
$ ./distance.out

Welcome to the 2D Distance Program!

What is the first point in the plane?
3.4 12.2

What is the second point in the plane?
13.4 12.2

Calculating the distance now...

The distance between (3.4, 12.2) and (13.4, 12.2) is 10.

Thank you for using the 2D Distance Program.
```

## 📝 Thought Provoking Questions

1. What functions, if any, did you use from the standard math library?
2. How did you test this program to make sure that it works as expected? Specifically, how many pairs of points do you think you need to check to make sure that everything is correct? Do you need to pick pairs of points with particular attributes (e.g. different quadrants, along different axes, etc)?
3. What sorts of erroneous inputs might a user enter in your program? Reminder: you do not need to actually handle these inputs in your code.

## 💼 Add-Ons For the Portfolio

### (Two Credits) Two or Three-Dimensional Points

Update your program to allow users to find the distance between two points in a 2D or 3D Cartesian coordinate system. The program should prompt the user to determine whether they want to find the distance in 2D or 3D, and then continue as expected.

```bash
$ ./distance.out

Welcome to the Distance Program!

Do you want to calculate a distance in 2 or 3 dimensions?
2

What is the first point in the plane?
3.4 12.2

What is the second point in the plane?
13.4 12.2

Calculating the distance now...

The distance between (3.4, 12.2) and (13.4, 12.2) is 10.

Thank you for using the Distance Program.
```

```bash
$ ./distance.out

Welcome to the Distance Program!

Do you want to calculate a distance in 2 or 3 dimensions?
3

What is the first point in the plane?
3.4 12.2 10.0

What is the second point in the plane?
13.4 12.2 2.0

Calculating the distance now...

The distance between (3.4, 12.2, 10.0) and (13.4, 12.2, 2.0) is 12.8.

Thank you for using the Distance Program.
```

Recall that the distance between two points, \\( (x_1, y_1, z_1) \\) and \\( (x_2, y_2, z_2) \\), in the 3D Cartesian coordinate system is:

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}
$$

### (Three Credits) Cosine Similarity

The cosine similarity is another way that you might measure the relationship between two points. Imagine each of the points is a vector. In order to calculate the cosine similarity, first you calculate the dot product of the two vectors and then you divide by the magnitude of each vector.

$$
cs = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}
$$

The dot product of two vectors, \\( \vec{a} = (x_1, y_1) \\) and \\( \vec{b} = (x_2, y_2) \\), in the 2D Cartesian coordinate system is given by:

$$
\vec{a} \cdot \vec{b} = x_1 x_2 + y_1 y_2
$$

The magnitude of a vector is just its distance from the origin:

$$
|\vec{a}| = \sqrt{x_1^2 + y_1^2}
$$

Update your code to return the cosine similarity in addition to the original distance calculation for 2D points. Your output might look something like this:

```bash
$ ./distance.out

Welcome to the 2D Distance Program!

What is the first point in the plane?
3.4 12.2

What is the second point in the plane?
13.4 12.2

Calculating the distance now...

The distance between (3.4, 12.2) and (13.4, 12.2) is 10.
The cosine similarity between (3.4, 12.2) and (13.4, 12.2) is 0.847.

Thank you for using the 2D Distance Program.
```

Note, you do not have to calculate the cosine similarity for the 3D case if you decide to do the "Two or Three-Dimensional Points" add-on.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/from-here-to-there-cpp-template)

## 📘 Works Cited
