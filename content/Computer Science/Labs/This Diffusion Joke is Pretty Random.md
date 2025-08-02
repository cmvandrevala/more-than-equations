---
title: This Diffusion Joke is Pretty Random
date: 2024-12-31
tags: [c-plus-plus, java, csc-216, random-numbers]
description: The goal of this lab is to review some concepts from your introductory courses in C++ or Java by modeling a random walk.
---

## 🔖 Background Information

Diffusion is the process by which particles move from a region of high concentration to a region of low concentration. The evolution of a diffusing system can be complicated to study, but one way to model it simply is by using a "random walk".

In a one-dimensional random walk, a particle starts at some initial position. From this position, it has a 50% chance of taking one step to the right or a 50% chance of taking one step to the left. This process repeats over and over again for some number of steps until the particle reaches some final position. You might think that the particle will just end up right back where it started, but it turns out that the particle has a large probability of ending up away from its starting point.

In this lab, we are going to simulate a one-dimensional random walk for a single particle and analyze the runtime of the algorithm.

## 🎯 Problem Statement

Your goal is to simulate a one-dimensional random walk for a particle using either C++ or Java. Here is a rundown of how you can make this work:

1. Determine the number of steps ($N$) you want your particle to take. I would recommend starting with $N = 10$ and then increasing it from there.
2. Determine the number of trials ($M$) you want want to repeat for each value of $N$. I would recommend starting with $M = 10$ and then increasing it from there.
3. Start a particle at position zero. This might be as simple as creating a variable called `int currentPosition = 0`.
4. Flip a coin (i.e. generate one of two random numbers with a 50-50 chance). If the coin comes up heads, the particle moves one space to the right (i.e. `currentPosition++`). If the coin comes up tails, the particle moves one space to the left (i.e. `currentPosition--`).
5. Repeat the process of flipping the coin and updating the position $N$ times.
6. Record $N$, $M$, and the final position of the particle ($D$).
7. Use a benchmarking tool to record how long it took to complete each trial of the simulation.
8. Clear your simulation and start it over at position zero. Repeat this entire process for $M$ trials and a few different values of $N$.

## ✅ Acceptance Criteria

* Simulate a random walk using the algorithm described in the Problem Statement.
* At a minimum run your simulation with five different values for $N$, each with ten trials $M$. Feel free to try out more values for $N$ or a greater number of trials $M$ if you are curious!
* Use your data to answer the Thought Provoking Questions.

## 📋 Dev Notes

* You can use whatever language features you want to write this simulation (i.e. classes, functions, etc). However, you must implement the algorithm from scratch.
* Don't worry about trying to optimize the algorithm just yet. We are just going to analyze how well it performed in its current state.

## 🖥️ Example Output

As you run your simulation, your data might look something like this.

| Number of Steps (N) | Trial Number (M) | Final Position (D) | Time Taken in Milliseconds (T) |
| ------------------- | ---------------- | ------------------ | ------------------------------ |
| 10                  | 1                | 1                  | 150                            |
| 10                  | 2                | 3                  | 147                            |
| 10                  | 3                | -2                 | 163                            |
| 10                  | 4                | 6                  | 122                            |
| 100                 | 1                | 15                 | 304                            |
| 100                 | 2                | -6                 | 333                            |
| 100                 | 3                | 28                 | 298                            |
| 100                 | 4                | 2                  | 309                            |

And so on...

## 📝 Thought Provoking Questions

1. Create a nice plot of your results and attach it to your discussion post (Excel or some other graphing software is totally fine). You get to decide the best way to represent your data. Be sure to label your axes and give your plot a title!
2. As you increase the value of $N$, did the distance $D$ tend to go up, go down, or stay the same? You don't need to explain why - this is not a physics class 😊
3. What parameters / variables affect the runtime of the simulation?
4. How big can you make $N$ and $M$ before your simulation starts taking longer than 10 seconds to run?
5. How did you choose to store your output? Why did you pick this method?
6. How might the performance of your simulation change if you had to simulate three dimensions instead of one?

## 💼 Add-Ons For the Portfolio

N/A

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/this-diffusion-joke-is-pretty-random-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/this-diffusion-joke-is-pretty-random-java-template)

## 📘 Works Cited

N/A
