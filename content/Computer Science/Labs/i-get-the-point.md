---
layout: lab
title: I Get the Point!
draft: true
---

## 🔖 Background Information

In this lab, you will be performing a number of calculations on points in a 2D Cartesian coordinate system. A point in the 2D Cartesian coordinate system is an ordered pair \\( (x,y) \\) where x and y determine how far you travel horizontally and vertically in the plane.

The distance between two points, \\( (x_1, y_1) \\) and \\( (x_2, y_2) \\) is given by:

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

The midpoint between two points, \\( (x_1, y_1) \\) and \\( (x_2, y_2) \\) is given by:

$$
p = \left ( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right )
$$

This problem is available courtesy of {% cite jamesOperateThis %}.

## 🎯 Problem Statement

Create a class called `Point` that is initialized with the x- and y-coordinates of the point. Then, create the following overloaded operators on the class - distance, equality, inequality, midpoint, and output streaming.

## ✅ Acceptance Criteria

* Create a `Point` class that takes an x- and y-coordinate in its constructor.
* Override the `-` operator on `Point` so that it calculates the distance between the two points.
* Override the `==` operator on `Point` so that it determines if two points are the same coordinate or different coordinates.
* Override the `!=` operator on `Point` so that it determines if two points are not the same coordinate or different coordinates.
* Override the `/` operator on `Point` so that it determines midpoint between the two points.
* Override the `<<` operator on `Point` so that a user can stream a point as if it were a C++ string.
* Test all of the methods on the class either through unit tests, a driver program, or both.

## 📋 Dev Notes

There might be other methods that you want to implement to help you test this class like pretty print or a getter for the x and y coordinates. Feel free to implement those methods as needed.

## 🖥️ Example Output

You might create a driver program that utilizes your `Point` class. A code snippet from the program might look something like this:

```cpp
Point p1 = Point(3.2, 9.8);
Point p2 = Point(5.5, -1.2);

cout << p1 - p2 << endl; // Prints out 11.238
cout << p1 == p2 << endl; // Prints out 0 (false)
cout << p1 != p2 << endl; // Prints out 1 (true)
cout << p1 / p2 << endl; // Prints out a nicely formatted point such as (4.35, 4.3)
```

## 📝 Thought Provoking Questions

1. What type(s) do equality and inequality return?
2. What type does distance return?
3. What type does midpoint return?
4. Do you like the names of the overloaded operators? Are there any that might cause confusion?
5. Why didn't we overload operators for less than and greater than?

## 💼 Add-Ons For the Portfolio

### (One Credit) Multiplication by a Constant

Overload `operator*` to multiply the point by a constant. For instance:

```cpp
Point p = Point(3.2, 9.8);
cout << p * 2 << endl;   // This should print out (6.4, 19.6)
cout << p * 2.0 << endl;   // This should print out (6.4, 19.6)
cout << p * -3 << endl;   // This should print out (-9.6, -29.4)
```

A user should be able to multiply the point by an integer, a float, or a double. Update your unit tests and / or driver program to test this new functionality.

### (Three Credits) Array Indexing

Overload `operator[]` to return the x or y part of the point. For instance:

```cpp
Point p = Point(3.2, 9.8);
double my_x = p['x'];   // my_x should be 3.2
double my_y = p['y'];   // my_y should be 9.8
```

Update your unit tests and / or driver program to test this new functionality.

## 📘 Works Cited

{% bibliography --cited %}
