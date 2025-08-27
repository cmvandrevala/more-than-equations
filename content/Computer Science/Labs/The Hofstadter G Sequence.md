---
title: The Hofstadter G Sequence
date: 2025-01-26
tags: [c-plus-plus, java, csc-216, recursion]
description: In this lab, we will practice writing recursive functions by calculating the terms in an integer sequence.
---

## 🔖 Background Information

An integer sequence is a list of integers that follow some property or pattern. Mathematicians are interested in studying the properties of integer sequences because they are useful in a variety of fields including engineering, physics, cybersecurity, and data science.

In this lab, we are going to write a few functions that calculate terms in the "Hofstadter G Sequence". This is a sequence of integers given by the following relation:

$$
G(n) = n - G(G(n-1))
$$

$$
G(0) = 0
$$

This series comes from "Gödel, Escher, Bach: An Eternal Golden Braid" - a book by Douglas Hofstadter. According to Open Library [@hofstadterGodelEscherBach1980]:

> Douglas Hofstadter's book is concerned directly with the nature of "maps" or links between formal systems. However, according to Hofstadter, the formal system that underlies all mental activity transcends the system that supports it. If life can grow out of the formal chemical substrate of the cell, if consciousness can emerge out of a formal system of firing neurons, then so too will computers attain human intelligence. Gödel, Escher, Bach is a wonderful exploration of fascinating ideas at the heart of cognitive science: meaning, reduction, recursion, and much more.

## 🎯 Problem Statement

Write a program that calculates the nth term in the Hofstadter G Sequence in a few different ways:

1. A naive recursive method that uses the recurrence relation described in the Background Information section.
2. An improved recursive method that memoizes the output of the recurrence relation.

## ✅ Acceptance Criteria

* Write a program that calculates the nth term in the Hofstadter G Sequence using the two methods described in the Problem Statement.
* Ensure that your functions work either through unit tests or a driver program.
* Run the functions with a variety of inputs and record the average times of each run. I recommend starting with ten different values for the argument with ten trials apiece for each of the functions. You might need more data to see a clear trend!
* Use your results to answer the Thought-Provoking Questions.

## 📋 Dev Notes

* It is helpful to calculate the first few terms of the sequence on paper before attempting to write a recursive function (just to see how it works).
* In order to help you verify that your program is working properly, here are the first few terms of the sequence: 0, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6, 7, ...

### Sample Calculations

I have written out a few example calculations here for your reference. First, I calculate $G(1)$.

$$
\begin{align}
G(1) &= 1 - G(G(1-1)) \\
&= 1 - G(G(0)) \\
&= 1 - G(0) \\
&= 1 - 0 \\
&= 1
\end{align}
$$

Then, I use that result to calculate $G(2)$.

$$
\begin{align}
G(2) &= 2 - G(G(2-1)) \\
&= 2 - G(G(1)) \\
&= 2 - G(1) \\
&= 2 - 1 \\
&= 1
\end{align}
$$

Then, I use that result to calculate $G(3)$ (and so on).

$$
\begin{align}
G(3) &= 3 - G(G(3-1)) \\
&= 3 - G(G(2)) \\
&= 3 - G(1) \\
&= 3 - 1 \\
&= 2
\end{align}
$$

## 🖥️ Example Output

Regardless of whether you use C++ or Java, I would expect to see a function or method that returns the nth number in the sequence. The first few terms might look like:

```text
gSequence(0) == 0
gSequence(1) == 1
gSequence(2) == 1
gSequence(3) == 2
gSequence(4) == 3
gSequence(5) == 3
gSequence(6) == 4
```

## 📝 Thought Provoking Questions

1. Create one or more scatterplots showing the time it takes each function to run as a function of input. Then, plot a curve of best fit to each of the datasets along with their equations and R^2 values. Be sure to distinguish the functions on your plots so that we can see how they relate. Post your plot(s) for everyone to see.
1. According to your data, do your algorithms follow a linear, binary, or multiple recursive pattern? How do you know?
1. According to your data, did the memoized algorithm offer any speedup over the naive implementation? How do you know?
1. Was there a large input that caused either of your implementations to hang indefinitely or crash? If so, what was it?
1. Did you use C++ or Java in this lab? This may or may not matter when comparing your results with other people!

## 💼 Add-Ons For the Portfolio

N/A

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/the-hofstadter-g-sequence-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/the-hofstadter-g-sequence-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
