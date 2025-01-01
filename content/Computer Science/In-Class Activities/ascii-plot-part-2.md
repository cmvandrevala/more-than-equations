---
title: "ASCII Plot: Part 2"
tags: [c-plus-plus, csc-121, functions]
description: This activity will expand on part one of the ASCII Plot activity and give you more practice encapsulating business logic in functions.
---

## 🔖 Background Information

N/A

## 🎯 Problem Statement

The goal of this activity is to expand on the code written in [[ascii-plot-part-1 | ASCII Plot: Part 1]]. Now, we are going to handle the situation where we want to plot points along the x and y axes.

## ✅ Acceptance Criteria

* A user should be able to enter the x and y coordinates of a point (each will be an integer greater than or equal to zero).
* If a user enters a point along an axis, they should see the point correctly plotted in that space.

## 📋 Dev Notes

* Your code should support the same business logic as in part one, plus the new addition of plotting points along each axis.
* You can assume that the x and y coordinates will always be integers that are greater than or equal to zero.
* You do not need to write any validation of the inputted coordinates.

## 🖥️ Example Output

Some of the sample outputs are as follows:

```bash
./plot.out

Enter the x-coordinate that you want to plot: 5
Enter the y-coordinate that you want to plot: 2

^
|
|
|
|         X
|
+ - - - - - ->
```

```bash
./plot.out

Enter the x-coordinate that you want to plot: 5
Enter the y-coordinate that you want to plot: 0

^
|
|
|
|
|
+ - - - - X ->
```

```bash
./plot.out

Enter the x-coordinate that you want to plot: 0
Enter the y-coordinate that you want to plot: 3

^
|
|
X
|
|
+ - - - - - ->
```

## 📘 Works Cited

N/A
