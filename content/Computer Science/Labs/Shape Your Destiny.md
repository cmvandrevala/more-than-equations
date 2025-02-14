---
title: Shape Your Destiny
date: 2025-02-14
tags: [c-plus-plus, java, csc-122, csc-214, polymorphism, inheritance]
description: In this lab you will create a set of classes and interfaces that implement polymorphic relationships and inheritance structures.
---

## 🔖 Background Information

In this lab we will be calculating the perimeter and area of a variety of shapes. Details of these calculations are shown below.

### Circle

* The area of a circle with radius $r$ is given by $A = \pi r^2$.
* The circumference of a circle with radius $r$ is given by $C = 2 \pi r$.

### Rectangle

* The area of a rectangle with sides $\ell$ and $w$ is given by $A = \ell w$.
* The perimeter of a rectangle with sides $\ell$ and $w$ is given by $P = 2 (\ell + w)$.
* A rectangle has four sides.

### Right Triangle

* The area of a right triangle with legs $\ell$ and $w$ is given by $A =\frac{1}{2} \ell w$.
* The perimeter of a right triangle with legs $\ell$ and $w$ is given by $P = \ell + w + \sqrt{\ell^2 + w^2}$.
* A right triangle has three sides.

### Square

A square is a type of rectangle where the sides $\ell$ and $w$ are congruent (i.e. identical in size).

### Isoceles Right Triangle

A isoceles right triangle is a type of right triangle where the legs $\ell$ and $w$ are congruent (i.e. identical in size).

## 🎯 Problem Statement

The primary goal of this lab is to explore inheritance and polymorphism by creating relationships between classes represented by the shapes described above. Perform the actions outlined in the Acceptance Criteria below. For your convenience, I have divided them up into separate parts so that you can differentiate between inheritance and polymorphism.

## ✅ Acceptance Criteria

### Part One - Abstract Base Classes

In the first part of this lab, we are going to create a relationship between an abstract `Shape` class and a few derived classes.

1. Start off by writing an abstract class called `Shape` with virtual methods `getArea()` and `getPerimeter()`.
2. Write three classes that inherit from the `Shape` class: `Circle`, `Rectangle`, and `RightTriangle`. In each of these cases, you will need to override the `getArea()` and `getPerimeter()` methods with their specific implementations.
3. Unit test each of the inherited classes. You should be able to create a new instance of each class with whatever dimensions are appropriate and then assert that the area and perimeter are correct.
4. Commit and push up your code to GitHub.

### Part Two - Inheritance Trees

We focused on an abstract base class in the first part of this lab. Now, we will focus on building a larger inheritance tree.

1. Update your program with a new concrete class called `Square`. The `Square` class should inherit its behavior from the `Rectangle` class. You may or may not need to overwrite the constructor, `getArea()`, and `getPerimeter()` within `Square`.
2. Update your program with a new concrete class called `IsocelesRightTriangle`. The `IsoscelesRightTriangle` class should inherit its behavior from the `RightTriangle` class. You may or may not need to overwrite the constructor, `getArea()`, and `getPerimeter()` within `IsocelesRightTriangle`.
3. Unit test each of the new classes. You should be able to create a new instance of each class with whatever dimensions are appropriate and then assert that the area and perimeter are correct.
4. Commit and push up your code to GitHub.

### Part Three - Interfaces

In the previous parts of the lab, we focused on inheritance. Now we will focus on polymorphism through interfaces.

1. Create a new interface called `Polygon`. This interface should contain one function declaration called `numberOfSides` which returns the number of sides that the shape represented by the class contains.
2. Update `Rectangle`, `Square`, `RightTriangle`, and `IsoscelesRightTriangle` to implement the `Polygon` interface.
3. Unit test the changes in each of the classes. You should be able to create a new instance of each class with whatever dimensions are appropriate and then assert that the number of sides are correct.
4. Commit and push up your code to GitHub.

## 📋 Dev Notes

There are a lot of steps to this lab, but don't panic! Focus on implementing each step to completion and ensure that it works with good unit tests. If you try to rush through the early steps of the lab, you will find that things break downstream.

## 🖥️ Example Output

N/A

## 📝 Thought Provoking Questions

1. Suppose I added more shape-based classes to the structure like `Kite` or `Rhombus`. Eventually, we would get to a point where a shape like a `Square` is geometrically also a `Rectangle`, a `Rhombus`, and a `Kite`. Would you be able to model this relationship with our inheritance tree? Why or why not?
2. Suppose I wanted to change the abstract `Shape` class in the inheritance tree versus change the `Polygon` interface. Which would be easier to do? Why?

## 💼 Add-Ons For the Portfolio

### (Two Credits) Parallelogram

A rectangle is a type of parallelogram and a parallelogram is a type of polygon. Update your classes and interfaces to include a parallelogram in the structure. Be sure to unit test where appropriate!

## 📘 Works Cited

N/A
