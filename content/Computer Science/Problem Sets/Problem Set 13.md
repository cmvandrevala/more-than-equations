---
title: Problem Set 13
tags: [csc-216]
description: This problem set is from week thirteen of the course.
---

1. Show that the running time of the merge-sort algorithm on an n-element sequence is $O(n log n)$, even when n is not a power of two.

---

2. An algorithm that sorts key-value entries by key is said to be straggling if any time two entries $e_i$ and $e_j$ have equal keys, and $e_i$ appears before $e_j$ in the input, then the algorithm places $e_i$ after $e_j$ in the output. Describe a change to the merge-sort algorithm to make it straggling.

---

3. Of the $n!$ possible inputs to a given comparison-based sorting algorithm on a list of $n$ elements, what is the absolute maximum number of inputs that could be correctly sorted with just $n$ comparisons? Prove your answer.

---

4. Suppose you are throwing a fancy dinner party with $n$ guests total. When a guest walks through the front door, they check their coat in and continue to the party. However, the coat check mixes up all of the coats during dinner, so that afterward each guest receives a random coat when they prepare to leave. In other words, each guest gets their own coat with probability $1/n$. What is the expected number of guests who get their correct coat?

---

5. Suppose we are given two n-element sorted sequences, $A$ and $B$. Each of these sequences have distinct elements, but there might be repeated elements between the sequences. Write the pseudocode for an $O(n)$ time function that takes $A$ and $B$ as arguments and returns a new sorted sequence which is the intersection of $A$ and $B$.
