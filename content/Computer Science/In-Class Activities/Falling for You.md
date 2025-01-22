---
title: Falling for You
tags:
  - c-plus-plus
  - csc-121
  - basic-math
  - cmath
description: This activity will give you some practice working with the cmath library.
---

## 🔖 Background Information

Suppose I were to drop an object from a height $h$ above the ground. If I were to ignore air resistance and assume that it has no initial velocity, its speed right before it hits the ground is:

$$
v_f = \sqrt{2gh}
$$

In this equation $g$ is the acceleration due to gravity near the surface of the Earth ($9.8 \: m/s^2$).

If I were to take air resistance into account, the object will reach some terminal velocity after falling for a short distance:

$$
v_f = \sqrt{\frac{mg}{k}}
$$

Here, $m$ is the mass of the object, $g$ is the acceleration due to gravity near the surface of the Earth, and $k$ is the air resistance coefficient (a.k.a drag coefficient) of the object under study.

According to an analysis by Davide Borchia, you might approximate the drag coefficient of a squirrel to that of a skydiver: $k = 0.24 \: kg/m$. We also know that the average mass of a squirrel is $0.450 \: kg$ [@borchiaFreeFallAir2022].

## 🎯 Problem Statement

Write a program that asks the user for a starting height of an average squirrel. Then, calculate the following quantities and print them to the console:

1. What is the terminal velocity of the squirrel if we ignore air resistance?
2. What is the terminal velocity of the squirrel if we take air resistance into account?

Once you have a working program, use it to answer the following question: accoring to Borchia's model, do you think a squirrel would be able to survive a fall from the cruising height of a Boeing 747 ($10,670 \: m$)?

## ✅ Acceptance Criteria

Your program should...

* Prompt the user for an initial squirrel height.
* Print out the calculated fall times with and without air resistance.

## 📋 Dev Notes

* You do not need to write any validation for this program.
* No squirrels were harmed in the making of this activity 🐿️ ❤️

## 🖥️ Example Output

```bash
./squirrel.out

What is the starting height of your squirrel (in meters)?
2

Without air resistance, the terminal velocity of the squirrel is 6.26 m/s.
With air resistance, the terminal velocity of the squirrel is 4.29 m/s.

And I'm freeeee... free faaaaaalling...
```

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
