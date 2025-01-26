---
title: The Hofstadter G Sequence
date: 2025-01-26
tags: [c-plus-plus, java, csc-216, recursion]
description: In this lab, we will practice writing recursive functions by calculating the terms in an integer sequence.
---

## 🔖 Background Information

An integer sequence is a list of integers that follow some property or pattern. Mathematicians are interested in studying the properties of integer sequences because they are useful in a variety of fields including engineering, physics, cybersecurity, and data science.

In this lab, we are going to write a function that calculates terms in the "Hofstadter G Sequence". This is a sequence of integers given by the following relation:

$$
G(n) = n - G(G(n-1))
$$

$$
G(0) = 0
$$

This series comes from "Gödel, Escher, Bach: An Eternal Golden Braid" - a book by Douglas Hofstadter. According to Open Library [@hofstadterGodelEscherBach1980]:

> Douglas Hofstadter's book is concerned directly with the nature of "maps" or links between formal systems. However, according to Hofstadter, the formal system that underlies all mental activity transcends the system that supports it. If life can grow out of the formal chemical substrate of the cell, if consciousness can emerge out of a formal system of firing neurons, then so too will computers attain human intelligence. Gödel, Escher, Bach is a wonderful exploration of fascinating ideas at the heart of cognitive science: meaning, reduction, recursion, and much more.

## 🎯 Problem Statement

Write a program that calculates the nth term in the Hofstadter G Sequence.

## ✅ Acceptance Criteria

* Your program should calculate the nth term in the Hofstadter G Sequence using recursion.

## 📋 Dev Notes

* It is helpful to calculate the first few terms of the sequence on paper before attempting to write a recursive function.
* You are not required to write any optimzations for your recursive function. That being said, you will be asked to think about potential optimizations in the Thought-Provoking Questions.
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

1. Is your function an example of linear, binary, or multiple recursion? Why?
2. How large of an index can you pass to your function before it takes more than ten seconds to run?
3. How might you optimize this function to make it more efficient? Note: you don't have to actually make these changes in code. I just want you to brainstorm some ideas an discuss them with your classmates.

## 💼 Add-Ons For the Portfolio

N/A

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/the-hofstadter-g-sequence-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
