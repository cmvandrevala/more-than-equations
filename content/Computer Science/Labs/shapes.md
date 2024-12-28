---
layout: lab
title: Shapes
draft: true
---

## 🔖 Background Information

In this lab we will be calculating the perimeter and area of a variety of shapes.

### Circle

* The area of a circle with radius $$r$$ is given by $$A = \pi r^2$$.
* The circumference of a circle with radius $$r$$ is given by $$C = 2 \pi r$$.

### Rectangle

* The area of a rectangle with sides $$\ell$$ and $$w$$ is given by $$A = \ell w$$.
* The perimeter of a rectangle with sides $$\ell$$ and $$w$$ is given by $$P = 2 (\ell + w)$$.

### Right Triangle

* The area of a right triangle with legs $$\ell$$ and $$w$$ is given by $$A =\frac{1}{2} \ell w$$.
* The perimeter of a right triangle with legs $$\ell$$ and $$w$$ is given by $$P = \ell + w + \sqrt{\ell^2 + w^2}$$.

### Square

A square is a type of rectangle where the sides $$\ell$$ and $$w$$ are identical.

### Isoceles Right Triangle

A isoceles right triangle is a type of right triangle where the legs $$\ell$$ and $$w$$ are identical.

## 🎯 Problem Statement

The primary goal of this lab is to explore inheritance and polymorphism. The secondary goal of this lab is to become familiar with pull requests and the process of reviewing code on GitHub. Perform the actions outlined in the Acceptance Criteria below.

## ✅ Acceptance Criteria

### Part One - Polymorphism

In the first part of this lab, we are going to create a polymorphic relationship between an abstract `Shape` class and a few derived classes.

1. Start off by writing an abstract class called `Shape` with virtual methods `get_area()` and `get_perimeter()`.
2. Create three subclasses that implement the `Shape` interface: `Circle`, `Rectangle`, and `RightTriangle`. In each of these cases, you will need to override the `get_area()` and `get_perimeter()` methods with their specific implementations.
3. Test each of the subclasses using `assert` statements. You should be able to create a new instance of each class with whatever dimensions are appropriate and then assert that the area and perimeter are correct.
4. Commit and push up your code to GitHub using a feature branch. Make sure that you don't push these changes up to the `main` branch!
5. Set up a Pull Request to merge these changes into main.
6. Have your partner review and approve your code. Be sure to address any changes that they might request.
7. Merge your code into the `main` branch.
8. Make sure all of the partners in the group pull down the latest changes from the repository.

### Part Two

We focused on polymorphism in the first part of this lab. Now, we will focus on inheritance.

1. Update your program with a new concrete class called `Square`. The `Square` class should inherit its behavior from the `Rectangle` class. You may or may not need to overwrite the constructor, `get_area()`, and `get_perimeter()` within `Square`.
2. Update your program with a new concrete class called `IsocelesRightTriangle`. The `IsoscelesRightTriangle` class should inherit its behavior from the `RightTriangle` class. You may or may not need to overwrite the constructor, `get_area()`, and `get_perimeter()` within `IsocelesRightTriangle`.
3. Write a function with the declaration `void print_area_to_console(Shape *s)`. This function should take a `Shape` object and print out a nice message which includes the name of the shape and its area. You should be able to use it with all of the shapes that you created!
4. Test each of the classes that you created via `assert` statements.
5. Commit and push up your code to GitHub using a feature branch. Make sure that you don't push these changes up to the `main` branch!
6. Set up a Pull Request to merge these changes into main.
7. Have your partner review and approve your code. Be sure to address any changes that they might request.
8. Merge your code into the `main` branch.
9. Make sure all of the partners in the group pull down the latest changes from the repository.

## 📋 Dev Notes

* You need a partner to work on this lab.
* One person in the group should create a GitHub repository to house the project. They should make sure that they add all of the members of the group as collaborators via the Settings tab.

## 🖥️ Example Output

N/A

## 📝 Thought Provoking Questions

N/A

## 💼 Add-Ons For the Portfolio

N/A

## 📘 Works Cited

N/A
