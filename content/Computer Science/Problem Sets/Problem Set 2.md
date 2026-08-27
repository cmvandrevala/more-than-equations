---
title: Problem Set 2
tags: [csc-216]
description: This problem set is from week two of the course.
---

1. Show that $f(n) = 3$ (a constant) is $O(1)$. Justify your answer with a proof.

---

2. Show that $f(n) = 2^{n + 1} + n$ is $O(2^n)$. Justify your answer with a proof.

---

3. Show that $f(n) = n^2 + 4n + 5$ is $\Omega (n^2)$. Justify your answer with a proof.

---

4. Show that $f(n) = 10 n log n$ is $\Theta (n log n)$. Justify your answer with a proof.

---

5. Prove by induction that $n^3 + 2n$ is divisible by $3$ for every non-negative integer n.

---

6. According to [this reference](https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/), the Bubble Sort algorithm has a worst case time complexity of $O(n^2)$, but a best case time complexity of $O(n)$. Does this mean that Bubble Sort is more performant than an algorithm like Quicksort with a worst case and best case complexity of $O(n log n)$? Why don't we just use Bubble Sort in large systems, all the time?

---

7. Suppose I create a data structure called `MyCoolStructure` which has four operations. Each of the operations runs in `O(1)` time:

```cpp
MyCoolStructure mcs;

mcs.insert_first(x); // inserts "x" at the front of the structure
mcs.insert_last(x);  // inserts "x" at the end of the structure
mcs.delete_first();  // deletes the element at the front of the structure and returns it to the user
mcs.delete_last();   // deletes the element at the end of the structure and returns it to the user
```

* Write the pseudocode for a function called `void swap_ends(MyCoolStructure mcs)` which swaps the first and last items in the data structure.
* What is the Big-$\Theta$ time complexity of this function? Justify your answer with a proof.

8. What is the difference between "wall time", "user cpu time", and "kernel cpu time" in the context of benchmarking code?
