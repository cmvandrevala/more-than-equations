---
title: Problem Set 2
tags: [csc-216]
description: This problem set is from week two of the course.
---

1. Compute each of the following summations by hand. Show all of your work.

$$
\sum_{j = 0}^5 j
$$

<div style="margin-bottom:2rem;"></div>

$$
\sum_{k = -2}^2 (1 - k)^2
$$

<div style="margin-bottom:2rem;"></div>

$$
\sum_{i = 0}^4 3^i
$$

<div style="margin-bottom:2rem;"></div>

$$
\sum_{i = 3}^{7} \left \lfloor \frac{i}{4} \right \rfloor
$$

2. Compute the Big-O value for $f(n) = 2^{n + 1} + n$. Justify your answer with a few sentences of explanation.

3. Compute the Big-$\Omega$ value for $f(n) = n^2 + 4n + 5$. Justify your answer with a few sentences of explanation.

4. Compute the Big-$\Theta$ value for $f(n) = 10 n log n$. Justify your answer with a few sentences of explanation.

5. Prove that the following relation is true. Hint: you can use a proof by induction.

$$
\sum_{i = 0}^N i = \frac{N(N+1)}{2}
$$

6. Prove that the number $\sqrt{2}$ is irrational. Hint: you can use a proof by contradiction.

7. According to [this reference](https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/), the Bubble Sort algorithm has a worst case time complexity of $O(n^2)$, but a best case time complexity of $O(n)$. Does this mean that Bubble Sort is more performant than an algorithm like Quicksort with a worst case and best case complexity of $O(n log n)$? Why don't we just use Bubble Sort in large systems, all the time?
